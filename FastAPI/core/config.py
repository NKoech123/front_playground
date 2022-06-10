import psycopg2
from dotenv import dotenv_values
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base


config_dict = dotenv_values(".env") 



#Postgres 
DATABASE_URI = f"postgresql+psycopg2://{config_dict['user']}:{config_dict['password']}@{config_dict['host']}:{config_dict['port']}/{config_dict['dbname']}"

engine = create_engine(DATABASE_URI)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

print(engine)
print(Base)