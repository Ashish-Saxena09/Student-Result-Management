# Student Result Management

This is a simple Student Result Management made using React and Redux Toolkit.

The project allows you to add students, view student details, update student information and delete students.

## Features

* Add new student
* View all students
* Search students by name
* Filter students by Pass / Fail
* Edit student details
* Delete student
* Dashboard showing total, passed and failed students
* React Router for navigation
* Redux Toolkit for managing student data

## Technologies Used

* React
* Redux Toolkit
* React Router
* JavaScript
* CSS
* Vite

## Student Details

Each student has:

* Name
* Roll Number
* Course
* HTML Marks
* CSS Marks
* JavaScript Marks
* React Marks

A student is considered **Pass** when they score at least 40 marks in every subject.

## How to Run

Clone the repository and install the dependencies:

```bash
npm install
```

Start the project:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Project Structure

src
│
├── Components
│   ├── Dashboard.jsx
│   ├── Navbar.jsx
│   ├── StudentForm.jsx
│   └── StudentList.jsx
│
├── Toolkit
│   ├── StudentSlice.js
│   └── store.js
│
├── App.jsx
└── main.jsx

## About

I made this project to practice React, Redux Toolkit, React Router and basic CRUD operations.
