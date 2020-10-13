import React, { Component } from 'react';
import '../App.css';

import Navbar from './Navbar';
import Work from './Work';

class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: null,
            dataLoaded: false,            
        }
    }

    componentDidMount() {
        fetch(`/api/portfolio/projects/`)
        .then(res => res.json())
        .then(res => {
            this.setState({
                projects: res.data.projects,
                dataLoaded: true,
            })
        })
        .catch(err => console.log(err));
    }

    // show all works
    renderWorks() {      
        if (this.state.dataLoaded) {
            return this.state.projects.map(project => {
                return <Work key={project.id} project={project} />
            })
        } else return <p>Loading...</p>;
    }

    render() {
        return(
            <div className="works" id="work">
                <Navbar />
                <p>"Here is my work"</p>
                <div className="projects">
                    {this.renderWorks()}
                </div>
            </div>
        )
    }
}
// const Works = props => {
//     return(
//         <div className="works" id="work">
//             <Navbar />
//             <p>"Here is my work"</p>
//         </div>
//     )
// };

export default Works;