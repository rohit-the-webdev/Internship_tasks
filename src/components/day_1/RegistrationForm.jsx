import {useState,React} from 'react'
import './style/registration.css'
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
    const [formData, setFormData] = useState({
    Uname: '',
    age: '',
    email: '',
    phoneNo: '',
    address: '',
    pincode:'',
    password:''
  })

  const navigate = useNavigate();

  const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
  }

  const handleSubtmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:5000/api/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if(!response.ok){
        alert(data.message);
        return;
      }
      alert("registration successfull");
      navigate("/login");
    } catch(error){
      alert("srver error. try again");
    }

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
          <input type="number" name='age' className="form-control" onChange={handleChange} required/>
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
        <div className="ipgroup mb-3">
          <input type="text" name='pincode' className="form-control" onChange={handleChange} required />
          <label>Pincode</label>
        </div>
        <div className="ipgroup mb-3">
          <input type="text" name='password' className="form-control" onChange={handleChange} required />
          <label>password</label>
        </div>

        <button className="btn btn-primary w-100 fw-semibold">
          Submit
        </button>

      </form>
    </div>
  )
}

export default RegistrationForm
