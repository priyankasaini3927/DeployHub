from services.ssh_service import execute_command

def setup_server(host, username, key_path):

    commands = [
        "sudo apt update -y",
        "sudo apt install docker.io -y",
        "sudo systemctl enable docker",
        "sudo systemctl start docker",
        "sudo docker --version",
        "git --version",
    ]

    return execute_command(
        host=host,
        username=username,
        key_path=key_path,
        commands=commands
    )