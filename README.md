# 🌟 HobbyHub - A Local Hobby Group Organizer

Welcome to **HobbyHub**, a platform to **discover, join, and create local hobby groups** like book clubs, painting circles, or hiking teams. Whether you're into reading, running, or creating—HobbyHub connects you to people with similar interests in your area.

🔗 **Live Website:** [https://b11-a10-papiya.netlify.app/](https://b11-a10-papiya.netlify.app/)  
📁 **Client Repository:** [GitHub - HobbyHub Client](https://github.com/azijulhakimbd/HobbyHub-Client)  
📁 **Server Repository:** [GitHub - HobbyHub Server](https://github.com/azijulhakimbd/HobbyHub-Server)

---

## 🚀 Key Features

- ✅ **User Authentication** via Email & Password with Google login integration.
- 🛡️ **Protected Routes** for creating, updating, and managing hobby groups.
- 🎨 **Responsive & Unique Design** across mobile, tablet, and desktop devices.
- 📅 **Dynamic Group Management** – Create, View, Join, Edit & Delete hobby groups.
- 🔥 **Tech Stack:** React, TailwindCSS, Firebase Auth, Express.js, MongoDB.
- 🌘 **Dark/Light Mode Toggle** for better accessibility.
- 🎉 **Animation & Effects** using React Awesome Reveal and typewriter React.
- 🚫 **Form Validations** with password rules and toast alerts (no default alerts used).
- 📆 **Smart Join Restriction** – Users can’t join groups after their start date.

---

## 🧾 Pages Overview

- `/` - Home page with slider, featured groups, and more
- `/login` & `/register` - Auth pages with validation and toast/sweet alert
- `/groups` - See all groups
- `/group/:id` - Group details with join option (based on date)
- `/createGroup` - Form to create new hobby group *(Private)*
- `/myGroups` - See your own created groups with update/delete options *(Private)*
- `/updateGroup/:id` - Update your group details *(Private)*
- `*` - Custom 404 Not Found page

---

## 🛠️ Environment Setup

- **Frontend:**
  - Vite + React + Tailwind CSS
  - Firebase Authentication
  - Hosted on Netlify

- **Backend:**
  - Express.js + MongoDB
  - Hosted on Vercel
  - `.env` includes sensitive keys (not exposed)

---

## 📦 NPM Packages Used

- `firebase`
- `react`
- `react-dom`
- `react-router-dom`
- `react-awesome-reveal`
- `react-helmet`
- `react-icons`
- `react-simple-typewriter`
- `react-toastify`
- `sweetalert2`
- `tailwindcss`

---

## 📌 Requirements Fulfilled

- [x] Minimum 15 client-side commits  
- [x] Minimum 8 server-side commits  
- [x] Fully responsive and error-free routing  
- [x] Unique design – not taken from any module/template  
- [x] No lorem ipsum or default alerts  
- [x] Functional environment variables and Firebase domain settings  
- [x] Toast/sweet alert used for feedback  
- [x] Private routes persist on reload  

---

## 🔍 More Details

### Project Overview  
HobbyHub aims to bring people together based on shared interests through local hobby groups. The platform focuses on ease of use, accessibility, and real-time management of group activities, making it simple for users to discover and engage in hobbies they love.

### Authentication & Security  
- Users can register and log in via email/password or Google OAuth using Firebase Authentication.  
- Protected routes ensure that only authenticated users can create, edit, or delete groups, maintaining data security.  
- Session persistence keeps users logged in even after page reloads or browser restarts.

### Responsive Design & UX  
- Tailwind CSS ensures a mobile-first, responsive UI that adapts smoothly to different screen sizes — from smartphones to desktops.  
- Dark/Light mode toggle improves accessibility and user comfort in different lighting conditions.  
- Custom toast notifications and sweet alerts provide user-friendly feedback without intrusive default alerts.

### Group Management  
- Users can create detailed hobby groups including name, description, location, start date, and other metadata.  
- Groups display dynamic join buttons that are disabled automatically once the group’s start date passes, preventing late joins.  
- Group owners can update or delete their groups easily from a dedicated dashboard (`/myGroups`).

### Animations & Effects  
- The interface features subtle animations powered by `react-awesome-reveal` and a typewriter effect for engaging headings, creating a modern, lively feel.  
- These effects add polish without compromising performance or usability.

### Backend & Data Handling  
- The backend REST API built with Express.js handles CRUD operations securely, communicating with a MongoDB database.  
- Environment variables keep sensitive information secure and configurable between development and production.  
- The backend is deployed on Vercel, while the frontend runs on Netlify for optimal performance.

---