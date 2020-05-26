import React from 'react'
import Layout from '../components/layout'
import Profile from '../images/profile-pic.png'
import Resume from '../resume-file/Karun Kanda.pdf'

const About = () => {
    return (
            <Layout>
            <h2 align="center">Woah that's me! </h2>
            <img src={Profile} className="img1"/>
            <p className="typewriter">Now here's a little about me...</p>
            <p align ="left" className= "typewriter">
            I am Karun Kanda. I am currently studying in Rutgers University - New Brunswick pursing a Bachelor of Science in Computer Science. I am looking for internship opportunities in Software Development/Engineering. Currently, I work at Cyber-Physical Systems Laboratory as a Research Software Engineer where I am researching ways to sustain the Raritan River through many techniques like adaptive sampling. Also, in this laboratory, I develop python scripts to run on an underwater submarine including a fully autonomous guiding mode, a temperature gathering machine learning algorithm and more. Some of my greatest strengths are I am a team player and I am able to work efficiently. Some goals I have are to become a better programmer and better person because I know there is always more I can do to improve my skills as a programmer but as a person there is always steps I can take to become better. 
            </p>
            <a href={Resume} download> 
                <button type="button" className="btn">Download My Resume</button> 
            </a> 
            </Layout>
    )
}

export default About