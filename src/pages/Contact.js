import React from 'react'
import Layout from '../components/Layout'

const ContactPage = () => {
    return (
        <Layout>
                        <h2 className="random">Let's do something amazing!</h2>
                        <div className="typewriter">
                            <p>
                                Feel free to contact me via
                                    <ul>
                                    <a className="check2" href="https://www.linkedin.com/in/karunkanda"><li>Linkedin</li></a>
                                    <a className="check2" href="https://www.polywork.com/kkanda900"><li>Polywork</li></a>
                                    <li>Email at kkanda900@gmail.com</li>
                                </ul>
                            </p>
                        </div>
                        <h2>Want to get in touch?</h2>
                        <h2 className="head2">Send me an email below!</h2>
                        <div className="typewriter">
                            <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                                <p>Name:</p><input type="text" name="name" /> <br></br><br></br>
                                <p>E-mail:</p><input type="text" name="mail" /> <br></br><br></br>
                                <p>Message:</p><input type="text" name="comment" size="50" /> <br></br><br></br>
                                <button type="submit" value="Send">Submit</button>
                            </form>
                        </div>
                    
                    

        </Layout>
    )
}

export default ContactPage