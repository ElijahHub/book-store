# Book Store CRUD App

## Description
The **Book Store CRUD App** is a full-stack web application built using the **MERN (MongoDB, Express, React, Node.js) stack** with **Vite** for frontend development and **TypeScript** for type safety. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on books.

## Features
- 📚 Add new books with title, author, description, and price.
- 🔍 View a list of all available books.
- ✏️ Edit book details.
- 🗑️ Delete books from the collection.
- 🔒 Secure API endpoints using authentication.

## Tech Stack
### Frontend:
- React with Vite
- TypeScript
- Tailwind CSS (for styling)
- React Router
- Axios (for API requests)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- TypeScript
- JWT Authentication (optional for secured routes)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- MongoDB (locally or using MongoDB Atlas)

### Clone the Repository
```sh
git clone https://github.com/yourusername/bookstore-crud-app.git
cd bookstore-crud-app
```

### Backend Setup
1. Navigate to the `server` folder:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and configure environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `client` folder:
   ```sh
   cd ../client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

The frontend will be available at `http://localhost:5173/` (default Vite port).

## API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | /api/books    | Fetch all books |
| GET    | /api/books/:id | Fetch book by ID |
| POST   | /api/books    | Add a new book |
| PUT    | /api/books/:id | Update book details |
| DELETE | /api/books/:id | Delete a book |

## Contribution
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request

Developed with ❤️ using MERN, Vite, and TypeScript.

