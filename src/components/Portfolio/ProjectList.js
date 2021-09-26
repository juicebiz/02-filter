import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {

    const arrProjects = props.projects
        
    const projectsList = arrProjects.map((project,index) =>
        <div><img key={index} className="gallery_img" src={project.img} alt="alt" dataFilter={project.filter} /></div>
    )    

    return (
        <div className="gallery">
            {projectsList}
        </div>
    )
}

ProjectList.propTypes = {

}

export default ProjectList