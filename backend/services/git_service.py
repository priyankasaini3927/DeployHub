import os
import subprocess
from datetime import datetime


def clone_repository(repo_url):
    try:
        # Repository name extract
        repo_name = repo_url.split("/")[-1].replace(".git", "")

        # Timestamp generate
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

        # Folder name
        folder_name = f"{repo_name}_{timestamp}"

        # Deployments folder path
        base_path = os.path.join(os.getcwd(), "deployments")

        # Create deployments folder if not exists
        os.makedirs(base_path, exist_ok=True)

        # Final clone path
        clone_path = os.path.join(base_path, folder_name)

        # Run git clone command
        subprocess.run(
            ["git", "clone", repo_url, clone_path],
            check=True,
            capture_output=True,
            text=True
        )

        return {
            "success": True,
            "message": "Repository cloned successfully",
            "path": clone_path
        }

    except subprocess.CalledProcessError as e:
        return {
            "success": False,
            "error": e.stderr
        }