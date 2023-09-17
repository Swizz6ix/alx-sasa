import React, { useState } from 'react'
import '../styles/MemeCard.css'
import DoHard from './DoHard'
import data from "../dummie.json"
import axiosInstance from '../Hooks/instance'
// import trailImg from "../images/Screenshot_20230823-225755_Gmail2.png"

function MemeCard() {
    const trailblazers = data.trailblazers
    const memes = data.memes

    const textarea = document.getElementById('quote') as HTMLInputElement | null;
    const btn = document.getElementById('btn')
    btn?.addEventListener('click', function clear(){
        if (textarea != null)
            textarea.value = ''
    })

    const [quote, setQuote] = useState<any>({
        quote: " ",
    });

    const handleChange = (event: { preventDefault: () => void; target: { value: any } }) => {
        event.preventDefault();

        setQuote({
            quote: event.target.value,
        });
    };

    const submitForm = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        axiosInstance({
            method: "POST",
            url: "motivation/add",
            data: quote
        })
        .then((data) => {
            console.log("new quote", data)
        })
    }

    return (
        <div className='memeCard'>
            <div className='memeCard__width'>
                <div className='memeCard__content'>
                    <div className='memeAdd'>
                        <div className='memeCard__card'>
                            <div className='memeCard__cardHeader'>
                                <div className='memeCard__cardHeaderTitle'>
                                    <h3>MEME</h3>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 40" fill="none">
                                    <rect x="18.75" width="12.5" height="60" fill="#83F6FD"/>
                                    <rect x="37.5" width="12.5" height="60" fill="#F48484"/>
                                    <rect width="12.5" height="60" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            <div className='memeCard__cardImg'>
                                <img src={memes.image} alt={memes.caption} />
                            </div>
                            <div className='memeCard__cardDesc'>
                                <p>
                                    {memes.caption}
                                </p>
                            </div>
                        </div>
                        <div className='addMeme'>
                            <input type="file" />
                            <div className='addMeme__desc'>
                                <textarea className='memeCard__caption' rows={2} cols={38} placeholder='Caption ...' ></textarea>
                            </div>
                            <input className='memeCard__addBtn'  type="submit" value="add meme" />
                        </div>
                    </div>
                    <div className='memeCard__down'>
                        <div className='memeCard__emailCard'>
                            <div className='memeCard__emailCardHeader'>
                                <div className='memeCard__emailCardTitle'>
                                    <h3>INSPIRATIONS</h3>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" viewBox="0 0 50 40" fill="none">
                                    <rect x="18.75" width="12.5" height="60" fill="#83F6FD"/>
                                    <rect x="37.5" width="12.5" height="60" fill="#F48484"/>
                                    <rect width="12.5" height="60" fill="#9EF7B1"/>
                                </svg>
                            </div>
                            <div className='memeCard__emailCardImg'>
                                <img src={trailblazers.image} alt="trailblazers of the week" />
                            </div>
                        </div>
                        <form className='addMotivational' id='addQuote' onSubmit={submitForm}>
                            <textarea id='quote' name="quote"  className='memeCard__textArea' rows={4} cols={30} placeholder="What's your favorite motivational quote" onChange={handleChange}></textarea>
                            <div className='addBtn'>
                                <button type='submit' id='btn' className='memeCard__addBtn' >add favorite quote</button>
                            </div>
                        </form>
                    </div>
                    <div className='footer'>
                        <div className='footer__logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="147" viewBox="0 0 182 147" fill="none">
                                <rect width="182" height="147" fill="#121C19"/>
                                <rect x="73" y="22.3309" width="16" height="55" fill="#83F6FD"/>
                                <rect x="97" y="22.3309" width="16" height="55" fill="#F48484"/>
                                <path d="M124.632 20.5121L140.632 20.512L108.632 77.512L91.6321 77.512L124.632 20.5121Z" fill="#F48484"/>
                                <path d="M73.6321 20.2833L87.6321 20.2833L56.6321 77.5118L41.6321 77.5118L73.6321 20.2833Z" fill="#9EF7B1"/>
                                <path d="M98.6321 20.5118L112.632 20.5118L81.6321 77.5118L66.0661 77.7404L98.6321 20.5118Z" fill="#83F6FD"/>
                                <rect x="49" y="22.3309" width="16" height="55" fill="#9EF7B1"/>
                                <path d="M155 18.4621L157.673 25.8083L157.793 26.1373H158.143H166.625L159.814 30.556L159.48 30.7725L159.616 31.1464L162.249 38.3807L155.272 33.8551L155 33.6786L154.728 33.8551L147.751 38.3807L150.384 31.1464L150.52 30.7725L150.186 30.556L143.375 26.1373H151.857H152.207L152.327 25.8083L155 18.4621Z" fill="white" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='footer__hard'>
                            <DoHard />
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
                        </div>
                        <div className='footer__words'>
                            <h5>Privacy policy</h5>
                            <h5>&copy;2023 All Rights Reserved ALX-SASA</h5>
                        </div>
                    </div>
                    <div className='footer__stars'>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#fff">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#f8cf5b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#f8cf5b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#fff">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                        <div className='stars1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 28 22" fill="#89c5c6">
                                <path d="M14 0.462116L16.6733 7.80827L16.7931 8.13729H17.1432H25.6253L18.8137 12.556L18.4799 12.7725L18.6159 13.1464L21.2486 20.3807L14.2721 15.8551L14 15.6786L13.7279 15.8551L6.75141 20.3807L9.38406 13.1464L9.52013 12.7725L9.18631 12.556L2.37473 8.13729H10.8568H11.2069L11.3267 7.80827L14 0.462116Z" fill="#fff" stroke="#ff3b3b"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemeCard
