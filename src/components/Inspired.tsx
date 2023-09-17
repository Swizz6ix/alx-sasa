import React from 'react';
import "../styles/Inspired.css";
import inspiredImg from "../images/GroupPhones.png";
import smallLogo from "../images/logo.png";
import Fade from "react-reveal/Fade";

const Inspired:React.FC = () => {
  return (
    <div className='inspired' id='trailblazers'>
      <div className='inspired__width'>
        <div className='inspired__content'>
          <div className='inspired__text'>
            <div className='inspired__headline'>
              <Fade top big cascade>
                <h1>GET</h1>
                <h1>INSPIRED</h1>
              </Fade>
            </div>
            <h3>In our story we are our own super heros</h3>
            <div className='svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="70" viewBox="0 0 171 169" fill="none">
                <rect width="161.053" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 5.302 79.2607)" fill="#9EF7B1"/>
                <rect width="113.515" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 32.8149 94.196)" fill="#83F6FD"/>
                <rect width="58.1074" height="9.68797" transform="matrix(0.999997 0.00227677 -0.0526636 0.998612 62.3798 111.799)" fill="#F48484"/>
              </svg>
            </div>
          </div>
          <Fade bottom>
            <div className='inspired__phone'>
              <img src={inspiredImg} alt="mobile representation of alx-sasa showing weekly trailblazers from the email" className='inspired__img' />
              <img className='phone__logo' src={smallLogo} alt="small logo" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Inspired
