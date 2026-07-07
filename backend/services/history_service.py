import json
import os
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HISTORY_FILE = os.path.join(BASE_DIR, "data", "history.json")

def save_history(project_name, project_type, status):
    print("===== SAVE HISTORY CALLED =====")

    if not os.path.exists(HISTORY_FILE):
        print("Creating history file...")
        with open(HISTORY_FILE, "w") as f:
            json.dump([], f)

    with open(HISTORY_FILE, "r") as f:
        history = json.load(f)

    print("Current history:", history)

    history.append({
        "project": project_name,
        "type": project_type,
        "status": status,
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

    print("Updated history:", history)

    with open(HISTORY_FILE, "w") as f:
        json.dump(history, f, indent=4)

    print("History saved successfully!")


def get_history():
    if not os.path.exists(HISTORY_FILE):
        return []

    with open(HISTORY_FILE, "r") as f:
        return json.load(f)