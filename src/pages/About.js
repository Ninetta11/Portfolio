import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="row">
            <div className="col-md-1"></div>
            <article id="about" className="col-md-6">
                <h3>About</h3>
                <img id="about-img" className="right" src="../assets/Images/IMG_0006.jpeg"
                    alt="Nina Welsh Profile Image" width="250" height="250"></img>
                <p>Full stack web developer with extensive program and project management experience in a
                diverse range of industries. A Certificate from Sydney University in full stack web
                technologies, including Javascript, CSS, HTML, Node.JS, Express, React, MySQL, NoSQL and
                others, as well as a Bachelor Degree in Development Studies from La Trobe University.
                Previous professional experience includes establishing businesses and programs from concept
                to execution, including ongoing management and development, across hospitality and retail as
                well as the social welfare sector. Thrives when able to apply advanced problem solving
                skills and work autonomously. Seeking to apply this broad range of skills and experience,
                together with a passion for societal change towards a more sustainable and equitable future,
                within the blockchain and distributed ledger technology space.</p>
                <a id="resume" className="btn btn-lg btn-outline-light"
                    href="https://drive.google.com/file/d/11XV-7_rSVe7VOs8f39qq41sop5dgZ-D_/view?usp=sharing">
                    <FontAwesomeIcon icon={faFile} /> Resume</a>
            </article>

            <form id="contact" className="col-md-4">
                <div className="col-md-12">
                    <h3>Contact</h3>
                    <div className="form-group">
                        <label htmlFor="inputName">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Full Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="example@email.com.au"
                            aria-describedby="emailHelp"></input>
                        <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage">Message:</label>
                        <textarea className="form-control" id="message" rows="3"
                            placeholder="Enter your message here"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary right" value="submit">Submit</button>
                </div>
            </form>
            <div className="col-md-1"></div>
        </div>
    )
}

export default About;