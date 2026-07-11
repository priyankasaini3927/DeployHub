import boto3
import os
import time
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), "..", ".env"))

print("===== NEW AWS SERVICE LOADED =====")

ec2 = boto3.client(
    "ec2",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
    region_name=os.getenv("AWS_REGION")
)


def launch_instance():

    print("===== RUN_INSTANCES CALLED =====")
    # 1. Create a NEW EC2 instance every deployment
    response = ec2.run_instances(
        ImageId=os.getenv("AMI_ID"),
        InstanceType="t3.micro",
        KeyName=os.getenv("KEY_PAIR"),
        SecurityGroupIds=[os.getenv("SECURITY_GROUP_ID")],
        SubnetId=os.getenv("SUBNET_ID"),
        MinCount=1,
        MaxCount=1,
        TagSpecifications=[
            {
                "ResourceType": "instance",
                "Tags": [
                    {
                        "Key": "Name",
                        "Value": "DeployHub-Instance"
                    }
                ]
            }
        ]
    )
    print(response)

    instance_id = response["Instances"][0]["InstanceId"]

    print("Created:", instance_id)

    # 2. Wait until EC2 is running
    waiter = ec2.get_waiter("instance_running")
    waiter.wait(InstanceIds=[instance_id])

    # 3. Reload instance details
    response = ec2.describe_instances(
        InstanceIds=[instance_id]
    )

    instance = response["Reservations"][0]["Instances"][0]

    return {
        "success": True,
        "instance_id": instance["InstanceId"],
        "public_ip": instance["PublicIpAddress"]
    }