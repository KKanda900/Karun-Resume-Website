import React from 'react'
import Layout from '../components/layout'
import ResearchPaperFrontPage from '../images/frontpg.jpg'
import ResearchPaperDownload from '../research-paper/researchpaper.pdf'
import Pollution from '../images/uw_pollution.png'
import Alfred from '../images/Alfred.jpg'
import PassApp from '../images/New_PassApp.png'
import Charlie from '../images/Charlie.jpg'
import Model_Maker from '../images/img_model.png'
import Shell from '../images/shell.png'

const ProjectsPage = () => {
    return (
        <Layout>
            <div className="typewriter">
                <p align="center">Over time of learning Computer Science at Rutgers University I have worked on several projects utilizing the techniques I learned from in lecture or out of lecture. Also, some research I have done in my undergrad. Here are some of those projects I have worked on. You can click on the titles to view more about these projects/view the github repositories to see the source code for these projects.</p>
                <a href="https://www.comsoc.org/membership/ieee-comsoc-student-competition/winners"><h2>1. LICOT: Litter-Information-Centric Ocean of Things (Research Paper/GUI)</h2></a>
                <img src={ResearchPaperFrontPage} className="center1"/>
                <br></br>
                <ul>
                    <li>This was a paper I coauthored with my team at Cyber-Physical Systems Laboratory. This research project was based on the the negative effects of marine pollution that will recieve and send information to help locate the pollution and clean it up based on a IoT setup.</li>
                    <li>The research paper highlighted how robotics and underwater acoustics can work together to assist in managing Ocean waste and how people can be more efficient in cleaning pollution faster so we can eventually make the Earth cleaner. This paper was also used in the IEEE ComSoc 2019 competition where the team and I earned first place.</li>
                    <li>The graphical user interface version enables an IoT setup between multiple nodes (multiple Raspberry Pis, Buoys, etc) that can connect together to communicate information to each other in real-time</li>
                </ul>
                <a href={ResearchPaperDownload} download> 
                    <button type="button" className="btn">Download the Research Paper</button> 
                </a>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/UW-Pollution-Detector"><h2>2. U.W Pollution Detector</h2></a>
                <img src={Pollution} className="center1"/>
                <br></br>
                <ul>
                    <li>A custom object detector that has the capabilities to detect any type of pollution in any body of water and can work on any machine. Designed for research purposes.</li>
                    <li>Users have the ability to take a video along side taking photos of any mysterious object they want to classify.</li>
                    <li>Built using Python, TensorFlow, Bash, OpenCV and Python’s GUI library.</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/Charlie-AI"><h2>3. Charlie AI</h2></a>
                <img src={Charlie} className="center2"/>
                <br></br>
                <ul>
                    <li>Let's face it, this pandemic has been a real struggle for everyone, especially those who miss interacting with others on a daily basis. In fact, the CDC asserts that because of social distancing, people are more likely to feel isolated, and in turn, cause stress and anxiety. We needed to find a solution that allows people to manage these symptoms and keep people happy during this lonesome time.</li>
                    <li>Built using Python, PyGame, NLTK (Python Natural Language Toolkit) and Pythons Speech Recognition API.</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/Alfred"><h2>4. Alfred</h2></a>
                <img src={Alfred} className="center2"/>
                <br></br>
                <ul>
                    <li>This is a voice assistant AI python application I am making called Alfred. I am calling it Alfred after the character in Batman because how Alfred in the show always helped Batman no matter what situation Batman was in or trouble Batman was in. What makes Alfred unique from other voice assistants is the way it can uniquely identify your voice and is able to handle tasks that regular voice assistants can not handle.</li>
                    <li>To make this project I used Google and Python's speech to text API to transcribe what the user is saying to text. I used artifical Intelligence to develop replies for the bot to say back to the user. Then I also used Natural Language processing to enable the bot to understand what the user is saying clearly if there are situation the user takes a lot of pauses, or happens to stutter when speaking.</li>
                    <li>I made this project in Python for the backend and ElectronJS as the front-end portion. Utilizing Python/Google Speech to Text API, Python's Natural Language Toolkit and front end libraries to clean up the look and scripts for the bot.</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/PassApp"><h2>5. PassApp</h2></a>
                <img src={PassApp} className="center1"/>
                <br></br>
                <ul>
                    <li>This was a password generator program I wrote to make a random, strong, secure password that can be length 1 - 1 billion characters long.</li>
                    <li>This project was fully done in JavaScript/ElectronJS and the unique factor of this project was that it did not use any random number library but instead it utilizes the tree data structure. I felt that this was the best approach because with using a tree structure I am not restricted to the integer number restriction and I can make it as large as possible.</li>
                    <li>Some additional touches I am working on for this project is to utilize a desktop GUI to make it look more friendly and maybe a storage portion so the user can store the password with what website they are creating the password.</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/Covid-Insight"><h2>6. Covid Insight</h2></a>
                <ul>
                    <li>My main inspiration for this project was so people can stay up to date with the rise of COVID-19 in America through text messages instead of an application that would take up space in their phone.</li>
                    <li>I built this project using Python, python libraries and Machine Learning (specifically Linear Regression). Python was used to built the application and to write the scripts. Some python specific libraries I used were: (1) numpy, (2) matplotlib, (3) pandas, (4) sklearn, (5) Flask, (6) Twilio</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/Model-Maker"><h2>7. Custom Model Maker</h2></a>
                <img src={Model_Maker} className="center1"/>
                <br></br>
                <ul>
                    <li>With many model makers out for public use, there wasn't any that allowed for the user to make custom models easily. The main intentions of this model maker was to allow users to create custom image classifier models to use for their own use. With not many options for custom image classifiers I though the model maker would be a great idea to have for people that want their own custom models. The model maker application gives the users all the necessary inputs to create the model which once they are done entering those inputs can watch in the terminal to see the progress of creating the model. If the model is to their standards they can save the model or go back into it and add more photos, change inputs, etc.</li>
                    <li>This project was done in Python, PyQt5, and many Machine Learning libraries.</li>
                </ul>
                <br></br>
                <br></br>
                <a href="https://github.com/KKanda900/Yaksha"><h2>8. Yaksha</h2></a>
                <img src={Shell} className="center2"/>
                <br></br>
                <ul>
                    <li>A shell that has the capabilities of any Linux shell and allows the user to customize their terminal to make it their own. Customization includes your own colors, commands, and other personalizations that can make it the user's own terminal unlike terminals already out.</li>
                    <li>This project was completely done in Rust.</li>
                </ul>
                <h2>Projects still in Development</h2>
                <ul>
                    <li><a href="https://github.com/KKanda900/Guub-Adventure">Guub Adventure</a></li>
                    <ul>
                        <li>An adventure game based on an fictitious character named Guub around the world of Nether.</li>
                        <li>Made in C.</li>
                    </ul>
                </ul>
            </div>
        </Layout>
    )
}

export default ProjectsPage