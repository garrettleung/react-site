import React from "react";
import wechatapplogo from './pictures/wechatapplogo.png'
import rewiredlogo from './pictures/rewired.png'
import CSAlogo from './pictures/CSA.jpg'
import bobalogo from './pictures/boba.jpeg'
import wefitlogo from './pictures/WeFit.png'
import foodcyclelogo from './pictures/foodcycle.png'
import supremelogo from './pictures/supreme.jpg'
var tagDict = new Object();
var tagKeys = [];

class Taglist extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tags: props.tags,
      tagID : props.tagID
    }
  }


  
  render() {
    const tagList = this.state.tags;
    const ID = this.state.tagID;
    
    tagKeys.push(ID);
    tagDict[ID] = tagList;

    const designItems = []
    const codingItems = []
    const toolsItems = []
    const otherItems = []
    const design = ["Figma", "CSS", "HTML", "XML", "WXML", "WXSS"];
    const coding = ["Python", "Java", "JavaScript", "R"];
    const tools = ["React", "Google Cloud API", "ggplot", "rthingy", 'Node.JS', 'Discord.JS', 'Shiny', 'ECharts'];
    for (let i = 0; i < tagList.length; i++) {
      if  (design.includes(tagList[i])) {
        designItems.push(<div id="design-tag" key={i}>{tagList[i]}</div>)
      } else if (coding.includes(tagList[i])) {
        codingItems.push(<div id="coding-tag" key={i}>{tagList[i]}</div>)
      } else if (tools.includes(tagList[i])) {
        toolsItems.push(<div id="tools-tag" key={i}>{tagList[i]}</div>)
      } else {
        otherItems.push(<div id="other-tag" key={i}>{tagList[i]}</div>)
      }
    }

    return (
      <div id = {ID}>
          {designItems}
          {codingItems}
          {toolsItems}
          {otherItems}
      </div>
    )
  }
}

class Linklist extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      links: props.links,
      links_name : props.links_name
    }
  }


  
  render() {
    const link = this.state.links;
    const link_name = this.state.links_name;
    const linkList = [];

    for (let i = 0; i < link.length; i++) {
      linkList.push(<div class="link"><a href={link[i]}>{link_name[i]}</a></div>)
    }

    return (
      <div class="link-box">
          {linkList}
      </div>
    )
  }
}

class Project extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.title,
      tags: props.tags,
      description: props.description,
      description2: props.description2,
      pic: props.pic,
      date: props.date,
      links: props.links,
      links_name: props.links_name,
    }
  }

  render() {
    const title = this.state.title;
    const tags = this.state.tags;
    const description = this.state.description;
    const description2 = this.state.description2;
    const pic = this.state.pic;
    const date = this.state.date;
    const links = this.state.links;
    const links_name = this.state.links_name;

    return (
      <div className = "project-box">
        <div class = "project-pic-box" >
          
          <img  class = "project-pic"
              src={pic}
              alt=""
            />
        </div>
        <div class="upper-project">
          <div class = "project-title-links">
            <div class = "project-title">
              {title}
            </div>
            <Linklist
            links = {links}
            links_name = {links_name}
           />
          </div>
          
          <div class="taglist">
          <Taglist
              class = "taglist"
              tags = {tags}
              tagID = {title}
            />
          </div>
          
          <div class = "project-desc">
            {description}
          </div>
          <div class = "project-desc">
            {description2}
          </div>
        </div>
      </div>
    );
  }
}

