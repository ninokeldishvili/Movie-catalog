import React from 'react'

const Poster = function (props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Poster;