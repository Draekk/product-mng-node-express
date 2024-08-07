# product-mng-node-express

This project aims to explore HTTP methods and routing in Express, along with simulating a basic database.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [HTTP Methods](#http-methods)
  - [Routing](#routing)
  - [Database Simulation](#database-simulation)

## Introduction

This project provides a simple Express application that demonstrates the use of various HTTP methods and routing. It also includes a basic simulation of a database using JavaScript objects.

## Installation

To install the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Draekk/product-mng-node-express.git
```

2. Navigate to the project directory:

```bash
cd product-mng-node-express
```

3. Install dependencies:

```bash
npm install
```

## Usage

### HTTP Methods

The application supports the following HTTP methods:

- GET
- POST
- PUT
- DELETE

You can test these methods using tools like Postman or curl.

### Routing

The application has the following routes:

- `/`: Home page
- `/users`: List all users (GET)
- `/users/:id`: Get user by ID (GET)
- `/users`: Create a new user (POST)
- `/users/:id`: Update a user by ID (PUT)
- `/users/:id`: Delete a user by ID (DELETE)

### Database Simulation

The application simulates a basic database using JavaScript objects. The `database/products.js` file contains the `users` array, which stores user objects. The `getUsers`, `getUserById`, `createUser`, `updateUser`, and `deleteUser` functions manipulate this array to simulate database operations.
