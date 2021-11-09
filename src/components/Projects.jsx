import React from "react";
import wechatapplogo from './pictures/wechatapplogo.png'
import rewiredlogo from './pictures/rewired.png'
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
    const design = ["Figma", "CSS", "HTML", "XML", "WXML"];
    const coding = ["Python", "Java", "JavaScript", "R"];
    const tools = ["React", "Google Cloud API", "ggplot", "rthingy", 'Node.JS', 'Discord API'];
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
    const pic = this.state.pic;
    const date = this.state.date;
    const links = this.state.links;
    const links_name = this.state.links_name;

    return (
      <div className = "project-box">
        <div class = "project-pic-box">
          
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
        </div>
      </div>
    );
  }
}

function Projects() {
  let CSAsite_tags = ['Figma', 'HTML', 'CSS', 'JavaScript', 'React']
  let CSAsite_links = []
  let CSAsite_names = []
  let rewire_tags = ['Figma', 'HTML', 'CSS', "JavaScript", "React", "Google Cloud API"]
  let rewire_links = ['https://devpost.com/software/rewired?ref_content=user-portfolio&ref_feature=in_progress', "a"]
  let rewire_names = ['Devpost', "test"]
  let wechat_tags = ['Figma', 'WXML', 'CSS', "JavaScript", 'jsDataVis']
  let CSAbot_tags = ['Python', 'JavaScript', 'Node.JS', 'Discord API']
  let CSAbot_links = []
  let CSAbot_names = []
  let bobadem_tags = ['R', 'ggplot', 'Rthingy']
  let bobadem_links = ['placeholder']
  let bobadem_names = ['placeholder']
  let wefit_tags = ['Figma']
  let wefit_links = []
  let wefit_names = []
  let Null = []

  return (
    <div className="Projects">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="title">Projects</h1>
            <Project
              title = "CSAUW.com"
              tags = {CSAsite_tags}
              description = "this is a rewire app"
              pic = {rewiredlogo}
              date = "2021"
              links = {CSAsite_links}
              links_name = {CSAsite_names}
            />
            <Project
              title = "Rewire"
              tags = {rewire_tags}
              description = "this is a rewire app"
              pic = {rewiredlogo}
              date = "2021"
              links = {rewire_links}
              links_name = {rewire_names}
            />
             <Project
              title = "WeChat Mini-program"
              tags = {wechat_tags}
              description = "this is a we chat app"
              pic = {wechatapplogo}
              date = "2021"
              links = {Null}
              links_name = {Null}
            />
            <Project
              title = "Demographic vs Boba"
              tags = {bobadem_tags}
              description = "this is a we chat app"
              pic = {wechatapplogo}
              date = "2021"
              links = {bobadem_links}
              links_name = {bobadem_names}
            />
            <Project
              title = "CSAbot"
              tags = {CSAbot_tags}
              description = "this is a we chat app"
              pic = {wechatapplogo}
              date = "2021"
              links = {CSAbot_links}
              links_name = {CSAbot_names}
            />
            <Project
              title = "WeFit"
              tags = {wefit_tags}
              description = "this is a we chat app"
              pic = {wechatapplogo}
              date = "2021"
              links = {wefit_links}
              links_name = {wefit_names}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;