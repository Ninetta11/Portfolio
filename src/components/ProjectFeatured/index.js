function ProjectFeatured({
    imageSource,
    projectName,
    projectDescription,
    projectLanguages,
    deployedProjectLink,
    codeLink,
}) {
    return (
        <div class="col mb-4">
            <div class="card h-100">
                <img src={imageSource} class="card-img-top"
                    alt={projectName}></img>
                <div class="card-body">
                    <h4 class="card-title">{projectName}</h4>
                    <p class="card-text">{projectDescription}</p>
                    <p><strong>{projectLanguages}</strong></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        <a href={deployedProjectLink}>View App </a></small><span> | </span>
                    <small class="text-muted">
                        <a href={codeLink}> View Code</a></small>
                </div>
            </div>
        </div>
    )
};

export default ProjectFeatured;