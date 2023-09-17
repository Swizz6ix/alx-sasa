import React from 'react'
import "../styles/TrackMobile.css"
import smallLogo from "../images/logo.png"
import trackMobileImg from "../images/PhoneGroup.png"
import { Zoom }from "react-reveal";

const TrackMobile:React.FC = () => {
    return (
        <div className='trackMobile'>
            <div className='trackMobile__width'>
                <div className='trackMobile__content'>
                    <div className='trackMobile__body'>
                        <div className='trackMobile__inner'>
                        </div>
                        <Zoom top>
                            <div className='trackMobile__phone'>
                                <img src={trackMobileImg} alt="mobile representation of alx-sasa showing project time" />
                                <img className='small__logo' src={smallLogo} alt="small alx-sasa logo" />
                            </div>
                        </Zoom>
                    </div>
                    <div className='trackMobile__header'>
                        <h1><Zoom right cascade>TRACK YOUR PROJECTS IN REAL TIME</Zoom></h1>
                        <div className='trackMobile__text'>
                            <h4>Don't get confuse and miss a deadline</h4>
                        </div>
                        <div className='trackMobile__svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="53" viewBox="0 0 237 193" fill="none">
                                <rect y="178.957" width="288" height="17.1213" transform="rotate(-38.4169 0 178.957)" fill="#9EF7B1"/>
                                <rect x="56" y="168.134" width="202.99" height="17.1213" transform="rotate(-38.4169 56 168.134)" fill="#83F6FD"/>
                                <rect x="118" y="158.567" width="103.909" height="17.1213" transform="rotate(-38.4169 118 158.567)" fill="#F48484"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackMobile
