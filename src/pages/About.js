
function About() {
    return (
        <div class="row">
            <div class="col-md-1"></div>
            <article id="about" class="col-md-6">
                <h3>About</h3>
                <img id="about-img" class="right" src="../assets/Images/IMG_0006.jpeg"
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
                <a id="resume" class="btn btn-lg btn-outline-light"
                    href="https://drive.google.com/file/d/1NZC2dtxOwhOCGFe1Hrwy4AXa2RNNmj0v/view?usp=sharing"><i
                        class="far fa-file"></i>
                Resume</a>
            </article>

            <form id="contact" class="col-md-4">
                <div class="col-md-12">
                    <h3>Contact</h3>
                    <div class="form-group">
                        <label for="inputName">Name:</label>
                        <input type="text" class="form-control" id="name" placeholder="Full Name"></input>
                    </div>
                    <div class="form-group">
                        <label for="inputEmail">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="example@email.com.au"
                            aria-describedby="emailHelp"></input>
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="inputMessage">Message:</label>
                        <textarea class="form-control" id="message" rows="3"
                            placeholder="Enter your message here"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary right" value="submit">Submit</button>
                </div>
            </form>
            <div class="col-md-1"></div>
        </div>
    )
}

export default About;