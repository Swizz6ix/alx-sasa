import React, { useState, useEffect } from 'react'
import '../styles/Motivational.css'
import axiosInstance from '../Hooks/instance';

const Motivational:React.FC = () => {
    const [quote, setQuote] = useState<any>([]);
    const [current, setCurrent] = useState(0);
    let slides: any = []

    useEffect(() => {
        axiosInstance({
            method: "GET",
            url: "motivation/all",
        })
        .then((data) => {
            console.log(data)
                setQuote(data)
        })
    }, [])
        quote.forEach((element: { quote: string; }) => {
            slides.push(element.quote)
        });


    // Handles the quote sliding effect every 8 seconds
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1? 0 : current + 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    setTimeout(nextSlide, 100000)
    return (
        <div className='motivational'>
            <div className='motivational__width'>
                <div className='motivational__content'>
                    <div className='motivational__add'>
                        <a href='#addQuote'><h3>add favorite quote</h3></a>
                    </div>
                    <div className='motivational__card'>
                        <div className='motivational__header'>
                            <h3>Motivations</h3>
                        </div>
                        { slides.map((slide, index) => (
                        <div className={ index === current ? 'motivational__quotes': 'not__current'} key={index}>
                            {index === current && (
                            <p>{slide}</p>
                            )}
                        </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Motivational
