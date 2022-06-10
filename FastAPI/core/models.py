from sqlalchemy import Column,Integer,String, ARRAY
from config import Base


class User(Base):
    __tablename__= 'User'

    id = Column(Integer, primary_key=True, index = True)
    first_name = Column(String)
    last_name = Column(String)
    roles = Column(ARRAY)


