# Chat Messenger Project

This is a dummy project used to demonstrate knowledge of Node.js and Angular, as well as development in general. It serves as an example with some bad practices included.

## Technologies

- **Backend**: Node.js (Express, TypeScript)
- **Frontend**: Angular
- **API**: REST with OpenAPI (openapi.yaml file)

## Repository Structure

- `/backend` - Contains all backend-related files.
- `/frontend` - Contains all frontend-related files.
- `/docs` - Contains the OpenAPI definition file and any additional documentation.

## Backend

### Installation

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

1. Build and start the server:

   ```bash
   npm run build
   npm start
   ```

2. The server will run on port `3000` by default. You can change the port by setting the `PORT` environment variable:

   ```bash
   export PORT=4000  # For Unix-like systems
   set PORT=4000     # For Windows
   npm start
   ```

### API Endpoints

- `GET /messages` - Retrieve all messages
- `POST /message` - Send a new message
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Log in a user

### OpenAPI Definition

The OpenAPI definition for the API is located in the `/docs` directory as `openapi.yaml`.

## Frontend

### Installation

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run serve
   ```

2. The application will be accessible at `http://localhost:4200`.

## Development

### Backend

The backend is implemented using Node.js and Express with TypeScript. The main server file is `src/index.ts`.

### Error Handling

Custom error handling middleware is implemented in `src/middlewares/errorHandler.ts`.

### Plugin System

The backend supports a plugin system for extensibility. Plugins are loaded from the `plugins` directory. A sample chatbot plugin is included in `plugins/chatbot.ts`.

### Authentication

User authentication is implemented using JWT. Authentication middleware is located in `src/middlewares/authMiddleware.ts`.

### Frontend

The frontend is implemented using Angular. The main application file is `src/app/app.component.ts`.

### API

The API follows RESTful practices and is defined using OpenAPI. The definition file is located in `/docs/openapi.yaml`.

## Acknowledgments

This project is a part of a recruitment exercise to demonstrate knowledge and skills in Node.js and Angular.
