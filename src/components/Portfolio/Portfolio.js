import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList'

function Portfolio(props) {

    const projects = props.projects
        
    const [selectedFilter, setSelectedFilter] = useState('All')

    const arrProjects = projects.filter(function (project) {
            if(selectedFilter === 'All') {
                return project;
            } else {
                return project.category === selectedFilter;
            }
        });   
        
    function selectFilter(event) {
        document.querySelector('.active').classList.remove('active')
        event.currentTarget.classList.add('active')
        setSelectedFilter(event.currentTarget.textContent)     
    }  

    return (
        <div className="container">
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={selectFilter}/>  
            <div className="clearfix"></div>
            <ProjectList projects={arrProjects} />
        </div>
    )
}

Portfolio.propTypes = {

}

export default Portfolio

