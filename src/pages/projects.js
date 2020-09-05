import React from 'react'
import Layout from '../components/layout'
import ResearchPaperFrontPage from '../images/frontpg.jpg'
import ResearchPaperDownload from '../research-paper/researchpaper.pdf'
import LOL from '../images/lol.jpg'
import Alfred from '../images/alfred-app.png'
import PassApp from '../images/PassApp.jpg'
import ChatSock from '../images/chat-socket.jpg'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="typewriter">
            <p align="center">Over time of learning Computer Science at Rutgers University I have worked on several projects utilizing the techniques I learned from in lecture or out of lecture. Also, some research I have done in my undergrad. Here are some of those projects I have worked on. You can click on the titles to view more about these projects/view the github repositories to see the source code for these projects.</p>
            <a href="https://www.comsoc.org/membership/ieee-comsoc-student-competition/winners"><h2>1. LICOT: Litter-Information-Centric Ocean of Things (Research Paper)</h2></a>
            <img src={ResearchPaperFrontPage} className="center1"/>
            <br></br>
            <p>This was a paper I coauthored with my team at Cyber-Physical Systems Laboratory. This research project was based on the the negative effects of marine pollution that will recieve and send information to help locate the pollution and clean it up based on a IoT setup.</p>
            <p>The research paper highlighted how robotics and underwater acoustics can work together to assist in managing Ocean waste and how people can be more efficient in cleaning pollution faster so we can eventually make the Earth cleaner. This paper was also used in the IEEE ComSoc 2019 competition where the team and I earned first place.</p>
            <a href={ResearchPaperDownload} download> 
                <button type="button" className="btn">Download the Research Paper</button> 
            </a>
            <br></br>
            <br></br>
            <a href="https://github.com/KKanda900/PassApp"><h2>2. PassApp</h2></a>
            <img src={PassApp} className="center3"/>
            <br></br>
            <p>This was a password generator program I wrote to make a random, strong, secure password that can be length 1 - 1 billion characters long.</p>
            <p>This project was fully done in Java and the unique factor of this project was that it did not use any random number library but instead it utilizes the tree data structure. I felt that this was the best approach because with using a tree structure I am not restricted to the integer number restriction and I can make it as large as possible.</p>
            <p>Some additional touches I am working on for this project is to utilize a desktop GUI to make it look more friendly and maybe a storage portion so the user can store the password with what website they are creating the password.</p>
            <br></br>
            <br></br>
            <a href="https://github.com/KKanda900/Alfred"><h2>3. Alfred</h2></a>
            <img src={Alfred} className="center2"/>
            <br></br>
            <p>This is a voice assistant AI python application I am making called Alfred. I am calling it Alfred after the character in Batman because how Alfred in the show always helped Batman no matter what situation Batman was in or trouble Batman was in. What makes Alfred unique from other voice assistants is the way it can uniquely identify your voice and is able to handle tasks that regular voice assistants can not handle.</p>
            <p>I made this project in Python for the backend and ElectronJS as the front-end portion.</p>
            <br></br>
            <br></br>
            <a href="https://github.com/KKanda900/Chat-Socket"><h2>4. Chat-Socket</h2></a>
            <img src={ChatSock} className="center2"/>
            <p>A chat server based on TCP sockets and socket programming made in Python. The purpose is to have a communication method that doesn't need to be loaded in a web browser and can have the ability to communicate locally with other machines.</p>
            <p>I made this project using a server/client sockets made in Python.</p>
            <br></br>
            <br></br>
            <a href="https://github.com/Mervin-James/WeatherWardobe"><h2>5. Pick My Wardrobe</h2></a>
            <img src={LOL} className="center2"/>
            <br></br>
            <p>This was a collaborative project done in HackRU, a competitive programming competition, based on Google Cloud object detection API and weather API to choose your outfit based on weather conditions in your country and clothing you own.</p>
            <p>This project was fully done in Python using google-cloud api, google vision api, numpy, opencv, openweathermap api and computer vision.</p>
            <br></br>
            <br></br>
            <h2>Projects Still in Development:</h2>
            <p>
                <ul>
                    <a href="https://github.com/KKanda900/Guub-Adventure"><li>Guub-Adventure</li></a>
                    <ul>
                        <li>An adventure game based on an fictitious character named Guub around the world of Nether.</li>
                        <li>Made in C.</li>
                    </ul>
                    <a href="https://github.com/KKanda900/Convenient-Maps"><li>Convenient-Maps</li></a>
                    <ul>
                        <li>A new mapping system to make going around a little more easier.</li>
                        <li>Made in Python and utilizing Google Maps API.</li>
                    </ul>
                </ul>
            </p>
            </div>
        </Layout>
    )
}

export default ProjectsPage