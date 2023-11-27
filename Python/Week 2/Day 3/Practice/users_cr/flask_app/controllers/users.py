from flask_app import app 
from flask import render_template,redirect,request
from flask_app.models.user import User
@app.route('/')
def users():
    users=User.get_all()
    return render_template("index.html",users=users)


@app.route('/users/new')
def method_name():
    return render_template("new_users.html")

@app.route('/new',methods=['post'])
def new():
    data={
    'first_name':request.form['first_name'],
    'last_name' :request.form['last_name'],
    'email':request.form['email'],
    }
    User.new_user(data)
    return redirect('/')
