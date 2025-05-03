# Calendar Backend

This is the backend service for the Calendar application. It provides APIs for user authentication, event management, and other calendar-related functionalities.

## Features

- User authentication (login, registration, token-based authentication)
- CRUD operations for calendar events
- Secure API endpoints
- MongoDB integration for data storage

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- dotenv for environment variable management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/calendar-backend.git
```

2. Navigate to the project directory:

```bash
cd 10-calendar-backend
```

3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Events

- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

## License

This project is licensed under the MIT License.
