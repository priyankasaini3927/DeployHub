from flask import Flask  # type: ignore[import]
from routes.deploy import deploy_bp
from routes.detect import detect_bp
from routes.build import build_bp

app = Flask(__name__)

app.register_blueprint(deploy_bp)
app.register_blueprint(detect_bp)
app.register_blueprint(build_bp)

@app.route("/health")
def health():
    return {
        "status": "success",
        "message": "DeployHub Backend is Running"
    }

if __name__ == "__main__":
    app.run(debug=True)