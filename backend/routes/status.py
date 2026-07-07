from flask import Blueprint, jsonify

from services.status_service import get_status

status_bp = Blueprint("status", __name__)


@status_bp.route("/status", methods=["GET"])
def status():

    return jsonify(get_status())