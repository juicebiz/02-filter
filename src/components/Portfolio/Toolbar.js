import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {

    const filters = props.filters
    const selected = props.selected
    const selectFunction = props.onSelectFilter    

    const filtersList = filters.map(function(filter,index){
        return <li key={index} className={`filter ${(filter === selected) ? 'active' : ''}`} data-filter={filter} onClick={selectFunction}>{filter}</li>
    }) 

    return (
        <div>
            <ul className="filterList">{filtersList}</ul>
        </div>
    )
}

Toolbar.propTypes = {

}

export default Toolbar
