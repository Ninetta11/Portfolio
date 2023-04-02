import Bio from "../components/Bio";
import Profile from "../components/Profile";
import ProjectBanner from "../components/ProjectBanner";
import ScrollDownButton from '../components/ScrollDownButton';
import './style.css';


function Home() {
    return (
        <div className="parent-container">
            <div className="bio-container">
                <Bio />
                <div className="bottom-container" >
                    <ScrollDownButton
                        x={1000}
                        y={0}
                    />
                </div>
            </div>
            <div className="featured-projects">
                <ProjectBanner />
            </div>
            <br></br>
            <Profile />
        </div>
    )
}

export default Home;