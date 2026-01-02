import {useState,React} from 'react'
import '../style/registration.css'
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    const [formData, setFormData] = useState({
    Uname: '',
    age: '',
    email: '',
    phoneNo: '',
    address: ''
  })

  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

  const handleSubtmit =(e)=>{
    e.preventDefault();

    localStorage.setItem("loginEmail", formData.email);

    const data = { ...formData };

    const allUsers = JSON.parse(localStorage.getItem("FormData")) || [];
    allUsers.push(data);

    localStorage.setItem(
        "FormData", JSON.stringify(allUsers)
    )
    alert("registration successful")

    navigate("/login");
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <form className="bg-white p-4 rounded shadow-sm" onSubmit={handleSubtmit}>

        <h4 className="text-center mb-4 fw-bold">Registration Form</h4>

        <div className="ipgroup mb-3">
          <input type="text" name='Uname' className="form-control" onChange={handleChange} required />
          <label>Enter Name</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" name='age' className="form-control" onChange={handleChange} required/>
          <label>Enter Age</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="email" name='email' className="form-control" onChange={handleChange} required/>
          <label>Email Address</label>
        </div>

        <div className="ipgroup mb-3">
          <input type="text" name='phoneNo' className="form-control" onChange={handleChange} required />
          <label>Phone Number</label>
        </div>

        <div className="ipgroup mb-4">
          <textarea type="text" name='address' className="form-control" onChange={handleChange} required />
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
