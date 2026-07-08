from flask import Blueprint, request, jsonify
from services.git_service import clone_repository
from services.detector_service import detect_project
from services.build_service import build_project
from services.run_service import run_project
from services.history_service import save_history
from services.docker_detector import is_docker_project
from services.docker_service import docker_build
from services.docker_run_service import docker_run
import os

deploy_bp = Blueprint("deploy", __name__)


@deploy_bp.route("/deploy", methods=["POST"])
def deploy():

    print("========== NEW CODE EXECUTED ==========")
    
    data = request.get_json()

    repo_url = data.get("repo_url")

    if not repo_url:
        return jsonify({
            "success": False,
            "message": "Repository URL is required"
        }), 400

    # STEP 1 - Clone
    clone_result = clone_repository(repo_url)

    if not clone_result["success"]:
        return jsonify(clone_result), 500

    project_path = clone_result["path"]

    # STEP 2 - Detect
    detect_result = detect_project(project_path)

    if not detect_result["success"]:
        return jsonify(detect_result), 500

    project_type = detect_result["project_type"]

    # STEP 3 - Build
    build_path = detect_result["project_path"]
    
    docker_result = is_docker_project(build_path)
    docker_build_result = None

    if docker_result["is_docker"]:
        project_name = project_path.split("\\")[-1].lower()
        docker_build_result = docker_build(build_path, project_name)
    
    build_result = build_project(build_path, project_type)
    
    print("========== BUILD RESULT ==========")
    
    if not build_result["success"]:
        return jsonify({
        "success": False,
        "repository_path": project_path,
        "project_type": project_type,
        "docker": docker_result,
        "docker_build": docker_build_result,
        "docker_run": docker_run_result,
        "build": build_result
        }), 500
        
    docker_run_result = None

    if docker_result["is_docker"]:

        image_name = os.path.basename(project_path).lower()

        docker_build_result = docker_build(build_path, image_name)

        if docker_build_result["success"]:
            docker_run_result = docker_run(image_name)


    
    #step 4 - Run
    run_result = run_project(build_path, project_type)

    project_name = os.path.basename(project_path)
        
    print("About to save history...")

    save_history(
        project_name,
        project_type,
        "Success" if run_result["success"] else "Failed"
    )
    
    print("History function completed.")
    
    return jsonify({
        "success": build_result["success"] and run_result["success"],
        "repository_path": project_path,
        "project_type": project_type,
        "docker": docker_result,
        "docker_build": docker_build_result,
        "docker_run": docker_run_result,
        "build": build_result,
        "run": run_result

    })