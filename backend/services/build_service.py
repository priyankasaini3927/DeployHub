import subprocess
import os
import sys

BUILD_COMMANDS = {
    "Flask": [sys.executable, "-m", "pip", "install", "-r", "requirements.txt"],
    "React/Node": ["npm", "install"],
    "Spring Boot": ["mvn", "clean", "install"]
}


def build_project(project_path, project_type):

    if project_type not in BUILD_COMMANDS:
        return {
            "success": False,
            "message": "Unsupported project type"
        }

    command = BUILD_COMMANDS[project_type]

    try:
        result = subprocess.run(
            command,
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
            "message": str(e)
        }