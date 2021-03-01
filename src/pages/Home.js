import Bio from "../components/Bio";
import ProjectBanner from "../components/ProjectBanner";
import ScrollDownButton from '../components/ScrollDownButton';
import './style.css';


function Home() {
    return (
        <div className="parent-container">
            <div className="bio-container">
                <Bio />
                <div className="bottom-container" >
                    <ScrollDownButton />
                </div>
            </div>
            <div className="featured-projects">
                <ProjectBanner />
            </div>
        </div>
    )
}

export default Home;