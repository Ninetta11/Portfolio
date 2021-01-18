import { Link } from "react-router-dom";


// function fadeIn() {
//     onMouseEnter={() => fadeIn()}
// }



function ProjectThumbnail({
    imageSource,
    projectName,
    setFeatureProject
}) {
    return (
        <div className="col mb-4">
            <Link class="card bg-dark" onClick={() => setFeatureProject(projectName)} to="/portfolio">
                <img src={imageSource} className="card-img-top"
                    alt={projectName}></img>
            </Link>
        </div>
    )
};

export default ProjectThumbnail;