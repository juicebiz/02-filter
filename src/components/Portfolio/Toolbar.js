import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'

function Toolbar(props) {

    const filters = props.filters
    const selected = props.selected
    const selectFunction = props.onSelectFilter    

    const filtersList = filters.map(function(filter){
        return <li key={shortid.generate()} className={`filter ${(filter === selected) ? 'active' : ''}`} data-filter={filter} onClick={selectFunction}>{filter}</li>
    }) 

    return (
        <div>
            <ul className="filterList">{filtersList}</ul>
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string
}

export default Toolbar
