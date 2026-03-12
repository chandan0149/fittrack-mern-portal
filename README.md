<<<<<<< HEAD
# FitTrack – Personal Fitness Training Portal

## Project Overview
FitTrack is a MERN-based web application that allows users to explore available fitness programs and enroll in them. The platform provides a backend API for managing fitness programs and enrollments and a React frontend interface for users to interact with the system.

Tech Stack Used:
MongoDB  
Express.js  
React.js  
Node.js  
Joi Validation  
Mocha + SuperTest (API Testing)

--------------------------------------------------

## Setup Instructions

1. Download or clone the project repository.

2. Navigate to the project folder.

Example:
cd FitTrack-MERN

3. Install required dependencies.

Backend setup:

cd backend  
npm install

Frontend setup:

cd frontend  
npm install

--------------------------------------------------

## How to Run Backend

Open terminal and navigate to backend folder.

cd backend

Start the backend server:

npx nodemon server.js

Backend server will run on:

http://localhost:5000

--------------------------------------------------

## How to Run Frontend

Open another terminal and navigate to frontend folder.

cd frontend

Run the React application:

npm start

Frontend will run on:

http://localhost:3000

The frontend fetches data from the backend APIs.

--------------------------------------------------

## API Endpoints

### 1. Create Program

Method:
POST /api/programs

Request Body Example:

{
"programId": "FTP006",
"name": "Athletic Conditioning",
"category": "Sports Training",
"level": "Advanced",
"price": 3499
}

Success Response:

{
"success": true,
"message": "Program created",
"data": {}
}

--------------------------------------------------

### 2. Get All Programs

Method:
GET /api/programs

Response Example:

{
"success": true,
"data": [
{
"programId": "FTP001",
"name": "Beginner Full Body Workout",
"category": "Strength Training",
"level": "Beginner",
"price": 1999
}
]
}

--------------------------------------------------

### 3. Enroll in Program

Method:
POST /api/enroll

Request Body Example:

{
"userId": "USR101",
"programId": "FTP003"
}

Success Response:

{
"success": true,
"message": "Enrollment successful",
"data": {}
}

Duplicate Enrollment Response:

{
"success": false,
"message": "Already enrolled",
"data": null
}

--------------------------------------------------

## Frontend Features

- Displays list of available fitness programs
- Shows program name, category, level, and price
- Styled program cards
- Enroll button for each program
- Displays success or error message after enrollment
- Shows enrolled programs list
- Loading state while fetching data
- Error message if API fails

--------------------------------------------------

## Screenshots

1. Backend server running in terminal.

Example file:
screenshots/backend_running.png

2. Program listing UI showing all programs.

Example file:
screenshots/program_list.png

3. Enrollment success message after clicking Enroll.

Example file:
screenshots/enroll_success.png

4. Duplicate enrollment error message.

Example file:
screenshots/duplicate_error.png

5. Enrolled programs list displayed below the program cards.

Example file:
screenshots/enrolled_programs.png

--------------------------------------------------

## Project Structure

FitTrack-MERN
│
backend
│   models
│   routes
│   middleware
│   validators
│   tests
│   server.js
│
frontend
│   src
│      components
│         ProgramList.js
│      api.js
│      App.js
│
screenshots
│
README.md

--------------------------------------------------

## Author
CHANDAN KUMAR

Final Milestone MERN Assessment Project
=======
# fittrack-mern-portal
FitTrack MERN Personal Fitness Training Portal
6ca588cae73545a68b8744b2f1b48b1050281e70
