from flask_app import app

from flask_app.controllers.emails import Email
# -------------------------------------------
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)  