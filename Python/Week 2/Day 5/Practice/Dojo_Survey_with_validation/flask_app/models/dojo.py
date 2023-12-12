from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models.dojo import dojo
class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comments = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, data):
        query = "INSERT INTO surveys (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);"
        return connectToMySQL('dojo_Survey_schema').query_db(query, data)

    @classmethod
    def get_last_survey(cls):
        query = "SELECT * FROM surveys ORDER BY surveys.id DESC LIMIT 1;"
        results = connectToMySQL('dojo_Survey_schema').query_db(query)
        if results:
            return Dojo(results[0])
        else:
            return None

    @staticmethod
    def is_valid(dojo):
        is_valid = True
        if len(dojo['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.")
        if len(dojo['location']) < 1:
            is_valid = False
            flash("Must choose a dojo location.")
        if len(dojo['language']) < 1:
            is_valid = False
            flash("Must choose a favorite language.")
        if len(dojo['comments']) < 3:
            is_valid = False
            flash("Comments must be at least 3 characters.")
        return is_valid
