from services.process_manager import RUNNING_PROJECTS


def get_status():

    return {
        "success": True,
        "running_projects": RUNNING_PROJECTS
    }