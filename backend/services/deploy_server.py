from services.ssh_service import execute_command


def deploy_repo(host, username, key_path, repo):

    commands = [

        "rm -rf app",

        f"git clone {repo} app",

        "cd app && sudo docker build -f dockerfile -t deployhub-app .",
        
        "sudo docker rm -f deployhub-container || true",

        "sudo docker run -d -p 80:5000 --name deployhub-container deployhub-app",

        "sudo docker ps"

    ]

    return execute_command(
        host=host,
        username=username,
        key_path=key_path,
        commands=commands
    )