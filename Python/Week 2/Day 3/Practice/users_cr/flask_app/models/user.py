from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE

class User :
    def __init__(self,data):
        self.id=data["id"]
        self.first_name=data["first_name"]
        self.last_name=data["last_name"]
        self.email=data ["email"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]


    @classmethod 
    def get_all(cls):
        query="""SELECT *FROM users;"""
        result=connectToMySQL(DATABASE).query_db(query)
        all_users=[]
        for user in result :
            all_users.append(User(user))
        return all_users
    
    @classmethod
    def new_user(cls,data):
        query="""INSERT INTO users(first_name,last_name,email) VALUES (%(first_name)s,%(last_name)s,%(email)s);"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        return result
        