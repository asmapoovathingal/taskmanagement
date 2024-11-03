import React from 'react'
import homeImg from '../assets/home_img.webp'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Header/>
    <div style={{height:'100vh',width:'100%'}} className='d-flex align-items-center justify-content-center h-100 m-5 p-5'>
     <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6">
<h1>“Management is doing things right; leadership is doing the right things”</h1>
<Link to={'/register'} className='btn btn-success'>click here to Explore Events</Link>

        </div>
        <div className="col-lg-6">
          <img className='p-5 m-5'style={{height:'700px',width:'550px'}} src={homeImg} alt="" />
        </div>
      </div>
     </div>
    </div>
    <Footer/>

    </>
  )
}

export default Home