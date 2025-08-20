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
  - Uploaded file (preview/download link)  

---
