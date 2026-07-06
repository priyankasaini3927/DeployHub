from flask import Blueprint, request, jsonify
from services.detector_service import detect_project
import os

detect_bp = Blueprint("detect", __name__)

@detect_bp.route("/detect", methods=["POST"])
def detect():

    data = request.get_json()

    project_path = data.get("project_path")

    print("=" * 50)
    print("Received Path:", project_path)
    print("Path Exists:", os.path.exists(project_path))
    print("=" * 50)

    result = detect_project(project_path)

    return jsonify(result)