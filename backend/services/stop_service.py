import subprocess
from services.process_manager import RUNNING_PROJECTS

def stop_project(pid):

    try:
        subprocess.run(
            ["taskkill", "/PID", str(pid), "/F"],
            check=True,
            capture_output=True,
            text=True
        )
        
        for project in list(RUNNING_PROJECTS.keys()):

            if RUNNING_PROJECTS[project]["pid"] == pid:
                del RUNNING_PROJECTS[project]
                break

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