# Tender247 blog website

This project is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The client side is built with Next.js 14, and the backend is developed using Node.js with Express.js. Both frontend and backend use TypeScript for type safety.

## Features

- **Frontend**: Built with Next.js 14, providing server-side rendering (SSR) and static site generation (SSG) for better performance and SEO.
- **Backend**: Developed with Node.js and Express.js for handling API requests and business logic.
- **Database**: MongoDB is used as the database to store and manage data efficiently.
- **TypeScript**: Both frontend and backend are written in TypeScript, enhancing code reliability and maintainability.

## Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn** for dependency management

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the `server` directory and provide the necessary variables (e.g., MongoDB URI, API keys, etc.).
   - Create a `.env.local` file in the `client` directory for frontend-specific environment variables.

## Running the Application

### 1. Development Mode

- **Frontend**:
  ```bash
  cd client
  npm run dev
  ```

- **Backend**:
  ```bash
  cd server
  npm run dev
  ```

### 2. Production Mode

- Build the frontend and backend:
  ```bash
  cd client
  npm run build
  cd ../server
  npm run build
  ```

- Start the application:
  ```bash
  cd client
  npm start
  cd ../server
  npm start
  ```

## Scripts

### Frontend (Next.js)
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.

### Backend (Node.js/Express.js)
- `npm run dev`: Starts the development server with live reload using `nodemon`.
- `npm run build`: Transpiles TypeScript into JavaScript for production.
- `npm start`: Runs the production server.

## Folder Structure

```plaintext
root
├── client          # Frontend (Next.js)
├── server          # Backend (Node.js, Express.js)
└── README.md       # Documentation
```


Feel free to contribute or raise issues in the repository. Happy coding!

