function ProjectFeatured({
    imageSource,
    projectName,
    projectDescription,
    projectLanguages,
    deployedProjectLink,
    codeLink,
}) {
    return (
        <div className="col mb-4">
            <div className="card h-100">
                <img src={process.env.PUBLIC_URL + imageSource} className="card-img-top"
                    alt={projectName}></img>
                <div className="card-body">
                    <h4 className="card-title">{projectName}</h4>
                    <p className="card-text">{projectDescription}</p>
                    <p><strong>{projectLanguages}</strong></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        <a href={deployedProjectLink}>View App </a></small><span> | </span>
                    <small className="text-muted">
                        <a href={codeLink}> View Code</a></small>
                </div>
            </div>
        </div>
    )
};

export default ProjectFeatured;