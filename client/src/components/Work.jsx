// show work details
import React from 'react';

const Work = (props) => {
    return (
        <div className="project" key={props.project.id}>
            <img className="project-img" sizes="250px"  src={props.project.id.img_url} alt="project goes here" />
            <div className="project-content">
                <span>{props.project.id.name}</span>
            </div>
        </div>
    );
};

export default Work;