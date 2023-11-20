from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to a random secret key

@app.route('/')
def index():
    # Increment the counter by the specified increment value or 1 if not provided
    increment = int(request.args.get('increment', 1))
    session['counter'] = session.get('counter', 0) + increment

    # Increment the actual visit count
    session['visit_count'] = session.get('visit_count', 0) + 1

    return render_template('index.html', counter=session['counter'], visit_count=session['visit_count'])

@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect("/")

@app.route('/increment_by_two')
def increment_by_two():
    session['counter'] = session.get('counter', 0) + 2
    return redirect('/')

@app.route('/reset')
def reset_counter():
    session['counter'] = 0
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True,port=2222)

