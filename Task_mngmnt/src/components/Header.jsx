import React from 'react'
import{Link} from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar  className='position-fixed w-100 top-0 border rounded'>
    <Container>
    <Navbar.Brand>
     <Link className='fw-bolder' style={{textDecoration:'none', color:'purple'}} to={'/'}><i class="fa-regular fa-calendar-days"></i>Task Supervision<br />
     </Link>
    </Navbar.Brand>
     
     <div>
       <button >Logout <i className='fa-solid fa-right-form-bracket'></i></button>
     </div>
    
    </Container>
   </Navbar>
  )
}

export default Header