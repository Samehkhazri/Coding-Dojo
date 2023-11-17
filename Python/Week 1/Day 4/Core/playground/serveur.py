from flask import Flask ,render_template 
app = Flask(__name__)    


@app.route('/play')
def hello():
    return render_template("index.html")

@app.route('/play/<int:x>')
def repeat(x):
    return render_template('index.html',x=x)
@app.route('/play/<int:x>/<color>')
def col(x,color):
    return render_template('index.html',x=x,color=color)
if __name__=="__main__":    
    app.run(debug=True,port=2000)    

