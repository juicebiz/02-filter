import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

function ProjectList(props) {

    const arrProjects = props.projects
        
    const projectsList = arrProjects.map((project) =>
        <div key={shortid.generate()}><img className="gallery_img" src={project.img} alt="alt" data-filter={project.filter} /></div>
    )    

    return (
        <div className="gallery">
            {projectsList}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array
}

export default ProjectList