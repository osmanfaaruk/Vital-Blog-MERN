# 🗞️ Vital Blog - Modern MERN Stack Publishing Platform

Vital Blog is a feature-rich, full-stack web application designed for writers and readers. It provides a seamless platform for users to create, publish, and manage their own articles while discovering content from a community of creators.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://vital-blog.vercel.app/)
[![Backend](https://img.shields.io/badge/backend-Render-blue.svg)](https://vital-blog-backend.onrender.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## 🚀 Live Demo
Experience the platform here: **[Vital Blog Live](https://vital-blog.vercel.app/)**

---

## ✨ Key Features

### 👤 User Authentication
- **Secure Registration & Login**: Integrated with JWT (JSON Web Tokens) for modern, stateless authentication.
- **Persistent Sessions**: User sessions are maintained securely using local storage.
- **Profile Management**: Users can update their profile information and manage their account settings.

### 📝 Content Management
- **Interactive Dashboard**: A dedicated space for creators to manage their published work.
- **Rich Text Editing**: Integrated with React-Quill for a premium writing experience.
- **Image Uploads**: Support for featured images in blog posts.
- **Dynamic Posting**: Create, Edit, and Delete blog posts with instant updates.

### 🏠 Discovery & Engagement
- **Responsive Feed**: A clean, accessible home feed showing all community posts.
- **Pagination**: Optimized loading of posts for better performance.
- **Reading Experience**: Dedicated post detail pages with formatted content and metadata.
- **Comment System**: Interactive discussion section for every post.

---

## 🛠️ Technology Stack

| Frontend | Backend | Database | Deployment |
| :--- | :--- | :--- | :--- |
| React (v17) | Node.js | MongoDB Atlas | Vercel (Frontend) |
| Redux (State Mgmt) | Express.js | Mongoose (ODM) | Render (Backend) |
| Vite (Build Tool) | JWT | | |
| Bootstrap 5 | Bcrypt.js | | |

---

## 📁 Project Structure

```text
vital-blog/
├── backend/            # Express Server & API Business Logic
│   ├── config/         # Database & environment configurations
│   ├── controllers/    # Route handlers (logic)
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoints
│   └── server.js       # Entry point
└── frontend/           # React Client (Vite)
    ├── public/         # Static assets
    └── src/
        ├── components/ # Reusable UI components
        ├── redux/      # Global state management (Actions/Reducers)
        └── App.js      # Main Application logic
```

---

## ⚙️ Environment Variables

To run this project locally, create a `.env` file in the root directory and add the following:

```env
# Backend Settings
PORT=4000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development

# Frontend Settings (Vercel)
REACT_APP_API_URL=http://localhost:4000
```

---

## 🛠️ Local Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/osmanfaaruk/Vital-Blog-MERN.git
   cd Vital-Blog-MERN
   ```

2. **Install Backend Dependencies**
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

4. **Run the Application**
   - Start Backend: `npm start` (from the root)
   - Start Frontend: `npm run dev` (from the frontend folder)

---

## 🛡️ License
Distributed under the **ISC License**. See `LICENSE` for more information.

---

## 🤝 Developed By
**Osman Faruk**  
[GitHub](https://github.com/osmanfaaruk) • [Portfolio](https://osmanfaaruk.com)
