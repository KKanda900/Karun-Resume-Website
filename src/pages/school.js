import React from 'react'
import Layout from '../components/layout'
import School from '../images/RU.jpg'


const EducationPage = () =>{
    return (
        <Layout>
            <img src={School} className="schoolPic"/>
            <p className="typewriter">
            Currently I am studying at Rutgers University - New Brunswick pursing my Bachelor of Science in Computer Science. I choose to go to Rutgers University because the reputation the college has in computer science. Currently, Rutgers University is ranked higher in Computer Science than both New Jersey Institute of Technology (NJIT) and Stevens Institute of Technology. Rutgers Computer Science program has many assets like assisting students in furthering their career and getting a job in the future. Rutgers’ Computer Science program has taught me a lot about being a Computer Scientist outside just the application of Computer Science. Like, the application, theory and ethics behind Computer Science. Hence, I felt this was the best college to further my career in Computer Science. 
            </p>
            <p>
                My Expected Graduation Date is: May 2022
            </p>
            <p>
                My Current GPA: 3.347
            </p>
            <p>
            Here are the most relevant courses I have taken at Rutgers University:
            <ul>
                <li>Data Structures - Where I learned the main data structures utilized in everyday applications and learned how to analyze them by their run-time and space complexity.</li>
                <li>Principles of Information and Data Management - Where I learned about the process of building a Database from the conceptual design to the physical design of a database.</li>
                <li>Design and Analysis of Algorithms - Where I learned how to design efficient algorithms and how to analyze algorithms based on their Big O, Big Theta, and Big Omega run-time to determine efficient algorithms.</li>
                <li>Software Methodology - Where I learned the design process in making applications and the fundamentals of Object Oriented Programming.</li>
                <li>Introduction to Artifical Intelligence - Where I learned the fundamentals behind designing intelligent algorithms and the fundamentals behind Artifical Intelligence.</li>
                <li>Internet Technology - Where I learned the principles and practice of the Internet and computer networking through the introduction of the design, architecture, and foundational telnets of large-scale networks.</li>
                <li>Introduction to Computer Graphics - Where I learned about the fundamentals of Computer Graphics and learning the techniques that are commonly used in the graphics industry today.</li>
                <li>Systems Programming - Where I learned about writing lower-level programs that interact directly with the computer's operating system and hardware.</li>
                <li>Data Science - Where I am learning to solve problems involving data, which includes preparation (collection and integration), characterization and presentation (information visualization), analysis (machine learning and data mining), and products (applications).</li>
                <li>Introduction to Computational Robotics - Where I am learning robotics from a computational perspective with a focus on mobile robots.</li>
            </ul>
            </p>
            <br/>
            <p>
            Here are some extra-curriculars activities I have participated in:
            <ul>
                <li>Rutgers IEEE Vex U Division</li>
                <ul>
                    <li>What is Rutgers IEEE?: Rutgers IEEE, which if part of the larger IEEE (Institute of Electrical and Electronics Engineers), where its split into many divisions (Robotics, ML/AI, Electronics and Novice2Expert) in which students can join one of the divisions of their interest.</li>
                    <li>What is Vex U?: Vex U is a competition held by the company Vex where universities all over the world participate to compete in a specific game set by Vex that the student teams have to create two robots to complete the game. Building the robot involves students to make the physical design and software of the robot.</li>
                    <li>Role: Programming Lead</li>
                    <li>Impact: As the division's programming lead I am responsible to teach any new coming students the fundamentals of programming the Vex Robots and teach them the ins and outs of creating the software of the robot.</li>
                </ul>
                <li>Rutgers Robotics</li>
                <ul>
                    <li>What is Rutgers Robotics? Rutgers Robotics, not to be confused with Rutgers IEEE Robotics, is a robotics specific club which we participate in many University level robotics competitions.</li>
                    <li>Role: Programmer</li>
                    <li>Impact: As a programmer in this division I make sure I do my part in any competition we participate in when it comes to the software of the robot.</li>
                </ul>
            </ul>
            </p>
        </Layout>
    )
}

export default EducationPage