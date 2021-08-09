import React from 'react'
import Layout from '../components/layout'
import Profile from '../images/profile-pic.png'
import Resume from '../resume-file/karun_kanda.pdf'

const About = () => {
    return (
            <Layout>
            <h2 align="center">Wow that's me! </h2>
            <img src={Profile} className="img1"/>
            <p className="typewriter">Now here's a little about me...</p>
            <p align ="left" className= "typewriter">
            I am Karun Kanda.I am currently studying in Rutgers University - New Brunswick pursing a Bachelor of Science in Computer Science.I am looking
            for full - time opportunities in Software Development / Engineering.Currently, I work at Cyber - Physical Systems Laboratory as a Research Software Engineer where I am researching ways to sustain the Raritan River through many techniques like adaptive sampling.Also, in this laboratory, I develop python scripts to run on an underwater submarine including a fully autonomous guiding mode, a temperature gathering machine learning algorithm and more. Some of my greatest strengths are I am a team player and I am able to work efficiently. Where at my current position I work with many graduate students where we work together to come up with efficient strategies to complete the tasks at hand. For my career, I strive to become the best programmer I can be by working hard and always taking myself two steps forward.
            </p>
            <a href={Resume} download> 
                <button type="button" className="btn">Download My Resume</button> 
            </a> 
            </Layout>
    )
}

export default About