import React from 'react'
import styled  from 'styled-components'

interface countDownProps {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
    id: number;
    progress: string;
    projectCode: number;
    projectName: string;
}


const QuestionLine:React.FC<countDownProps> = ({days, hours, minutes, seconds, id, progress, projectCode, projectName}) => {
    

    // Defines the logic boolean expressions used to condition the time to change behavior at deferent times
    const expire = days+hours+minutes+seconds <= 0
    const complete = progress === "100.0%" || progress === "100.0% done" || progress === "200.0%" || progress === "200.0% done";
    const hoursLeft = days <= 0 && hours >= 6 && hours <=12;
    const fewHours = days <= 0 && hours <= 6;
    const minsLeft = days <= 0 && hours <= 0 && minutes >= 30;
    const fewMins = days <= 0 && hours <= 0 && minutes <= 30;
    const secsLeft = days <= 0 && hours <= 0 && minutes > 0 && minutes <= 10;
    const fewSecs = days <= 0 && hours <= 0 && minutes <= 0;

    let level:string = "";
    let levelColor:string = "";
    let daysBox:string = "";
    let hrsBox:string = "";
    let minsBox:string = "";
    let secsBox:string = "";

    // Checking for the progress level of the project
    switch (true) {
        case complete:
            level= "Completed";
            levelColor ="rgba(109, 243, 139, 0.67)";
            break;
        case expire:
            level= "Expired";
            levelColor = "rgba(234, 22, 22, 0.53)"
            break;
        default:
            level= "In-Progress";
            levelColor = "rgba(7, 237, 252, 0.50)";
            daysBox = "#000"
            break;
    }

    //conditioning days, hours, minutes and seconds
    if (hoursLeft) {
        hrsBox = "#f8cf5b"
    } else if (fewHours) {
        hrsBox = "#ff3b3b"
    }
    else {
        hrsBox = '#000'
    }

    if (minsLeft) {
        minsBox = "#f8cf5b"
    } else if (fewMins) {
        minsBox = "#ff3b3b"
    } else {
        minsBox = "#000"
    }

    if (secsLeft) {
        secsBox = "#f8cf5b"
    } else if (fewSecs) {
        secsBox = "#ff3b3b"
    } else {
        secsBox = '#000'
    }

    switch (true) {
        case days === 1:
            daysBox = "#f8cf5b"
            break;
        case days <= 0:
            daysBox = "#ff3b3b"
            break;
        default:
            daysBox = "#000"
            break;
    }

    return (
        <Wrapper>
            <Width>
                <Content>
                    <NumberOuter>
                        <NumberInner>
                            <Number>
                                {id}
                            </Number>
                        </NumberInner>
                    </NumberOuter>
                    <NameTask>
                        <TaskBar color={levelColor} draggable='true'>
                            <h4>{level}</h4>
                            <h5>{progress}</h5>
                        </TaskBar>
                        <Project>
                            <ProjectTitle>
                                <ProjectCode>
                                    {projectCode}
                                </ProjectCode> 
                                <Dash> - </Dash>
                                <ProjectName>
                                    {projectName}
                                </ProjectName>
                            </ProjectTitle>
                            
                        </Project>
                    </NameTask>
                    <CountDownTimer>
                        <CountDownContainer>
                            <CounterBox>
                                <Label>day(s)</Label>
                                <DaysBox color={daysBox}>
                                <Days>{days <= 0 ? 0 : days}</Days>
                                {/* <h2>0</h2> */}
                                </DaysBox>
                            </CounterBox>
                            
                            <CounterBox>
                                <Label>hour(s)</Label>
                                <HourBox color={hrsBox}>
                                <Hours>{hours <= 0? 0 : hours}</Hours>
                                {/* <h2>0</h2> */}
                                </HourBox>
                            </CounterBox>

                            <CounterBox>
                                <Label>Min(s)</Label>
                                <MinBox color={minsBox}>
                                <Mints>{minutes <= 0? 0 : minutes}</Mints>
                                {/* <h2>0</h2> */}
                                </MinBox>
                            </CounterBox>

                            <CounterBox>
                                <Label>sec(s)</Label>
                                <SecBox color={secsBox}>
                                <Secs>{seconds <= 0? 0 : seconds}</Secs>
                                {/* <h2>0</h2> */}
                                </SecBox>
                            </CounterBox>
                        </CountDownContainer>
                        <CountDownBar>
                            <h5>countdown</h5>
                        </CountDownBar>
                    </CountDownTimer>
                </Content>
            </Width>
        </Wrapper>
    )
}

