import { useState } from 'react'

function EmployeeForm() {
  // State for each form field
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [location, setLocation] = useState('')
  const [salary, setSalary] = useState('')

  // State to show a success message after clicking Submit
  const [submitted, setSubmitted] = useState(false)

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the page from reloading
    e.preventDefault()
    // Show a success message (no data is sent anywhere)
    setSubmitted(true)

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)

    // Clear the form fields
    setName('')
    setDesignation('')
    setLocation('')
    setSalary('')
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center page-heading">📝 Employee Form</h2>
          <p className="text-center text-muted mb-4">
            Fill in the employee details below
          </p>

          {/* Success message */}
          {submitted && (
            <div className="alert alert-success text-center" role="alert">
              ✅ Form submitted successfully! (No data was sent)
            </div>
          )}

          <div className="card form-card p-4">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter employee name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Designation Field */}
              <div className="mb-3">
                <label htmlFor="designation" className="form-label fw-semibold">
                  Designation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  placeholder="Enter designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
              </div>

              {/* Location Field */}
              <div className="mb-3">
                <label htmlFor="location" className="form-label fw-semibold">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              {/* Salary Field */}
              <div className="mb-3">
                <label htmlFor="salary" className="form-label fw-semibold">
                  Salary
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  placeholder="Enter salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeForm
