#!/usr/bin/env python3

from flask import Flask, make_response,jsonify,request
from flask_migrate import Migrate
from models import db, User
import jwt
from utils.mail import Mail

JWT_SECRET = 'secret'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/signup', methods=['POST'])
def signup():
    if not request.is_json:
        return make_response(jsonify({"msg": "Missing JSON in request"}), 400)
    
    required_fields = ['firstname', 'surname', 'email', 'password']
    if not all(field in request.json for field in required_fields):
        return make_response(jsonify({"msg": F"{required_fields}"}))

    firstname = request.json['firstname']
    surname = request.json['surname']
    email = request.json['email']
    password = request.json['password']

    if User.query.filter_by(email=email).first():
        return make_response(jsonify({"msg": "User already exists"}), 400)
    


    user = User(firstname=firstname, surname=surname, email=email, password=password)

    mail = Mail()
    mail.send_email(
        email, 'Welcome to Parking Finder', 
        'You have successfully signed up for Parking Finder. Please login to your account and enjoy our services.'
        )
    db.session.add(user)
    db.session.commit()

    return make_response(jsonify({"msg": "User created successfully"}), 201)


@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return make_response(jsonify({"msg": "Missing JSON in request"}), 400)
    if 'email' not in request.json or 'password' not in request.json:
        return make_response(jsonify({"msg": "email and password are required"}), 400)

    email = request.json['email']
    password = request.json['password']

    if email is None or password is None:
        return make_response(jsonify({"msg": "email and password are required"}), 400)

    user = User.query.filter_by(email=email, password=password).first()

    if not user:
        return make_response(jsonify({"msg": "Invalid username or password"}), 401)

    token = jwt.encode({'user_id': user.id}, JWT_SECRET, algorithm='HS256')
    return make_response(jsonify({"msg": "Login successful", "token": token}), 200)

