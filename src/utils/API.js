import projects from '../data/projects.json';

export default {
    setFeatureProject: (name) => {
        projects.map((project) => {
            if (project.name === name) {
                project.featured = true;
                console.log(project);
                this.setState({ projects });
            }
            else {
                project.featured = false;
                console.log(project);
                this.setState({ projects });
            }
        })
    }
}