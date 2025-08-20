# 📌 SupportDesk (MERN)

A simple **Support Desk** application where users can submit and track their support requests.  
This project was built as part of an assignment and implements **authentication, file uploads, and protected routes**.

---

## ✨ Features

### 🔒 Authentication
- Basic **JWT-based authentication**
- Protected backend routes
- Only logged-in users can access their own requests

### 📝 Support Request Form
- Create a new support request with:
  - **Subject** (text input)
  - **Description** (textarea)
  - **Category** (Billing, Technical, General)
  - **Priority** (Low, Medium, High)
  - **Attachment** (image or PDF, max 5MB)

### 📋 My Requests Page
- Displays all requests submitted by the logged-in user
- Shows:
  - Subject  
  - Status (Pending / Resolved)  
  - Created date  
  - “View” button to see details  

### 🔍 Request Details View
- View a single request with:
  - Subject, description, category, priority  
  - Status (Pending / Resolved)  
  - Uploaded file (download link)  

---


## 🧭 Getting Started

### 1. Clone the repository
```
git clone https://github.com/rajarshi0303/SupportDesk-MERN.git
cd SupportDesk-MERN
```

### 2. Setup Environment Variables
#### For Backend: Create .env or rename .env.example to .env in the backend/ directory:
```
PORT=3000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=your_db_password
DB_HOST=localhost
ACCESS_TOKEN_SECRET=Your_ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET=Your_REFRESH_TOKEN_SECRET
```
#### For Frontend: Create .env or rename .env.example to .env in the frontend/ directory:
```
VITE_API_URL=http://localhost:3000
```

### 3. Install dependencies
```
cd backend
npm install            # installs backend dependencies
cd frontend
npm install            # installs frontend dependencies
```

### 4. Seed the Database 
```
cd backend
node seed.js
```

### 5. Start the Server & Client
#### Backend
```
cd backend
npm run dev
```
#### Frontend
```
cd frontend
npm run dev
```
