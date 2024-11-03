import React from 'react'
import Tasks from '../components/Tasks'
import Add from '../components/Add'
const DashBoard = () => {
  return (
    <div className='d-flex align-items-center justify-content-center m-5 p-5'>
      <div className="container w-75">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-10">
<Tasks/>
          </div>
          <div className="col-lg-2">
            <Add/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard