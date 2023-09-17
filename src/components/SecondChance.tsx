import React from 'react'
import '../styles/SecondChance.css'
import DoHard from './DoHard'

function SecondChance() {
    return (
        <div className='secondChance'>
            <div className='secondChance__width'>
                <div className='secondChance__content'>
                    <div className='secondChance__header'>
                        <div className='secondChance__title'>
                            <h1>SECOND CHANCE</h1>
                        </div>
                        <div className='secondChance__div'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 50 40" fill="none">
                                <rect x="9" width="5" height="60" fill="#83F6FD"/>
                                <rect x="18" width="5" height="60" fill="#F48484"/>
                                <rect width="5" height="60" fill="#9EF7B1"/>
                            </svg>
                        </div>
                    </div>
                    <div className='secondChance__hard'>
                        <DoHard />
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default SecondChance
