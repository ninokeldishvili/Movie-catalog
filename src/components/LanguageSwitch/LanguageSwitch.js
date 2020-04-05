import React from 'react'
import "./LanguageSwitch.css"

class LanguageSwitch extends React.Component {

    render() {
        return (
            <div className="lang-switch">
                <label>
                    <span>GEO</span>/<span>ENG</span>
                </label>
            </div>
        )
    }
}

export default LanguageSwitch;