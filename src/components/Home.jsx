import React from "react";
import me from './pictures/me.jpeg'

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="">
          <div class="col-lg-7">
            <div class = "about-me">
              Hi, I'm Garrett Leung!
            </div>
            <img
              id="me"
              src={me}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;