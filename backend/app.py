from flask import Flask  # type: ignore[import]
from routes.deploy import deploy_bp

app = Flask(__name__)

app.register_blueprint(deploy_bp)

@app.route("/health")
def health():
    return {
        "status": "success",
        "message": "DeployHub Backend is Running"
    }

if __name__ == "__main__":
    app.run(debug=True)