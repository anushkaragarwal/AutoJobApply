# 🚀 AutoJobApply

> **Full Stack Developer Automation Assignment**
>
> AutoJobApply is a proof-of-concept automation project built to automate parts of the job application workflow. The project focuses on backend API development using **Node.js**, **Express.js**, **Playwright**, and **Nodemailer**, with a lightweight frontend to demonstrate the APIs.

---

# 📋 Assignment Overview

The assignment required implementing the following workflow:

### STEP 1
Automatically login to **LinkedIn**.

### STEP 2
Search **recent LinkedIn Posts** (Last 24 Hours) using keywords such as:

- Java Developer Contract
- Full Stack Developer Contract
- React Developer Contract
- Node.js Developer Contract
- .NET Developer Contract

The assignment also required extracting the **recruiter's email address** from the post.

### STEP 3
Login to **Gmail** automatically.

### STEP 4
Compose and send an email to the recruiter by attaching the candidate's resume.

---

# ✅ Features Implemented

✔ LinkedIn Login Automation using Playwright

✔ Multiple LinkedIn Keyword Search

✔ Express REST APIs

✔ Email Sending using Nodemailer

✔ Automatic Resume Attachment

✔ Environment Variable Configuration (.env)

✔ Modular Backend Architecture

✔ Simple Frontend Dashboard for API Demonstration

✔ Git & GitHub Version Control

---

# ⚠️ Current Limitations

Modern versions of **LinkedIn** and **Google** actively restrict browser automation for security purposes.

Because of these platform restrictions:

- Automatic recruiter email extraction from LinkedIn Posts could not be reliably completed.
- Browser-based Gmail login is blocked by Google's security policies.

To ensure a functional submission:

- Gmail email delivery is implemented using **Nodemailer**.
- A lightweight frontend has been provided to demonstrate the working APIs instead of focusing on UI/UX.

---

# ✨ Project Highlights

- REST API based architecture
- Browser automation using Playwright
- Email delivery using Nodemailer
- Resume attachment support
- Modular code organization
- Multiple LinkedIn keyword search support
- Easy to extend for future automation

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js
- Playwright
- Nodemailer
- dotenv
- CORS

### Frontend

- HTML
- CSS
- JavaScript

### Version Control

- Git
- GitHub

---

# 📁 Project Structure

```text
AutoJobApply
│
├── backend
│   │
│   ├── browser
│   │     ├── linkedin.js
│   │     ├── gmail.js
│   │     └── email.js
│   │
│   ├── routes
│   │     ├── linkedinRoutes.js
│   │     ├── gmailRoutes.js
│   │     └── emailRoutes.js
│   │
│   ├── uploads
│   │     └── Resume.pdf
│   │
│   ├── data
│   │     ├── linkedin-session.json
│   │     └── gmail-session.json
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── README.md
└── .gitignore
```

---

# 🌐 API Endpoints

## LinkedIn Login

```
GET /linkedin/login
```

Launches the browser and performs LinkedIn login.

---

## LinkedIn Search

```
GET /linkedin/search
```

Performs keyword-based LinkedIn searches.

Current supported keywords:

- Java Developer Contract
- Full Stack Developer Contract
- React Developer Contract
- Node.js Developer Contract
- .NET Developer Contract

---

## Send Resume

```
GET /email/send?email=recruiter@example.com
```

Sends an email with the candidate's resume attached.

---

# ▶️ Running the Project

## Install Dependencies

```bash
cd backend
npm install
```

---

## Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=3000

LINKEDIN_EMAIL=your_linkedin_email
LINKEDIN_PASSWORD=your_linkedin_password

EMAIL_USER=your_email
EMAIL_PASS=your_app_password
```

---

## Start the Backend

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

---

## Open the Frontend

Open:

```
frontend/index.html
```

The frontend provides a minimal interface to test the implemented backend APIs.

---

# 🔮 Future Improvements

- LinkedIn API integration (where available)
- OAuth based Gmail Authentication
- Automatic recruiter email extraction
- AI-generated cover letters
- Resume personalization
- Job application tracking dashboard
- Database integration
- User authentication
- Cloud deployment

---

# 👩‍💻 Developed By

**Anushka Agarwal**

Full Stack Developer Assignment

---

# 📌 Note

This project was developed as part of a technical assessment to demonstrate backend API development, browser automation concepts, modular architecture, and email automation.

The primary focus of this submission is the implementation of the backend workflow and APIs. Therefore, a simple frontend dashboard has been provided for demonstration purposes while keeping the emphasis on the backend functionality.
Screenshots:
Dashboard:![alt text](<Screenshot 2026-07-10 010223.png>)
Linkedin Search:![alt text](<Screenshot 2026-07-10 010302.png>)
Email sent successfully response:![alt text](<Screenshot 2026-07-10 010403.png>)