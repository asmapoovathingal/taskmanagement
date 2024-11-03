import React, { useState } from 'react'
import {Row,Col} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const Tasks = () => {
  const[task,setTask]=useState([])
  return (
    <>
    <h1>All Tasks</h1>

    <div style={{marginTop:'150px'}} className="d-flex container-fluid align-items-center justify-content-center">
  <div className="row">
    <div className="col-lg-10">
 <div className="table rounded my shadow">
  <thead>
    <tr>
      <th>#</th>
      <th>Task</th>
      <th>Descr</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Status</th>
      <th>ProPercentage</th>
    </tr>
    <tr>
    </tr>
  </thead>
 </div>
    </div>
    <div className="col-lg-2"></div>
  </div>


</div>


</>


  )
}

export default Tasks