from flask import Blueprint, request, jsonify
from services.git_service import clone_repository

deploy_bp = Blueprint("deploy", __name__)

@deploy_bp.route("/clone", methods=["POST"])
def deploy():

    data = request.get_json()

    repo_url = data.get("repo_url")

    if not repo_url:
        return jsonify({
            "success": False,
            "message": "Repository URL is required"
        }), 400

    result = clone_repository(repo_url)

    if result["success"]:
        return jsonify(result), 200
    else:
        return jsonify(result), 500