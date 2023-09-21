import React from 'react'
import '../styles/HerderAlt.css'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../Hooks/useDatalayer';

function HeaderAlt() {
    const [{ user } ] = useDataLayerValue();
    
    return (
        <div className='headerAlt'>
            <div className='headerAlt__width'>
                <div>
                    <div className='headerAlt__up'>
                        <div className='headerAlt__left'>
                            <div className='headerAlt__star'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                    <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                                </svg>
                            </div>
                            <div className='headerAlt__star top__star'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                    <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                                </svg>
                            </div>
                            <div className='headerAlt__logo'>
                                
                                <div className='leftColor__bar'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 50 40" fill="none">
                                    <rect x="18.75"  width="12.5" height="19" fill="#83F6FD"/>
                                    <rect x="37.5" width="12.5" height="10" fill="#F48484"/>
                                    <rect width="12.5" height="40" fill="#9EF7B1"/>
                                </svg>
                                </div>
                                <h1>ALX-SASA</h1>
                            </div>
                        </div>
                        <div className='headerAlt__center'>
                            <div className='middleColor__bar smallest'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox=" 0 10 20" fill="none">
                                    <rect x="9" y="3" width="5" height="16" fill="#83F6FD"/>
                                    <rect x="18" width="5" height="20" fill="#F48484"/>
                                    <rect width="5" y="6" height="10" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            <div className='headerAlt__inProgress'>
                                <div className='rightColor__bar'></div>
                                <h1>PROJECTS IN PROGRESS</h1>
                                <div className='leftColor__bar'></div>
                            </div>
                        </div>
                        <div className='headerAlt__left'>
                            <Avatar alt={user.displayName} src={user.photoURL} />
                            <div className='headerAlt__start'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                    <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#89c5c6" stroke="#fff"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='headerAlt__down'>
                        
                            <div className='middleColor__bar'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox=" 0 15 40" fill="none">
                                    <rect x="9" y="3" width="5" height="16" fill="#83F6FD"/>
                                    <rect x="18" y="6" width="5" height="10" fill="#F48484"/>
                                    <rect width="5" height="20" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            <div className='headerAlt__welcome'>
                                <div className='rightColor__bar'></div>
                                <h1>Hi!! {user.displayName}...</h1>
                                <div className='rightColor__bar'></div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAlt
