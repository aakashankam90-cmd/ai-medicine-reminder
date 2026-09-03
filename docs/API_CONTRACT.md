# API Contract

Base URL:

http://localhost:5000/api

---

# 1. Authentication

## Register

POST /auth/register

Request:

{
  "name": "Ravi",
  "email": "ravi@example.com",
  "password": "123456"
}

Response:

{
  "message": "User registered successfully"
}

---

## Login

POST /auth/login

Request:

{
  "email": "ravi@example.com",
  "password": "123456"
}

Response:

{
  "token": "JWT_TOKEN",
  "user": {
    "id": 1,
    "name": "Ravi",
    "email": "ravi@example.com"
  }
}

---

# 2. Medicines

## Get Medicines

GET /medicines

Authentication:
Required

Response:

[
  {
    "id": 1,
    "name": "Paracetamol",
    "dosage": "500mg",
    "instructions": "After food"
  }
]

---

## Add Medicine

POST /medicines

Authentication:
Required

Request:

{
  "name": "Paracetamol",
  "dosage": "500mg",
  "instructions": "After food"
}

Response:

{
  "message": "Medicine added successfully",
  "medicine": {
    "id": 1,
    "name": "Paracetamol",
    "dosage": "500mg",
    "instructions": "After food"
  }
}

---

## Update Medicine

PUT /medicines/:id

Authentication:
Required

Request:

{
  "name": "Paracetamol",
  "dosage": "650mg",
  "instructions": "After food"
}

---

## Delete Medicine

DELETE /medicines/:id

Authentication:
Required

---

# 3. Medication Logs

## Get Today's Medication Logs

GET /medication-logs/today

Authentication:
Required

---

## Mark Medicine as Taken

POST /medication-logs

Authentication:
Required

Request:

{
  "scheduleId": 1,
  "status": "TAKEN"
}

---

# 4. Health Records

## Get Health Records

GET /health-records

Authentication:
Required

---

## Add Health Record

POST /health-records

Authentication:
Required

Request:

{
  "bloodPressure": "140/90",
  "bloodSugar": 120,
  "heartRate": 82,
  "temperature": 98.6,
  "notes": "Feeling normal"
}

---

# 5. Alerts

## Get Alerts

GET /alerts

Authentication:
Required

---

## Mark Alert As Read

PUT /alerts/:id/read

Authentication:
Required

---

# 6. AI Health Summary

## Generate Health Summary

POST /ai/health-summary

Authentication:
Required

Request:

{
  "days": 7
}

Response:

{
  "summary": "Your recent health records show..."
}

---

# Authentication Format

Protected API requests should include:

Authorization: Bearer JWT_TOKEN