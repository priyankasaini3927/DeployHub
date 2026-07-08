import subprocess


def docker_build(project_path, image_name):
    try:
        result = subprocess.run(
            ["docker", "build", "-t", image_name, "."],
            cwd=project_path,
            capture_output=True,
            text=True
        )

        return {
            "success": result.returncode == 0,
            "stdout": result.stdout,
            "stderr": result.stderr
        }

    except Exception as e:
        return {
            "success": False,
            "stderr": str(e)
        }