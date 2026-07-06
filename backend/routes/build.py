from flask import Blueprint, request, jsonify
from services.build_service import build_project

build_bp = Blueprint("build", __name__)

@build_bp.route("/build", methods=["POST"])
def build():

    data = request.get_json()

    project_path = data.get("project_path")
    project_type = data.get("project_type")

    if not project_path or not project_type:
        return jsonify({
            "success": False,
            "message": "project_path and project_type are required"
        }), 400

    result = build_project(project_path, project_type)

    return jsonify(result)