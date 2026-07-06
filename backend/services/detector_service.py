import os

def detect_project(project_path):

    for root, dirs, files in os.walk(project_path):
        
        print("Current Folder:", root)
        print("Files:", files)

        if "requirements.txt" in files:
            return {
            "success": True,
            "project_type": "Flask",
            "project_path": root
            }

        if "package.json" in files:
            return {
                "success": True,
                "project_type": "React/Node",
                "project_path": root
            }

        if "pom.xml" in files:
            return {
                "success": True,
                "project_type": "Spring Boot",
                "project_path": root
            }

        if "Dockerfile" in files:
            return {
                "success": True,
                "project_type": "Docker",
                "project_path": root
            }

    return {
        "success": False,
        "project_type": "Unknown",
        "project_path": None
    }