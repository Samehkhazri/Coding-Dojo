from flask import render_template,request, redirect
from flask_app import app
from flask_app.models.dojo import dojo


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/create/dojo',methods=['POST'])
def create_survey():
    if dojo.is_valid(request.form):
        dojo.save(request.form)
        return redirect('/results')
    return redirect('/')

@app.route('/display')
def results():
    return render_template('display.html', dojo = dojo.get_last_survey())