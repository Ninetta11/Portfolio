import Profile from '../components/Profile';
import ContactForm from '../components/ContactForm';
import './style.css';


function About() {
    return (
        <div className="row">
            <div className="col-md-1"></div>

            <Profile />

            <ContactForm />

            <div className="col-md-1"></div>
        </div>
    )
}

export default About;