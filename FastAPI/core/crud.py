from sqlalchemy.orm import Session
from models import User
from schemas import User


def get_user(db:Session, skip:int  0, limit:int = 100):
    return db.query(User).offse(skip).