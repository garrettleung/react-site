import React from "react";
import me from './pictures/me.jpeg'

function Home() {
  return (
    <div className="home">
    <script src="./scroll.js"></script>
      <div class="container">
        <div class="">
          <div class="col-lg-7">
            <div class = "hi-im-garrett">
              Hi, I'm Garrett Leung!
            </div>
            <img
              id="me"
              src={me}
              alt=""
            />
            <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
          </div>
          <div class = "white-background">
            <div class = "about-me">
            I'm a student at the University of Washington majoring in electrical and computer engineering where I can collaborate and innovate to tackle society's problems. 
            <br></br>
            <br></br>
            On my free time, I like to stream video games on twitch, play ultimate frisbee, volleyball, basketball, badminton, and basically any other sport. I am also starting to work towards Yelp Elite so feel free to join me on my journey to experience food around Seattle by checking out my reviews and sending me food recommendations. 
            <br></br>
            <br></br>
            I am open to internships so take a look at my projects, check out out my resume, and contact me above for any opportunities.
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Home;