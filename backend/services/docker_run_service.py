import subprocess


def docker_run(image_name):
    try:
        result = subprocess.run(
            [
                "docker",
                "run",
                "-d",
                "-P",
                image_name
            ],
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            return {
                "success": False,
                "stderr": result.stderr
            }

        container_id = result.stdout.strip()

        return {
            "success": True,
            "container_id": container_id
        }

    except Exception as e:
        return {
            "success": False,
            "stderr": str(e)
        }