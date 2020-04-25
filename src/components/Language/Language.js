import React from 'react'
import './Language.css'

const Language = function(props){
    return (
        <div className="lang-switch">
            <span>{props.lang} &nbsp;</span>
        </div>
    )
}

export default Language