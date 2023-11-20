from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('myindex.html', rows=8, cols=8, color1='#FFFFFF', color2='#000000')

@app.route('/<int:x>')
def checkerboard_rows(x):
    return render_template('myindex.html', rows=x, cols=8, color1='#FFFFFF', color2='#000000')

@app.route('/<int:x>/<int:y>/<color1>/<color2>')
def checkerboard_params(x, y, color1, color2):
    return render_template('myindex.html', rows=x, cols=y, color1=color1, color2=color2)

if __name__ == '__main__':
    app.run(debug=True, port=3000)
