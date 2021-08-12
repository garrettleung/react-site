import React from "react";
import { Link, withRouter } from "react-router-dom";
import linkedin from './pictures/linkedin.png'
import github from './pictures/github.svg'
import twitch from './pictures/twitch.png'
import instagram from './pictures/instagram.png'



function Navigation(props) {
    return (
        <div className = "navigation">
            <div class = "nav-bar">
                <div class = "nav-buttons">
                    <li
                        class={`nav-item  ${
                        props.location.pathname === "/" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/">
                            Home
                        </Link>
                    </li>

                    <li
                        class={`nav-item  ${
                        props.location.pathname === "/projects" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    
                    <li
                        class={`nav-item  ${
                        props.location.pathname === "/resume" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/resume">
                            Resume
                        </Link>
                    </li>

                    <li
                        class={`nav-item  ${
                        props.location.pathname === "/yelp" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/about">
                            Yelp
                        </Link>
                    </li>

                    <li
                        class={`nav-item  ${
                        props.location.pathname === "/about" ? "active" : ""
                        }`}
                    >
                        <Link class="nav-link" to="/about">

                        </Link>
                    </li>

                </div>
                <div class = "socials">
                    <a href="https://www.linkedin.com/in/garrett-leung/">
                        <img src={linkedin} alt="linkedin logo" id="linkedincontainer"></img>
                    </a>
                    <a href="https://github.com/garrettleung">
                        <img src={github} alt="github logo" id="githubcontainer"></img>
                    </a>
                    <a href="https://www.twitch.tv/ggsucka">
                        <img src={twitch} alt="twitch logo" id="twitchcontainer"></img>
                    </a>
                    <a href="https://www.instagram.com/garrett.leung/">
                        <img src={instagram} alt="instagram logo" id="instagramcontainer"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navigation);