from http.client import HTTPException
from fastapi import FastAPI, HTTPException
from typing import List
from models import User,Gender,Role, UserUpdateRequest
from uuid import uuid4,UUID

app = FastAPI()

db: List[User] = [
    User(id=UUID("33e17344-a30c-45b7-a99f-f85eb13532a9"),
    first_name = "Nicholas",
    last_name = "Koech",
    gender = Gender.male,
    roles = [Role.owner]
    ),

    User(id = UUID("78cb97f8-fc1d-473e-896b-d0560e69d6ae"),
    first_name = "Lizzie",
    last_name = "Njeri",
    gender = Gender.female,
    roles = [Role.customer,Role.owner]
    ),
         
]


@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/api/v1/users")
def fetch_users():
    return db

@app.post("/api/v1/users")
def register_user(user: User):
    db.append(user)
    return {"id" : user.id} 

@app.delete("/api/v1/users/{user_id}")
def delete_user(user_id: UUID):
    for user in db:
        if user.id == user_id:
            db.remove(user)
            return
    raise HTTPException(
        status_code= 404,
        detail = f"user with id:{user_id}, does not exist"
    )

@app.put("/api/v1/users/{user_id}")
def update_user(user_update: UserUpdateRequest, user_id: UUID):

    for user in db:
        if user_update.first_nam:
            user.first_name = user_update.first_name
        if user_update.last_name:
            user.last_name = user_update.last_name
        if user_update.middle_name:
            user.middle_name = user_update.middle_name
        if user_update.roles:
            user.roles = user_update.roles
        return

    raise HTTPException(
        status_code = 404,
        detail = f"user with id: {user_id} does not exist"
    )


