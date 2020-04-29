import React from 'react'
import './Navigation.css'

const Navigation = function () {
    return (
        <div className="nav-container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand text-white" href="#">MovieItUp</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#">Shows<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Live TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Songs</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}


export default Navigation