# Task Manager with Google Authentication

A simple Task Manager application built with **Next.js (App Router)** for the frontend and an **external Node.js API** for backend operations.  
The app supports **Google OAuth 2.0 login** and displays:

- Public demo tasks for non-logged-in users
- User-specific tasks for authenticated users

---

## 🚀 Features

- **Google Authentication** (OAuth 2.0)
- **Task Management** (Add, View, Delete tasks)
- **Public Tasks View** for first-time visitors or non-logged-in users
- **Secure Cookies** for storing authentication tokens
- **External Node.js API integration** with Next.js API routes
- **MongoDB User Collection** for storing user profiles

---

## 🛠 Tech Stack

### **Frontend**

- [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- TypeScript
- Tailwind CSS

### **Backend**

- Node.js + Express.js
- MongoDB + Mongoose
- Google OAuth 2.0 (`passport-google-oauth20` or `googleapis`)
- JWT-based authentication

---

## 📂 Project Structure

```
├───app
│ ├───add-task
│ ├───api
│ │ ├───logout
│ │ ├───tasks
│ │ │ ├───sample-tasks
│ │ │ └───[id]
│ │ └───user
│ ├───edit-task
│ │ └───[id]
│ ├───home
│ └───lib
├───components
└───public
├───middleware.ts
├───next.config.ts
├───.gitignore
├───tailwind.config.js
├───postcss.config.js
├───pnpm-lock.yaml
├───package.json
└───tsconfig.json
```
