import React from 'react'
import './sectionheader.css'


function SectionHeader(props) {
    return (
        <div className="sectoin-header">
            <h3>{props.children}</h3>
        </div>
    )
}

export default SectionHeader