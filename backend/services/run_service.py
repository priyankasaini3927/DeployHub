import subprocess
import sys
import time
from services.process_manager import RUNNING_PROJECTS
import os

RUN_COMMANDS = {
    "Flask": [sys.executable, "app.py"],
    "React/Node": ["npm", "run", "dev"],
    "Spring Boot": ["mvn", "spring-boot:run"]
}

def run_project(project_path, project_type):

    if project_type not in RUN_COMMANDS:
        return {
            "success": False,
            "message": "Unsupported project type"
        }

    command = RUN_COMMANDS[project_type]

    try:
        process = subprocess.Popen(
        command,
        cwd=project_path,
        creationflags=subprocess.CREATE_NEW_PROCESS_GROUP
        )

        # Wait longer
        time.sleep(5)

        if process.poll() is None:
            
            project_name = os.path.basename(project_path)

            RUNNING_PROJECTS[project_name] = {
            "pid": process.pid,
            "status": "Running",
            "port": 5002
            }
            
            return {
                "success": True,
                "pid": process.pid,
                "message": "Application is still running"
            }

        stdout, stderr = process.communicate()

        return {
            "success": False,
            "message": "Application crashed",
            "stdout": stdout,
            "stderr": stderr,
            "return_code": process.returncode
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e)
        }
