import React from 'react'
import '../styles/QuestionCard.css'
import QuestionLine from './QuestionLine'
import { useCountdown } from '../Hooks/useCountdown'

// Creates the prop interface for project elements
interface dateProps {
    targetDate: number;
    id: number;
    progress: string;
    projectCode: number;
    projectName: string;
}

const QuestionCard: React.FC<dateProps> = ({ targetDate, id, progress, projectCode, projectName }) => {
    //handles the time left for each project, in times of 
    //days, hours, minutes and seconds
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <div className='questionCard'>
            <div className='questionCard__card'>
                <div className='questionCard__cardContent'>
                    <QuestionLine 
                        days={days}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                        id={3}
                        progress={progress}
                        projectCode={projectCode}
                        projectName={projectName}
                        key={id}
                    />
                </div>
            </div>
        </div>
    )
}

export default QuestionCard
