import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Button, Modal } from 'antd';
import ProjectThumbnail from '../ProjectThumbnail';
import projects from '../../data/projects.json';
import './style.css';


class ProjectBanner extends Component {

    state = {
        projects,
        isModalOpen: false,
        modalTitle: null,
        modalDescription: null,
        modalHref: null,
        modalSubtitle: null,
        modalImage: null,
        modalDates: null,
        media: null,
        mediaText: null
    }

    showModal = (title, description, link, languages, image, dates, media, mediaText) => {
        this.setState({ ...this.state, isModalOpen: true, modalTitle: title, modalDescription: description, modalHref: link, modalSubtitle: languages, modalImage: image, modalDates: dates, media: media, mediaText: mediaText })
    };

    hideModal = () => {
        this.setState({ ...this.state, isModalOpen: false })
    };

    render() {
        return (
            <div>
                <Modal
                    title={this.state.modalTitle}
                    visible={this.state.isModalOpen}
                    onCancel={this.hideModal}
                    footer={[<Button key="cancel" href={this.state.modalHref}>Visit Website</Button>]} >
                    {this.state.media ?
                        <div className="media">
                            <ReactPlayer
                                url={this.state.media}
                                alt={this.state.mediaText}
                            />
                        </div>
                        :
                        <img className="modal-image" src={process.env.PUBLIC_URL + this.state.modalImage} alt={this.state.modalTitle} width="200"
                            height="200"></img>
                    }
                    <p className="modal-subtitle">{this.state.modalSubtitle}</p>
                    <p>{this.state.modalDescription}</p>
                    <p className="modal-subtitle">{this.state.modalDates}</p>
                </Modal>
                <article id="portfolio">
                    <div className="row">
                        <h1>As a developer...</h1>
                    </div>
                    <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-lg-4">
                        {projects.workProjects.map(project =>
                            <ProjectThumbnail
                                key={project.name}
                                projectName={project.name}
                                projectLanguages={project.languages}
                                projectDescription={project.description}
                                projectLink={project.projectLink}
                                imageSource={project.imageSource}
                                projectDates={project.dates}
                                projectMedia={project.media}
                                projectMediaAlt={project.mediaAlt}
                                showModal={this.showModal}
                            />)}
                    </div>
                </article >
                <br></br>
                <article id="portfolio">
                    <div className="row">
                        <h1>As an individual...</h1>
                    </div>
                    <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-lg-4">
                        {projects.personalProjects.map(project =>
                            <ProjectThumbnail
                                projectName={project.name}
                                projectLanguages={project.languages}
                                projectDescription={project.description}
                                projectLink={project.projectLink}
                                imageSource={project.imageSource}
                                projectDates={project.dates}
                                projectMedia={project.media}
                                projectMediaAlt={project.mediaAlt}
                                showModal={this.showModal}
                            />)}
                    </div>
                </article >
            </div >
        )
    }
};

export default ProjectBanner;