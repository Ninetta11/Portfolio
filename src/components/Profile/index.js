import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';


function Profile() {
    return (
        <article id="about" className="col-md-12">
            <h3>About</h3>
            <img id="about-img" className="right" src={process.env.PUBLIC_URL + '/assets/images/IMG_0006.jpeg'}
                alt="Nina Welsh Profile" width="250" height="250"></img>
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
                href="https://docs.google.com/document/d/1DGsjAUQYy1cVfIxZCVnlIrUWHBtGUAK8Z5Vd8EcyPvQ/edit?usp=sharing">
                <FontAwesomeIcon icon={faFile} /> Resume</a>
        </article>
    )
}

export default Profile;