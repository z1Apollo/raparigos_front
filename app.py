from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/catalogo_content")
def catalogo():
    return render_template("catalogo.html")

@app.route("/sobre_content")
def sobre():
    return render_template("/sobre.html")

if __name__ == "__main__":
    app.run(debug=True)
