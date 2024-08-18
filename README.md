
# Notes Management Application

This is a full-stack application for managing notes. The backend is built using Node.js, Express, and TypeORM, and the frontend is built using React and Material-UI.

## Table of Contents

* [Prerequisites](#prerequisites)
* [Backend Setup](#backend-setup)
* [Frontend Setup](#frontend-setup)
* [Running the Application](#running-the-application)
* [Environment Variables](#environment-variables)
* [Directory Structure](#directory-structure)
* [Tech Stack](#tech-stack)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

* **Node.js** (v14 or higher)
* **npm** (v6 or higher)
* **PostgreSQL** (for the database)

## Backend Setup

### 1. Clone the repository

git clone `<repository-url>`
cd `<repository-directory>`/backend

### 2. Install dependencies

npm install

### 3. Set up environment variables

Create a `.env` file in the `backend` directory and configure the following variables:


DATABASE_URL="postgresql://postgres.elzplupnzztevofaetbt:Quanquan2311.@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

DIRECT_URL="postgresql://postgres.elzplupnzztevofaetbt:Quanquan2311.@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your PostgreSQL credentials.

### 4. Start the backend server

npm run start

The backend server will run on `http://localhost:30001`.

## Frontend Setup

### 1. Navigate to the frontend directory

cd ../frontend

### 2. Install dependencies

npm install

### 3. Set up environment variables

Create a `.env` file in the `frontend` directory and configure the following variables:

REACT_APP_API_URL=http://localhost:3000

### 4. Start the frontend server

npm start

The frontend application will run on `http://localhost:3000` by default, but it will typically run on `http://localhost:3001` if the backend is also running on `http://localhost:3000`.

## Running the Application

Once both the backend and frontend servers are running:

1. Open your browser and go to `http://localhost:3001` (or whatever port the React app is running on).
2. You should see the Notes Management application. You can create, view, edit, and delete notes.

## Environment Variables

Both the frontend and backend rely on environment variables. Make sure to set these up correctly in `.env` files in the respective directories:

* **Backend** : `DATABASE_URL`, `DIRECT_URL`
* **Frontend** : `REACT_APP_API_URL`

## Directory Structure

root
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── entities
│   │   ├── migrations
│   │   ├── routes
│   │   └── ...
│   ├── .env
│   └── ...
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── styles
│   │   └── ...
│   ├── .env
│   └── ...
└── README.md

## Tech Stack

* **Backend** : Node.js, Express, TypeORM, PostgreSQL
* **Frontend** : React, Material-UI, Axios, React Router
