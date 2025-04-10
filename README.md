# 📝 To-Do List API (Node.js + Express + MongoDB)

This is a simple and secure **To-Do List API** built with **Node.js**, **Express.js**, **MongoDB**, and **JWT authentication**. It allows users to register, log in, and perform full CRUD operations (Create, Read, Update, Delete) on their to-do tasks.

---

## 🚀 Features

- 🔐 User registration and login with JWT authentication
- 🛡️ Protected routes using middleware
- 📝 Create personal to-do tasks
- 📃 Retrieve all tasks of a user
- 🧾 Update existing tasks
- ❌ Delete tasks by ID

---

## ⚙️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – JSON Web Token for authentication

---

## 📁 Project Structure

. ├── db/ │ ├── config.js # MongoDB connection │ ├── User.js # User schema │ └── Todo.js # Todo schema ├── index.js # Main API entry point


---

## 📦 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-api.git
   cd todo-api

2. Install dependencies:
    ```bash
    npm install

3. Start MongoDB locally (or configure Atlas URI in db/config.js).

4. Run the server:
    ```bash
    node index.js
5. The server runs on http://localhost:5000


## 🔑 Authentication

All to-do routes are protected. Users must log in and pass the JWT token in the request header.
    ```bash
    auth: Bearer <your-token>


---

## 📌 API Endpoints

### ✅ Authentication

| Method | Route      | Description         |
|--------|------------|---------------------|
| POST   | `/register`| Register new user   |
| POST   | `/login`   | Login and get token |

### 📋 To-Do Operations (Requires Token)

| Method | Route             | Description               |
|--------|------------------|---------------------------|
| POST   | `/create`         | Create new to-do          |
| GET    | `/todos/:author`  | Get all to-dos for a user |
| PUT    | `/update/:id`     | Update to-do by ID        |
| DELETE | `/delete/:id`     | Delete to-do by ID        |

---

## 📄 Sample JSON Body

### 🔐 Register / Login

    
    {
      "email": "user@example.com",
      "password": "123456"
    }

## 📝 Create a To-Do
    
    {
      "name": "Buy groceries",
      "author": "user@example.com"
    }

## 📜 License
This project is licensed for educational use. Contributions are welcome.

Made with 💻 by Ranadeb Saha


Let me know if you want this merged into your full `README.md` or need additional sections like DB schema or setup instructions.

