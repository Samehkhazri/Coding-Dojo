from flask import Flask  
app = Flask(__name__)   

@app.route('/')

def hello():
    return 'hello world'


@app.route('/dojo')
def dojo():
    return 'dojo!'

@app.route('/hi/<name>')
def name(name):
    return 'hi '+ name


@app.route('/repeat/<int:sameh>/<amen>')
def rep(sameh,amen):
    return amen *sameh

@app.errorhandler(404)
def aez(e):
    return "Page not found"

if __name__=="__main__": 
    app.run(debug=True) 

