# JobVault

JobVault is a full-stack MERN application designed to help users keep track their job applications. It allows users to manage job applications, statuses, and keep all necessary details in one place.

## Features

- **User Authentication**: Register and login with JWT authentication.
- **Job Management**: Add, update, delete, and view job applications.
- **Responsive UI**: Built with modern frontend technologies for a seamless experience.

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS  4.0 (for styling)
- DaisyUI (for pre-styled components)

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose ODM
- JWT Authentication
- Swagger UI (API documentation)

## Installation

### Clone the repository
```bash
git clone https://github.com/sxhilx/jobvault.git
```

### Backend Setup
```bash
cd Backend
npm install
npm start
```
The backend will run on `http://localhost:3000`

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`

## Environment Variables
Create a `.env` file in the `backend` folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFESPAN=your_desired_lifespan
```

## API Documentation
Swagger UI is available at `https://api-jobsvault.vercel.app/api-docs/`.

## Contributing
Pull requests are welcome. Please open an issue first to discuss changes.

## License
This project is licensed under the MIT License.

---
**Made by Sahil Jada**
