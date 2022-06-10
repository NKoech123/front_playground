from uuid import UUID,uuid4
from typing import Optional, List
from pydantic import BaseModel
from enum import Enum

from datetime import datetime, date



class KIND (str, Enum):
    follow_up = "follow_up"
    new_patient = "new_patient"


class PatientAppointment(BaseModel):
    id: Optional[UUID] = uuid4()
    first_name : str
    last_name : str
    time : str
    kind : KIND   #follow-up/ new_patient
 


class Doctor(BaseModel):
    id: Optional[UUID] = uuid4()
    first_name : str
    last_name : str
    appointments : Optional[List[PatientAppointment]]



