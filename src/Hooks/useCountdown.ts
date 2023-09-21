import React from 'react';
import { useEffect, useState } from 'react';

// Accepts the deadline date in milliseconds as argument calculate the time left
// and returns it, in days, hours, minutes and seconds formats 
// as against milliseconds
const useCountdown = (targetDate:number) => {
    const countDownDate = new Date(targetDate).getTime();
    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    // Calculates the time left to the end of the project and keeps track of every second.
    useEffect(() => {
        const interval = setInterval(() => {
            if ((countDownDate - new Date().getTime()) < 0) {
                clearInterval(interval)
            }
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);
    
        return () => {
            clearInterval(interval)
        };
    }, [countDownDate])
    return getReturnValues(countDown);
}

// Handles the days , hours, minutes and seconds calculation from milliseconds
const getReturnValues = (countDown: number) => {
    const days = Math.ceil(countDown / (1000 * 3600 * 24) - 1);
    // console.log(days)
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    // console.log(hours)
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60) / 1000));

    return [days, hours, minutes, seconds];
};

export { useCountdown }