# Real-Time Chat Application

A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time communication.

## Features

- Real-time messaging
- User authentication (Sign up, Sign in)
- Responsive design
- Message history
- Online/Offline user status
- Profile customization

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Socket.IO Client
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT Authentication

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- Git

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ChatApp
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Environment Variables

Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
```

## Running the Application

1. Start the Backend Server
```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment

### Backend Deployment (Render.com)
1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add your environment variables in the Render dashboard

### Frontend Deployment
1. Build the frontend:
```bash
cd frontend
npm run build
```
2. The built files will be in the `dist` directory

## Project Structure

```
ChatApp/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── lib/
│   │   └── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── .env
│   └── package.json
│
└── README.md
```

## Git Commands for VSCode

1. Stage Changes:
   - Click the source control icon in the sidebar (branch icon)
   - Click the + icon next to modified files to stage them
   - Or stage all changes by clicking the + icon at the top of the changes list

2. Commit Changes:
   - Write your commit message in the message box
   - Press Ctrl + Enter (Windows/Linux) or Cmd + Enter (Mac) to commit
   - Or click the checkmark icon above the message box

3. Push Changes:
   - Click the three dots (...) in the source control panel
   - Select "Push"
   - Or use the status bar sync icon

4. Pull Changes:
   - Click the three dots (...) in the source control panel
   - Select "Pull"
   - Or use the status bar sync icon

5. Create/Switch Branches:
   - Click the branch name in the status bar
   - Select "Create new branch" or choose an existing branch

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Contact

Your Name - zaidzaid6049@gmail.com
Project Link: https://github.com/zaiddA/ChatApp
