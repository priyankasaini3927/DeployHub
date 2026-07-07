from flask import Blueprint, request, jsonify
from services.log_service import get_logs

logs_bp = Blueprint("logs", __name__)

@logs_bp.route("/logs", methods=["POST"])
def logs():

    data = request.get_json()

    project_name = data.get("project_name")

    if not project_name:
        return jsonify({
            "success": False,
            "message": "Project name required"
        }), 400

    return jsonify(get_logs(project_name))