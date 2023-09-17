import React from 'react'
import '../styles/DoHard.css'

function DoHard() {
    return (
        <div className='doHard'>
            <div className='doHard__width'>
                <div className='doHard__content'>
                    <div className='doHard__card'>
                        <div className='doHard__cardStar'>
                            <h1>DO</h1>
                            <div className='stars'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25"  viewBox="0 0 50 46" fill="none">
                                    <path d="M36 21L39.1432 29.6373H49.3148L41.0858 34.9754L44.229 43.6127L36 38.2746L27.771 43.6127L30.9142 34.9754L22.6852 29.6373H32.8568L36 21Z" fill="#FF3B3B" fill-opacity="0.5"/>
                                    <path d="M14 21L17.1432 29.6373H27.3148L19.0858 34.9754L22.229 43.6127L14 38.2746L5.77101 43.6127L8.9142 34.9754L0.685208 29.6373H10.8568L14 21Z" fill="#FF3B3B" fill-opacity="0.5"/>
                                    <path d="M23 0L26.1432 8.63729H36.3148L28.0858 13.9754L31.229 22.6127L23 17.2746L14.771 22.6127L17.9142 13.9754L9.68521 8.63729H19.8568L23 0Z" fill="#FF3B3B" fill-opacity="0.5"/>
                                </svg>
                            </div>
                        </div>
                        <h1>HARD</h1>
                        <h1>THINGS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoHard
