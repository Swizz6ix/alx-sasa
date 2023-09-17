import React from 'react';
import { useEffect, useState } from 'react';

const useCountdown = (targetDate:number) => {
    const countDownDate = new Date(targetDate).getTime();
    // console.log(countDownDate)
    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );
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