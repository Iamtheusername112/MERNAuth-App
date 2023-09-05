# MERNAuth

MERNAuth is a full-stack user authentication application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a secure and user-friendly platform for user registration and login. This README file serves as a guide to set up, run, and use the application.

## Table of Contents

- [MERNAuth](#mernauth)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)

## Features

- User registration with email verification.
- Secure user login with password hashing.
- Profile management (update user information and password).
- User-friendly and responsive user interface.
- Token-based authentication for protected routes.
- MongoDB database for data storage.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- MongoDB: Install and set up MongoDB as your database server.

## Getting Started

To get a local copy of this project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Iamtheusername112/MERNAuth-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MERNAuth
   ```

3. Install the project dependencies for both the client and server:

   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

4. Set up the MongoDB connection:

   - Create a `.env` file in the `server` directory.
   - Add your MongoDB connection string as `MONGODB_URI` in the `.env` file.

5. Start the server:

   ```bash
   cd server
   npm start
   ```

6. Start the client:

   ```bash
   cd client
   npm start
   ```

7. Open your browser and access the application at `http://localhost:3000`.

## Project Structure

The project is structured as follows:

```
MERNAuth/
├── client/            # Front-end React application
├── server/            # Back-end Node.js and Express server
├── .env                # Environment variables (not included in Git)
├── package.json        # Node.js dependencies and scripts
└── ...
```

## Technologies Used

- MongoDB: Database for user information storage.
- Express.js: Back-end framework for building APIs.
- React: Front-end library for user interfaces.
- Node.js: JavaScript runtime for the server.
- Passport.js: Authentication middleware for Node.js.
- JSON Web Tokens (JWT): Authentication tokens.
- Axios: HTTP client for making requests.
- Bootstrap: Front-end framework for responsive design.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
