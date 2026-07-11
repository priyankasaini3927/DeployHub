import paramiko

def execute_command(host, username, key_path, commands):

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    private_key = paramiko.RSAKey.from_private_key_file(key_path)

    ssh.connect(
        hostname=host,
        username=username,
        pkey=private_key,
        timeout=30,
        allow_agent=False,
        look_for_keys=False
    )

    results = []

    for command in commands:

        print(f"Executing: {command}")

        stdin, stdout, stderr = ssh.exec_command(command)

        exit_code = stdout.channel.recv_exit_status()

        results.append({
            "command": command,
            "success": exit_code == 0,
            "output": stdout.read().decode(),
            "error": stderr.read().decode()
        })

    ssh.close()

    return results