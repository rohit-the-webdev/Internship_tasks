import React from 'react'
import '../style/registration.css'

function RegistrationForm() {
    const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

  const handleSubtmit =(e)=>{

    localStorage.setItem(
        "FormData", JSON.stringify(formData)
    )
    alert("registration successful")
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form className="bg-white p-4 rounded shadow-sm" onSubmit={handleSubtmit}>

        <h4 className="text-center mb-4 fw-bold">Registration Form</h4>

        <div className="ipgroup mb-3">
          <input type="text" name='name' className="form-control" required />
          <label>Enter Name</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" className="form-control" required />
          <label>Enter Age</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="email" className="form-control" required />
          <label>Email Address</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" className="form-control" required />
          <label>Phone Number</label>
        </div>

        <div className="ipgroup mb-4">
          <input type="text" className="form-control" required />
          <label>Address</label>
        </div>

        <button className="btn btn-primary w-100 fw-semibold">
          Submit
        </button>

      </form>
    </div>
  )
}

export default RegistrationForm
