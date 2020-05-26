import React from 'react'
import Layout from '../components/layout'
import ResearchPaperFrontPage from '../images/frontpg.jpg'
import ResearchPaperDownload from '../research-paper/researchpaper.pdf'
import LOL from '../images/lol.jpg'
import three from '../images/passapp.png'
import Alfred from '../images/alfred.png'

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
            <a href="https://github.com/Mervin-James/WeatherWardobe"><h2>2. Pick My Wardrobe</h2></a>
            <img src={LOL} className="center2"/>
            <br></br>
            <p>This was a collaborative project done in HackRU, a competitive programming competition, based on Google Cloud object detection API and weather API to choose your outfit based on weather conditions in your country and clothing you own.</p>
            <p>This project was fully done in Python using google-cloud api, google vision api, numpy, opencv, openweathermap api and computer vision.</p>
            <br></br>
            <br></br>
            <a href="https://github.com/KKanda900/KarunKanda/blob/master/Personal-Projects/Personal_Projects/PassApp.java"><h2>3. PassApp</h2></a>
            <img src={three} className="center3"/>
            <br></br>
            <p>This was a password generator program I wrote to make a random, strong, secure password that can be length 1 - 1 billion characters long.</p>
            <p>This project was fully done in Java and the unique factor of this project was that it did not use any random number library but instead it utilizes the tree data structure. I felt that this was the best approach because with using a tree structure I am not restricted to the integer number restriction and I can make it as large as possible.</p>
            <p>Some additional touches I am working on for this project is to utilize a desktop GUI to make it look more friendly and maybe a storage portion so the user can store the password with what website they are creating the password.</p>
            <br></br>
            <br></br>
            <a href="https://github.com/KKanda900/KarunKanda/blob/master/Personal-Projects/Personal_Projects/alfred.py"><h2>4. Alfred</h2></a>
            <img src={Alfred} className="center2"/>
            <br></br>
            <p>This is a voice assistant AI python application I am making called Alfred. What makes Alfred unique from other voice assistants is the way it can uniquely identify your voice </p>
            <p>This project is still in the works but is 75% way there right now. I am doing this project in Python because there are more reliable AI libraries in the Python library. The name inspiration "Alfred" came from the comic book Batman because how helpful he is to Batman so I was inspired to make an assistant that is helpful in the same way. Hence, the name "Alfred" seemed the best suited for this project.</p>
            </div>
        </Layout>
    )
}

export default ProjectsPage