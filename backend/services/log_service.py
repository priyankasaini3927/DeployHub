import os

LOGS_DIR = "logs"


def get_logs(project_name):

    stdout_file = os.path.join(LOGS_DIR, f"{project_name}.out")
    stderr_file = os.path.join(LOGS_DIR, f"{project_name}.err")

    stdout = ""
    stderr = ""

    if os.path.exists(stdout_file):
        with open(stdout_file, "r", encoding="utf-8") as f:
            stdout = f.read()

    if os.path.exists(stderr_file):
        with open(stderr_file, "r", encoding="utf-8") as f:
            stderr = f.read()

    return {
        "success": True,
        "stdout": stdout,
        "stderr": stderr
    }