import subprocess

def stop_project(pid):

    try:
        subprocess.run(
            ["taskkill", "/PID", str(pid), "/F"],
            check=True,
            capture_output=True,
            text=True
        )

        return {
            "success": True,
            "message": "Application stopped successfully"
        }

    except subprocess.CalledProcessError as e:
        return {
            "success": False,
            "message": e.stderr
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e)
        }