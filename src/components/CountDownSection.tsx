import React, { useEffect, useState } from 'react'
import '../styles/countDownSection.css'
import QuestionCard from './QuestionCard'
import DoubleQuestionCard from './DoubleQuestionCard'
import SecondChance from './SecondChance'
import Motivational from './Motivational'
import axiosInstance from '../Hooks/instance'


const CountDownSection:React.FC = () => {
    // State management for the both first and second chance 
    const [firstChance, setFirstChance] = useState<any>([]);
    const [secondChance, setSecondChance] = useState<any>([])

    // Array variables to hold different element from the database
    // for both first chance and second chance respectively
    let id:any = [];
    let progress:any = [];
    let projectCode:any = [];
    let projectName:any = [];
    let id2nd:any = [];
    let progress2nd:any = [];
    let projectCode2nd:any = [];
    let projectName2nd:any = [];
    let endTime:any = [];
    let _endTime:any = [];

    // Handles the GET request for both first and chance respectively
    // through the created axiosInstance
    // Gets all the available projects from the database
    useEffect(() => {
        axiosInstance({
            method: "GET",
            url: "project/all"
        })
        .then((data) => {
            setFirstChance(data)
        });
        
        axiosInstance({
            method: "GET",
            url: "second_chance/all"
        })
        .then((data) => {
            setSecondChance(data)
        });
    }, [])
    
    // For the first chance, iterate through the response from the data and 
    // for each element push it into the array 
    firstChance.forEach((element: {
        deadline: string | number | Date
        projectName(projectName: string): string
        progress(progress: string): string
        id(id: number): number
        projectCode: number 
        }) => {
            projectCode.push(element.projectCode);
            projectName.push(element.projectName);
            progress.push(element.progress);
            id.push(element.id);
            endTime.push(new Date(element.deadline).getTime());
            }
    );

    // For the second chance, iterate through the response from the data and 
    // for each element push it into the array 
    secondChance.forEach((el: {
        deadline: string | number | Date 
        projectName(projectName: string): string; 
        progress(progress: string): string; 
        projectCode(projectCode: number): number; 
        id(id: number): number }) => {
        projectName2nd.push(el.projectName);
        progress2nd.push(el.progress)
        projectCode2nd.push(el.projectCode);
        id2nd.push(el.id);
        _endTime.push(new Date(el.deadline).getTime())
    })
    
    // Deadline for first chance  and second chance respectively
    const timeLeft = endTime;
    const _timeLeft = _endTime

    return (
        <div className='countDownSection'>
            <div className='countDownSection__width'>
                <div className='countDownSection__content'>
                    <div className='countDownSection__motivation'>
                        <Motivational />
                    </div>
                    <DoubleQuestionCard 
                        targetDate={timeLeft} 
                        id={id}
                        progress={progress}
                        projectCode={projectCode}
                        projectName={projectName}
                        key={id}
                        />
                    <QuestionCard 
                        targetDate={timeLeft[2]}
                        id={3}
                        progress={progress[2]}
                        projectCode={projectCode[2]}
                        projectName={projectName[2]}
                        key={id[2]}
                    />
                    <div className='countDownSection__header'>
                        <SecondChance />
                    </div>
                {projectCode &&
                    <>
                        <DoubleQuestionCard
                            targetDate={_timeLeft}
                            id={id2nd}
                            progress={progress2nd}
                            projectCode={projectCode2nd}
                            projectName={projectName2nd} 
                            key={id}
                            />
                        <QuestionCard
                            targetDate={_timeLeft[2]}
                            id={id2nd[2]}
                            progress={progress2nd[2]}
                            projectCode={projectCode2nd[2]}
                            projectName={projectName2nd[2]}
                            key={id[2]}
                            />
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default CountDownSection
