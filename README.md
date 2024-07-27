# Resume Builder

## Overview

The Resume Builder is a web application designed to help users create, manage, and optimize their resumes with the assistance of AI. The application features user authentication, resume management, AI-powered content suggestions, and real-time resume previews.

## Key Features

1. **User Authentication**
   - Secure registration and login functionality using JWT (JSON Web Token).

2. **Basic Resume Management**
   - Create, edit, and delete resumes.
   - Manage sections such as personal information, work experience, education, and skills.
 

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/UmerAhmad9126/swanirbhar-assignment.gi
   ```

2. **Install Dependencies**

   For the backend:
   ```bash
   cd backend
   npm install
   ```

   For the frontend:
   ```bash
   cd frontend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the `backend` directory with the following variables:

   ```
   PORT=8080
   ```

4. **Run the Application**

   Start the backend server:

   ```bash
   cd backend
   npm start
   ```

   Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

## API Endpoints

- **User Authentication**
  - **Register**: `POST /api/auth/register`
  - **Login**: `POST /api/auth/login`

- **Resume Management**
  - **Create Resume**: `POST /api/resumes`
  - **Edit Resume**: `PUT /api/resumes/{id}`
  - **Delete Resume**: `DELETE /api/resumes/{id}`

