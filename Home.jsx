import { useState, useEffect } from 'react'

function Home() {
  // State to store the employee data from the API
  const [employees, setEmployees] = useState([])

  // State to track whether data is still loading
  const [loading, setLoading] = useState(true)

  // State to store any error message
  const [error, setError] = useState(null)

  // useEffect runs once when the page loads to fetch data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Check if the response is OK (status 200)
        if (!response.ok) {
          throw new Error('Failed to fetch employee data')
        }
        return response.json()
      })
      .then((data) => {
        // Save the fetched data into state
        setEmployees(data)
        setLoading(false)
      })
      .catch((err) => {
        // If something went wrong, save the error message
        setError(err.message)
        setLoading(false)
      })
  }, [])

  // ---------- RENDER ----------

  // Show loading message while data is being fetched
  if (loading) {
    return (
      <div className="container mt-5">
        <div className="loading-box">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted fs-5">Loading employee data...</p>
        </div>
      </div>
    )
  }

  // Show error message if fetching failed
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center" role="alert">
          <strong>Error:</strong> {error}
        </div>
      </div>
    )
  }

  // Show the employee table once data is loaded
  return (
    <div className="container mt-5">
      <h2 className="text-center page-heading">👥 Employee List</h2>
      <p className="text-center text-muted mb-4">
        Data fetched from JSONPlaceholder API
      </p>

      <div className="table-container">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
