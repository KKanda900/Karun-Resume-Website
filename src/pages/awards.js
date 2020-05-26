import React from 'react'
import Layout from '../components/layout'
import ComSoc from '../images/comsoc.png'
import VEXU from '../images/VEXU.png'

const AwardsPage = () => {
    return (
        <Layout>
            <h2>1. IEEE ComSoc Student Competition 2019</h2>
            <h2 className="head2">First Place</h2>
            <img src={ComSoc} className="center"/>
            <br></br>
            <div className="typewriter">
            <p>What is IEEE ComSoc?: The IEEE Communications Society promotes technological innovation and fosters creation and sharing of information among  the global technical community. The Society provides services to members for their technical and professional advancement and forums for technical exchanges among professionals in academia, industry, and public institutions.</p>
            <p></p>
            <p>Competition Description:
            The competition, Communication Technology Changing the World, recognizes students or teams of students who demonstrate the capacity to improve the lives of people, through the application of communication technology and the development of projects that meet the human needs of people.</p>
            <p>My group made a project called LICOT: Litter Information-Centric Ocean of Things. This research project was based on the the negative effects of marine pollution that will recieve and send information to help locate the pollution and clean it up based on a IoT setup.</p>
            </div>
            <h2>2. 2019-2020 Vex World Competition</h2>
            <h2 className="head2">Fifteenth Place</h2>
            <img src={VEXU} className="center"/>
            <br></br>
            <div className="typewriter">
            <p>Competition Description: This competition is part of Vex U that teams that have earned a spot to compete in the same game against other teams that have gained the spot to enter the World's competition.</p>
            <p>Teams that have a chance to enter the world championship competition are: 
            <ul>
                <li>Earned one of the qualifying spots in any Vex U Competition like: </li>
                <ul>
                    <li>Tournament Champion - Awarded to the team that are the finalist in any participating Vex U competition.</li>
                    <li>Excellence Award - Awarded to the team who demonstrates the best attributes as a team overall.</li>
                    <li>Judges Award - Awarded to the team who the judges feel like are most competent.</li>
                </ul>
            </ul>
            </p>
            <p>So far the Rutgers Vex U team (the team I am part of) has won: 
            <ul>
                <li>2 Tournament Champions Awards</li>
                <li>1 Excellence Award</li>
            </ul>
            </p>
            <p>Which gained us 3 qualifying spots to enter the World Championship.</p>
            </div>
        </Layout>
    )
}

export default AwardsPage