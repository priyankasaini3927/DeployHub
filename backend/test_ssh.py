from services.ssh_service import execute_command

HOST = "44.200.51.80"
USERNAME = "ubuntu"
KEY = r"C:\Users\Priyanka\OneDrive\Desktop\Keys\deployhub-key.pem"

commands = [
    "sudo apt update -y",
    "sudo apt install docker.io -y",
    "sudo systemctl enable docker",
    "sudo systemctl start docker",
    "docker --version"
]

for cmd in commands:
    print("=" * 60)
    print("Running:", cmd)

    result = execute_command(
        host=HOST,
        username=USERNAME,
        key_path=KEY,
        command=cmd
    )

    print(result["output"])

    if result["error"]:
        print(result["error"])