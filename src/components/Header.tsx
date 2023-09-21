import React from 'react'
import '../styles/Header.css'
import {Avatar} from '@mui/material'
import { useDataLayerValue } from '../Hooks/useDatalayer';

function Header() {
    const [{ user } ] = useDataLayerValue();
    return (
        <div className="header">
            <div className='header__width'>
                <div className='header__content'>
                    <div className='header__left'>
                        <div className='header__star'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                            </svg>
                        </div>
                        <div className='header__star top__star'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                            </svg>
                        </div>
                        <div className='header__logo'>
                            
                            <div className='leftColor__bar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 50 40" fill="none">
                                <rect x="18.75"  width="12.5" height="19" fill="#83F6FD"/>
                                <rect x="37.5" width="12.5" height="10" fill="#F48484"/>
                                <rect width="12.5" height="40" fill="#9EF7B1"/>
                            </svg>
                            </div>
                            <h1>ALX-SASA</h1>
                        </div>
                        <div className='middleColor__bar'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox=" 0 15 40" fill="none">
                                <rect x="16" width="9" height="40" fill="#83F6FD"/>
                                <rect x="31.5" width="9" height="40" fill="#F48484"/>
                                <rect width="9" height="40" fill="#9EF7B1"/>
                            </svg>
                        </div>
                        <div className='header__inProgress'>
                            <div className='rightColor__bar'></div>
                            <h1>PROJECTS IN PROGRESS</h1>
                            <div className='leftColor__bar'></div>
                        </div>
                        <div className='middleColor__bar'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox=" 0 15 40" fill="none">
                                <rect x="16" width="9" height="40" fill="#83F6FD"/>
                                <rect x="31.5" width="9" height="40" fill="#F48484"/>
                                <rect width="9" height="40" fill="#9EF7B1"/>
                            </svg>
                        </div>
                        <div className='header__welcome'>
                            <div className='rightColor__bar'></div>
                            <h1>Hi!! {user.displayName}...</h1>
                            <div className='rightColor__bar'></div>
                        </div>
                    </div>
                    <div className='header__center'>
                        <Avatar alt={user.displayName} src={user.photoURL} />
                    </div>
                    <div className='header__right'>
                        <div className='header__start'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header
