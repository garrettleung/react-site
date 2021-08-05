import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className = "navigation">
            <div class = "socials">

            </div>
            <div class = "nav-buttons">
                <li
                    class={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                    }`}
                >
                    <Link class="nav-link" to="/">
                        Home
                    <span class="sr-only">(current)</span>
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
        </div>
    );
}

export default withRouter(Navigation);