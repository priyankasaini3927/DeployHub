import os


def is_docker_project(project_path):
    dockerfile = os.path.join(project_path, "Dockerfile")
    compose = os.path.join(project_path, "docker-compose.yml")

    return {
        "success": True,
        "is_docker": os.path.exists(dockerfile) or os.path.exists(compose)
    }