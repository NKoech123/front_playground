from fastapi import FastAPI
from models import Doctor, uuid4, PatientAppointment,KIND
from typing import Optional, List
import json
from datetime import datetime

app = FastAPI()

db: List[Doctor] = [

    Doctor(
        id = uuid4(),
        first_name ="Will",
        last_name = "Smith",
        appointment = [ PatientAppointment(
                first_name = "Chris",
                last_name = "Rock",
                time = datetime.now(),
                kind = KIND.follow_up
                ) ,]
        ),   

        Doctor(
        id = uuid4(),
        first_name ="Ben",
        last_name = "Carson",
        appointment = [ PatientAppointment(
                first_name = "Queen",
                last_name = "Beth",
                time = datetime.now(),
                kind = KIND.new_patient
                ) ,]
        ),  

]

@app.get("/api/v1/doctors")
def get_all_doctors():
    return db

@app.get("/api/v1/doctors/{doctor_id}/{appointments}")
def get_appointments_by_doctorID_and_day(doctor_id: int, appointment_time: str):
    for doctor_row in db:
        if doctor_row.id == doctor_id:
            for appointments_row in doctor_row.appointments:
                if appointments_row.time == appointment_time:
                    return appointments_row

@app.delete("/api/v1/doctors/{doctor_id}/{appointments}")
def delete_appointments_by_doctorID_and_day(doctor_id: int, appointment_id: str):
    for count, doctor_row in enumerate(db):
        if doctor_row.id == doctor_id:
            appointment_rows = doctor_row.appointments
            for idx,appointment in enumerate(appointment_rows):
                if appointment.id == appointment_id:
                    db[count].remove(appointment_rows[idx])


@app.post("/api/v1/doctors/{doctor_id}/{appointments}")
def post_new_appointment_into_Doctor_Calendar(doctor_id:int, appointment:PatientAppointment):
    db.append(appointment)

            




  

          
