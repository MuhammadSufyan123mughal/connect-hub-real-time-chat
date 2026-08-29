Connect Hub 💬

Connect Hub is a full-stack real-time chat application built with the MERN stack. It provides a secure and interactive platform for users to connect and communicate through real-time messaging.

✨ Features

- User Registration & Login
- JWT Authentication
- Secure Password Hashing with Bcrypt
- User Management
- One-to-One Messaging
- Real-Time Communication with Socket.io
- Message History
- Unread Messages
- Image & Media Sharing
- Cloudinary Integration
- Responsive User Interface
- Redux Toolkit State Management
- RESTful APIs
- Error Handling

🛠️ Tech Stack

Frontend:
React.js, Redux Toolkit, Axios, Tailwind CSS, JavaScript

Backend:
Node.js, Express.js, MongoDB, Mongoose, Socket.io, JWT, Bcrypt

Other Tools:
Cloudinary, Git, GitHub

⚙️ Installation

Clone the repository:

git clone YOUR_REPOSITORY_URL
cd connect_hub

Install backend dependencies:

cd backend
npm install

Install frontend dependencies:

cd ../frontend
npm install

Create the environment configuration file:

backend/config/config.env

Add your required MongoDB, Cloudinary, JWT, and other environment variables.

Start the backend:

cd backend
npm run dev

Start the frontend in another terminal:

cd frontend
npm run dev

🔐 Environment Variables

Sensitive credentials are stored in environment variables and are not included in the GitHub repository.

The following types of credentials are required:

- MongoDB connection
- JWT secret
- Cloudinary credentials

«Never share or commit your actual "config.env" file.»

🎯 Project Purpose

This project is developed to gain practical experience in full-stack web development, including authentication, REST APIs, database management, real-time communication, cloud media storage, state management, and Git/GitHub workflows.

👨‍💻 Developer

Muhammad Sufyan
Computer Science Graduate | MERN Stack Developer

🙏 Acknowledgement

This project is developed as part of my Web Development internship to gain practical experience in full-stack development and real-time communciation.

📄 License

This project is intended for educational and portfolio purposes.
