from sqlalchemy import Column,Integer,String, ARRAY
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from config import create_engine,Base


class User(Base):
    __tablename__= 'User'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    roles = Column(ARRAY)


