import React from 'react'
import '../styles/About.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import smallLogo from "../images/logo.png"
import {  LightSpeed, Fade }from "react-reveal";

const About:React.FC = () => {
    return (
        <div className='about' id='about'>
            <div className='about__width'>
                <div className='about__content'>
                    <div className='about__up'>
                            <div className='about__upLeft'>
                                <img className='about__logo' src={smallLogo} alt="" />
                                <LightSpeed left cascade>
                                    <h1>about</h1>
                                    <h1>ALX SASA</h1>
                                </LightSpeed>
                                <a href="https://github.com/Swizz6ix/alx-sasa" target="_blank" rel="noopener noreferrer"><GitHubIcon /><span>project repo</span></a>
                            </div>
                        <div className='about__upRight'>
                            <Fade bottom big cascade>
                                <div className='about__text'>
                                    <p>
                                        ALX-SASA is an app of ALX, by ALX and for ALX. It was inspired by the current project section of
                                        the ALX student portal, the ALX intranet, from where it took its name, ALX SASA, with SASA meaning CURRENT
                                        in Swahili, which is the most spoken African indigenous language.
                                    </p>
                                    <br />
                                    <p>
                                        ALX SASA is an ALX student app that helps keep track of the student's current projects only,
                                        taking into account the first and second deadlines, although the intranet already has a
                                        similar feature in place, ALX SASA can be considered to be an improved version of the already
                                        existing features. For example, on the intranet project deadlines are written in plain text and can easily be a case of an
                                        oversight or misreading by students, as it has been the case with me severally, where I have
                                        missed project deadlines due to misreadings, such as mistaken 3 hours written in plain text for 3 days
                                        under intense pressure.
                                    </p>
                                    <p>
                                        But with all SASA students don't have to worry about oversight or misreading anymore, as
                                        days, hours, minutes, and seconds are duly separated in different boxes, using the digital clocking
                                        system, and labeled accordingly. Students can watch as the seconds count down in real-time
                                        and track every second of their projects from the start date to the deadline as in ALX every
                                        second counts.
                                    </p>
                                    <p>
                                        Using a proper digital clocking system and color combinations, ALX SASA attempts to trigger
                                        the physiological feeling of urgency as each project's deadline draws near, this feature was
                                        added with the students in mind, to alert students about the imminent end of the project as
                                        per the provided deadline.
                                    </p>
                                    <br />
                                    <p>
                                        Keeping track of projects is not the only purpose of ALX-SASA, there are other features in ALX SASA 
                                        that are not yet included on the internet, these features only seek to motivate,
                                        inspire, and stimulate a little sense of humor among students.
                                    </p>
                                    <p>
                                        Perhaps, one of these features, that is most important is the motivational quote feature.
                                        that seeks to tackle the problem of lack of motivation, which in fact, appears to be a common
                                        factor of some sort among students. Not everyone can motivate themselves and some people needs more
                                        motivation to succeed than other, and ALX SASA recognizes this and has given students the power to
                                        motivate each other by empowering them to add at least one of their favorite motivational
                                        quotes for all to benefit from.
                                    </p>
                                    <br />
                                    <p>
                                        In addition, there is also an equally important feature in ALX SASA, called the trailblazer's section, although it already exists in
                                        the ALX's weekly emails, most students tend to miss out on some of these amazing inspirational
                                        stories due to a habit of not reading emails. So bringing out these trailblazer stories to the
                                        front will help to inspire more students especially those who are not in the habit of reading
                                        emails and also by extension, it will encourage students to read emails more often.
                                    </p>
                                    <br />
                                    <p>
                                        Futhermore, there is a meme section in ALX SASA, although ALX itself dedicated an entire channel to it in the
                                        Slack community, most students are not aware of it, and as such they miss out on this amazing
                                        and necessary section in the tech industry. Sometimes tension might be high, and the rush
                                        to beat the deadline and frustration that comes with it, at times like this, a little break to
                                        indulge in a sense of humor might be all that makes the big difference. This is why ALX SASA
                                        gave students the power to put laughter on their faces by posting at least one of their favorite
                                        memes.
                                        <blockquote><i>Like they say a "day without laughter is a day wasted".</i></blockquote>
                                    </p>
                                    <br />
                                    <p>
                                        In conclusion, ALX SASA might seem to be just a project tracker on the surface, but in its core ALX SASA
                                        was not only built with love and with the user experience in mind, it was also built with the
                                        user's general well-being in mind. It possesses the African Spirit of tenacity, persistence,
                                        ruggedness, doggedness, and originality.
                                    </p>
                                </div>
                            </Fade>
                            <div className='about__socials'>
                                {/* <Zoom left cascade> */}
                                <ul className='socials__list'>
                                    <li><a href="https://www.twitter.com/swizz6ix" target="_blank" rel="noopener noreferrer"><TwitterIcon /><span className='list__items'>twitter(X)</span></a></li>
                                    <li><a href='https://www.linkedin.com/in/ferdinand-charles-82901a87' target="_blank" rel="noopener noreferrer"><LinkedInIcon /><span className='list__items'>linkedIn</span></a></li>
                                    <li><a href='https://www.github.com/swizz6ix' target="_blank" rel="noopener noreferrer"><GitHubIcon/><span className='list__items'>GitHub</span></a></li>
                                </ul>
                                {/* </Zoom> */}
                            </div>
                        </div>
                    </div>
                    <div className='about__down'>
                        <ul className='footer__list'>
                            <li>
                                <span className='footer__text'>
                                    Privacy policy
                                </span>
                            </li>
                            <li>
                                <span className='footer__text'>
                                    ©2023 All Rights Reserved ALX-SASA
                                </span>
                            </li>
                        </ul>
                        <img className='footer__logo' src={smallLogo} alt="small ALX-SASA logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