function Projects() {
  let rewire_tags = ['Figma', 'HTML', 'CSS', "JavaScript", "React", "Google Cloud API"]
  let rewire_links = ['https://devpost.com/software/rewired?ref_content=user-portfolio&ref_feature=in_progress', "https://github.com/jacobcz64/rewired", 'https://www.figma.com/file/Ki0awTssYrrGAKT38JEKnd/rewired?node-id=0%3A1']
  let rewire_names = ['Devpost', "Github", 'Figma']
  let wechat_tags = ['Figma', 'WXML', 'WXSS', "JavaScript", 'ECharts']
  let wechat_links = ['https://github.com/jara1998/wechat-Mini-Program']
  let wechat_names = ['Github']
  let CSAbot_tags = ['JavaScript', 'Node.JS', 'Discord.JS']
  let CSAbot_links = ['https://github.com/garrettleung/CSABot_Public']
  let CSAbot_names = ['Github']
  let bobadem_tags = ['R', 'ggplot', 'Shiny']
  let bobadem_links = ['https://garrettleung.shinyapps.io/Comparison-of-the-Demographic-and-Boba-Stores-of-Seattle/','https://info201b-wi21.github.io/project-cindyqian/']
  let bobadem_names = ['Shiny App','Github Pages']
  let wefit_tags = ['Figma']
  let wefit_links = ['https://www.figma.com/files/project/31320265/Team-project?fuid=906685453536147212']
  let wefit_names = ['Figma']
  let foodcycle_tags = ['Figma']
  let foodcycle_links = ['https://www.figma.com/file/r2Mt7K1oRGKyTkc5BsXBjK/Food-Cycle?node-id=0%3A1']
  let foodcycle_names = ['Figma']
  let supreme_tags = ['Python']
  let supreme_links = ['https://github.com/garrettleung/supreme']
  let supreme_names = ['Github']
  let Null = []

  return (
    <div className="Projects">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="title">Projects</h1>
            <Project
              title = "Rewire"
              tags = {rewire_tags}
              description = "Slalom Build dub(HACK) for Climate Solutions Challenge winning project, Rewire, is the next way to tackle climate change and improve education by connecting corporations with lower income schools and organizations to provide them with up to date software and hardware. With Rewire we can prevent a lot of e-waste and empower those without access to technology by taking technology that one organization no longer needs and donating it to another organization that has that need."
              pic = {rewiredlogo}
              date = "2021"
              links = {rewire_links}
              links_name = {rewire_names}
            />
             <Project
              title = "WeChat Mini-program"
              tags = {wechat_tags}
              description = "Our Wechat Mini-program helps those in China who are diagnosed with HIV by providing learning and self care modules in order for them to cope and take care of their bodies. HIV is quite Stigmatized in China, so our app works to provide a sanctuary for those who have HIV and provide them everything they might need to address it. Along with the modules, we provide resources for people to seek help as well as reminders to take medicine, weekly mood check-ins, and weekly data on how often they are taking their medicine and their mood over time."
              pic = {wechatapplogo}
              date = "2021"
              links = {Null}
              links_name = {Null}
            />
            <Project
              title = "Demographic vs Boba"
              tags = {bobadem_tags}
              description = "Our problem domain focuses on the opening dates of boba tea shops in the Seattle area and changes in population demographics throughout the years. Although boba tea is known to be widely appreciated by those who identify as Asian, we believe that it is also important to assess a variety of demographics to fully understand the significance of this food in its community and on the identities of those within it. Considering this problem domain from another perspective, does the abundance or lack of boba tea shops over time affect who makes up the community? And how has the COVID-19 pandemic affected the opening and sustainability of stores? Our team looked to answering these questions by compiling and analyzing multiple databases"
              pic = {bobalogo}
              date = "2021"
              links = {bobadem_links}
              links_name = {bobadem_names}
            />
            <Project
              title = "CSAbot"
              tags = {CSAbot_tags}
              description = "CSAbot is a server management bot meant to help establish a safe space for members and providing members ways to find other people with similar interests in order to build smaller communities within our vast organization. By using discord api, we are able to allow members to interact with this bot to give them varying roles and means of contacting people with similar hobbies or grades."
              pic = {CSAlogo}
              date = "2021"
              links = {CSAbot_links}
              links_name = {CSAbot_names}
            />
            <Project
              title = "WeFit"
              tags = {wefit_tags}
              description = "In this project, we focused on the idea of user research in order to provide the best possible experience for our userbase. By interviewing other students and breaking down other fitness apps, we discovered a need for students to schedule and find other students to exercise with. Especially in quarantine, getting enough exercise is hard and finding others to exercise with is even harder. That's where WeFit is meant to help. With WeFit, groups of friends are able to find times, activites, and places that work best for everyone in order to participate in the exercise of their choice. For those who are looking to try something new or make new friends, we also provide an option to find others who have similar interests with you in order to workout. Working out has never been so easy and fun."
              pic = {wefitlogo}
              date = "2021"
              links = {wefit_links}
              links_name = {wefit_names}
            />
            <Project
              title = "Supreme"
              tags = {supreme_tags}
              description = "Supreme is a python bot which opens up supreme and attempts to buy a product by entering all the necessary purchase information needed."
              pic = {supremelogo}
              date = "2021"
              links = {supreme_links}
              links_name = {supreme_names}
            />
            <Project
              title = "Food Cycle"
              tags = {wefit_tags}
              description = "Food Cycle is a platform for restaurant owners to connect with nearby food banks or farms in order to reduce carbon emissions and provide organizations with cheaper food and supply. A majority of carbon emissions are caused by food waste as many restaurants have leftover food or supply that they can't use. In order to reduce these and provide them with tax benefits, we have farmers and food banks step in to take the supply and put it to use elsewhere. Each group has their own way of benefiting whether its less cost or more people fed. Food cycle makes saving the world as easy as passing the plate."
              pic = {foodcyclelogo}
              date = "2021"
              links = {foodcycle_links}
              links_name = {foodcycle_names}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;