import React from 'react'
import Layout from '../components/Layout'
import BlueROV from '../images/bluerov.png'
import Weeks from '../images/weekshall.jpg'
import EngineerLogo from '../images/eng.jpg'

const ExperiencePage = () => {
    return (
        <Layout>
            <h2 align="middle">Research Software Engineer</h2>
            <h2 align="middle" className="head2">Cyber-Physical Systems Laboratory</h2>
            <h2 align="middle" className="head3">June 2019 - Present</h2>
            <br></br>
            <img src={BlueROV} className="schoolPict" align="left"/>
            <img src={Weeks} className="schoolPict" align="right"/>
            <img src={EngineerLogo} className="center" align="middle"/>
            <br></br>
            <br></br>
            <div className="typewriter">
            <p>Cyber Physical Systems Laboratory Mission: </p>
            <p>The Cyber Physical Systems (CPS) Laboratory's overarching mission is to propose novel sensing paradigms to transform raw sensed heterogeneous data into valuable information (by giving semantic meaning to the collected data) and, finally, into knowledge through information fusion and integrat ion. These paradigms will apply to those distributed systems that need to timely react to sensor information with an effective action such as cyber-physical systems, which feature a tight combination of, and coordination between, the system’s computational and physical elements. The significance of the research is to leverage the acquired knowledge to broaden the potential of cyber-physical systems in several dimensions, including: augmentation of human capabilities, understanding of human activities, coordination of heterogeneous (infrared) cameras, operation in dangerous or inaccessible environments, and efficiency.</p>
            <p></p>
            <p>
                Under the Guidance of: Professor Pompili (Associate Professor) and Mehdi Rahmati (Ph.D Student)
            </p>
            <p>Working here consisted of many experiments </p>
            <p>
                As a Research Software Engineer my responsibilities consisted of:
                <ul>
                    <li>The software end of the underwater submarine used for research.</li>
                    <li>Creating Python scripts to complete the necessary tasks for the Professor's project.</li>
                    <ul>
                        <li>Some projects I have completed so far is:</li>
                        <ul>
                            <li>Server-Client Socket for communicating data between the Raspberry Pi in the submarine and my laptop.</li>
                            <li>Creating a fully autonomous mode for the robot submarine.</li>
                            <li>Created a G.U.I for a IoT setup between many robot submarines, laptop, router and buoys.</li>
                        </ul>
                    </ul>
                    <li>Creating real-time efficient programs that is able to run on low-end hardware such as a Raspberry Pi with lower CPU power and memory space.</li>
                </ul> 
            </p>
            </div>
        </Layout>
    )
}

export default ExperiencePage