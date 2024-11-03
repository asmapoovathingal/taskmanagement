import React, { useState } from 'react'
import AuthImg from '../assets/authImg.jpg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import {Link, useNavigate} from 'react-router-dom'

const Authentication = ({insideRegister}) => {
  const[userData,setUserData]=useState({
    username:"",email:"",password:""
  })
  console.log(userData);
  
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center' >
 <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={AuthImg} alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2'> <i className='fa-brands fa-ship'></i>Task Supervision </h1>
              <h5 className='fw-bolder mt-2'>
                Sign{
                  insideRegister?"Up":"In"
                } to your Account
              </h5>
              <Form>
             {
              insideRegister && 
              <FloatingLabel
              controlId="floatingInput"
              label="user name"
              className="mb-3">
             <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="Username" />
  
              </FloatingLabel>
             }

              <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password"  />
      </FloatingLabel>

      {
        insideRegister ?
        <div className="mt-3">
          <button  className='btn btn-primary mb-2'>Register</button>
          <p>Already have an Account ?Click here to <Link to={'/login'}>Login</Link></p>
        </div>
        :
        <div className="mt-3">
          <button  className='btn btn-success mb-2'>Login</button>
          <p>Already have an Account ?Click here to <Link to={'/register'}>Register</Link></p>
        </div>
      }
              </Form>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Authentication