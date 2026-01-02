import React from 'react'

function LoginForm() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form className="bg-white p-4 rounded shadow-sm">

        <h4 className="text-center mb-4 fw-bold">Registration Form</h4>

        <div className="ipgroup mb-3">
          <input type="text" className="form-control" required />
          <label>Enter Email</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" className="form-control" required />
          <label>Enter Age</label>
        </div>

        <button className="btn btn-primary w-100 fw-semibold">
          Submit
        </button>

      </form>
    </div>
  )
}

export default LoginForm
