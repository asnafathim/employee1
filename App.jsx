import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import EmployeeForm from './pages/EmployeeForm'
import './App.css'

function App() {
  return (
    <div>
      {/* Navbar is shown on every page */}
      <Navbar />

      {/* Page content changes based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>

      {/* Footer */}
      <footer className="text-center text-muted py-4 mt-5">
        <small>© 2026 Employee Dashboard — React Assignment</small>
      </footer>
    </div>
  )
}

export default App