export default QuestionLine

const CountDownBar = styled.div`
    background-color: #ff3b3b;
    position: absolute;
    bottom: 0;
    width: 142px;
    display: flex;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-style: italic;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    @media screen and (max-width: 558px) {
        font-size: 12px;
        width: 115px;
    }
`

const Days = styled.h2`
    font-size: 14px;
    font-weight: 500;
    font-family: inter;
`
const Hours = styled(Days)``

const Mints = styled(Days)``

const Secs = styled(Days)``

const DaysBox = styled.div`
    display: flex;
    background-color: ${props => props.color || "#000"};
    height: 30px;
    width: 45px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border-bottom: 1px solid #5602a1;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    @media screen and (max-width: 1098px) {
        width: 39px;
        margin-right: 5px;
        margin-left: 5px;
        margin-top: 5px;
    }
    @media screen and (max-width: 558px) {
        height: 30px;
    }
`
const CounterBox = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
`

const Label = styled.h5`
    font-size: 8px;
    color: #074C6D;
    margin-bottom: 5px;
`

const HourBox = styled(DaysBox)`
    background-color: ${props => props.color};
`

const MinBox = styled(DaysBox)`
    background-color: ${props => props.color};
`

const SecBox = styled(DaysBox)`
    background-color: ${props => props.color};
`

const CountDownContainer = styled.div`
    display: flex;
`

const CountDownTimer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    border-bottom: 1px solid #5602a1;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    background-color: var(--timerBox);
`

const ProjectCode = styled.h2`
    font-size: 14px;
    font-weight: 500;
    font-family: inter;
    padding: 5px;
    line-height: 1.5;
    letter-spacing: 0.8px;
`
const Dash = styled(ProjectCode)``

const ProjectName = styled(ProjectCode)``

const ProjectTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    color: var(--text);
    @media screen and (max-width: 558px) {
        font-size: 12px;
        margin: 4px;
    }
`

const Project = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #5602a1;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    background-color: var(--questionColor);
    @media screen and (max-width: 558px) {
        margin-bottom: 10px;
    }
`

const TaskBar = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${props => props.color};
    // position: absolute;
    // top: 0;
    align-items: center;
    align-self: center;
    border-bottom: 1px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    color: #fff;
    width: fit-content;
    font-style: italic;
    font-weight: lighter;
    font-size: 14px;
    padding: 3px;
    border-bottom-right-radius: 23px;
    border-top-left-radius: 15px;
    margin-bottom: 10px;
    > h4 {
        // color: #f8cf5b;
        margin-right: 5px;
        // text-emphasis-color: #ff3b3b;
    }

    > h5 {
        color: #000;
        margin-right: 10px;
    }

    @media screen and (max-width: 558px) {
        font-size: 12px;
        width: fit-content;
    }

    @media screen and (max-width: 480px) {
        // top: 30px;
    }
`
const NameTask = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    align-self: flex-end;
    flex-grow: 1;
    @media screen and (max-width: 1098px) {
        margin-left: 10px;
        margin-right: 10px;
    }
    @media screen and (max-width: 558px) {
        margin: 0;
    }
`

const Number = styled.h2`
    font-size: 14px;
    font-weight: 500;
    font-family: inter;
    padding: 5px;
    color: var(--text);
`

const NumberInner = styled.div`
    margin: 10px;
    @media screen and (max-width: 558px) {
        margin: 1px;
    }
`

const NumberOuter = styled.div`
    background-color: white;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: end;
    border-bottom: 1px solid #5602a1;
    box-shadow: 0px 4px 4px 0px rgba(86, 2, 161, 0.25);
    background-color: var(--questionColor);
    @media screen and (max-width: 558px) {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
    }
`

const Content = styled.section`
    display: flex;
    @media screen and (max-width: 558px) {
        flex-wrap: wrap;
    }
`
const Width = styled.section``

const Wrapper = styled.section`
    position: relative;
    padding: 20px;
    margin-bottom: 10px;
`