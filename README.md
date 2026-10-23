# Employee Dashboard Using React

A clean, responsive Employee Dashboard built with **React**, **Vite**, **React Router DOM**, and **Bootstrap**.

## 🚀 Features

- **Navigation Bar**: Responsive navbar with links to **Home** and **Employee Form**.
- **Home Page**:
  - Fetches real-time employee/user data from `https://jsonplaceholder.typicode.com/users`.
  - Displays data in a responsive table with three columns: **ID**, **Name**, and **Email**.
  - Handles loading status with a spinner.
  - Handles API errors gracefully.
- **Employee Form Page**:
  - Contains fields: **Name**, **Designation**, **Location**, and **Salary**.
  - Form validation with required fields.
  - A clean submit button that shows a success alert without sending data to any external API.
- **Design**: Professional blue-and-white color palette styled with Bootstrap and custom CSS.

## 🛠️ Tech Stack

- **React 18 / 19**
- **Vite**
- **React Router DOM**
- **Bootstrap 5**

## 📂 Project Structure

```text
src/
├── components/
│   └── Navbar.jsx        # Top navigation bar
├── pages/
│   ├── Home.jsx          # Fetches & displays employee table
│   └── EmployeeForm.jsx  # Employee input form
├── App.jsx               # Routes setup & layout
├── App.css               # Component custom styling
├── index.css             # Global CSS styling
└── main.jsx              # Entry point with BrowserRouter
```

## ⚙️ How to Run Locally

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open the terminal (`Ctrl + \``) and install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Click or open the local link shown in the terminal (usually `http://localhost:5173`).
