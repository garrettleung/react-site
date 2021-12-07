import React from "react";
import me from './pictures/me.png'

function Home() {
  return (
    <div className="home">
      <img
              id="me"
              src={me}
              alt=""
            />
            <div class = "hi-im-garrett">
              Hi, I'm Garrett Leung!
            </div>
    <script src="./scroll.js"></script>
      <div class="container">
    
        <div class="">
          <div class="col-lg-7">
            <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
          </div>
          <div class = "white-background">
            <div class = "about-me">
              <div class = "about-me-title">
                Garrett Leung
              </div>
            It's nice to meet you! I am a Electrical and Computer Engineer at the University of Washington. I am passionate about creating products that bring people together.
            <br></br>
            <br></br>
            While electrical engineering is my focus at school, I find a lot of joy in prototyping and designing accessible products to tackle modern issues. 
            <br></br>
            <br></br>
            Lately I have been focusing on front-end development for my projects such as our Dubhacks award winning product, Rewire, which is used to connect corporations with lower income schools in order to supply them up to date software and hardware. I've been working a lot with Figma, JavaScript, and React in order to make my projects clean and intuitive.
            <br></br>
            <br></br>
            On my free time, I like to stream video games with my friends on Twich,
             coach my highschool frisbee team, play on UW's club Frisbee team, and basically play any other sport (besides soccer because my body can says no to soccer). I am also a major foody so check out my yelp for recommendations. I will try my best to push out the dozens of reviews in my drafts. 
            <br></br>
            <br></br>
            I am open to internships so feel free to take a look at my projects, check out out my resume, and contact me above for any opportunities.
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default Home;