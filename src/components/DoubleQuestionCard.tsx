import React from 'react'
import '../styles/DoubleQuestionCard.css'
import QuestionLine from './QuestionLine'
import { useCountdown } from '../Hooks/useCountdown';

interface dateProps {
    targetDate: any;
    id: any;
    progress: string;
    projectCode: any;
    projectName: string;
}

const DoubleQuestionCard: React.FC<dateProps> = ({ targetDate, id, progress, projectCode, projectName }) => {
    const [ _days, _hours, _minutes, _seconds] = useCountdown(targetDate[0])
    const [ days, hours, minutes, seconds] = useCountdown(targetDate[1])
    return (
        <div className='doubleQuestionCard'>
            <div className='doubleQuestionCard__card'>
                <div className='doubleQuestionCard__cardContent'>
                    <div className='doubleQuestionCard__up'>
                        <QuestionLine 
                            days={_days}
                            hours={_hours}
                            minutes={_minutes}
                            seconds={_seconds}
                            id={1}
                            progress={progress[0]}
                            projectCode={projectCode[0]}
                            projectName={projectName[0]}
                            key={id[0]}
                        />
                    </div>
                    <div className='doubleQuestionCard__down'>
                        <QuestionLine 
                            days={days}
                            hours={hours}
                            minutes={minutes}
                            seconds={seconds}
                            id={2}
                            progress={progress[1]}
                            projectCode={projectCode[1]}
                            projectName={projectName[1]}
                            key={id[1]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoubleQuestionCard
