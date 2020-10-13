// show work details
import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            project: props.project.id || "",   
            contentClass: "project-content",         
        }
        this.handleActive = this.handleActive.bind(this);
        this.handleNotActive = this.handleNotActive.bind(this);
    }        

    handleActive = () => {
        this.setState({
            contentClass: "project-content-active",
        })
    }

    handleNotActive = () => {
        this.setState({
            contentClass: "project-content",
        })
    }

    render () {
        return(
            <div className="project" key={this.state.project.id} onMouseEnter={this.handleActive} onMouseLeave={this.handleNotActive} >
                <img className="project-img" sizes="250px"  src={this.state.project.img_url} alt="project goes here" />
                <div className={this.state.contentClass}>
                    <span>{this.state.project.name}</span>
                </div>
            </div>
        );        
    }
    
};

export default Work;