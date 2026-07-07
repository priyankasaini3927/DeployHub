from flask import Blueprint, request, jsonify

from services.git_service import clone_repository
from services.detector_service import detect_project
from services.build_service import build_project
from services.run_service import run_project

deploy_bp = Blueprint("deploy", __name__)


@deploy_bp.route("/deploy", methods=["POST"])
def deploy():

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
    build_result = build_project(build_path, project_type)
    
    if not build_result["success"]:
        return jsonify({
        "success": False,
        "repository_path": project_path,
        "project_type": project_type,
        "build": build_result
        }), 500


    
    #step 4 - Run
    run_result = run_project(build_path, project_type)

    return jsonify({
        "success": build_result["success"] and run_result["success"],
        "repository_path": project_path,
        "project_type": project_type,
        "build": build_result,
        "run": run_result

    })