import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import NotFoundImage from '../assets/images/404-not-found.svg'

const NotFoundView: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <div className ="container">
        <div className ="d-flex justify-content-center align-items-center vh-100">
        <img src={NotFoundImage} alt="404 Page Not Found" style={{ height: "768px" }} />
        <h1 className="ms-4" style={{ fontSize: "3rem" }}>The page you were looking for couldn't be found.</h1>
        </div>
        
      </div>
      <div style={{ position: "fixed", bottom: "0" }}>
        <FooterSection />
      </div>
    
    </>
  )
}

export default NotFoundView