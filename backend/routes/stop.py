from flask import Blueprint, request, jsonify

from services.stop_service import stop_project

stop_bp = Blueprint("stop", __name__)


@stop_bp.route("/stop", methods=["POST"])
def stop():

    data = request.get_json()

    pid = data.get("pid")

    if not pid:
        return jsonify({
            "success": False,
            "message": "PID is required"
        }), 400

    result = stop_project(pid)

    return jsonify(result)