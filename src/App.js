import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import { Slide } from 'react-slideshow-image';
import './App.css';

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      aboutMePage: true,
      projectsPage: false,
      schedulePage: false
    }
  }

  back(){
    this.setState({
      aboutMePage: true,
      projectsPage: false,
      schedulePage: false
    })
  }

  myProjects(){
    this.setState({
      aboutMePage: false,
      projectsPage: true,
      schedulePage: false
    })
  };

  render() {
    if (this.state.aboutMePage){
      return (
        <div className = "MainPage">
          <AppBar className = "menuBar" position="sticky" color= '#cce6ff'>
            <Toolbar variant="dense">
              <MenuItem className= "menuButton" onMouseDown = {() => this.back()}>
                ABOUT ME
              </MenuItem>
              <MenuItem className= "menuButton" onMouseDown = {() => this.myProjects()}>
                MY PROJECTS
              </MenuItem>
              <MenuItem className= "menuButton">
                <a href = 'https://mgoblue.com/schedule.aspx?schedule=1515'>MICHIGAN SOFTBALL SCHEDULE</a>
              </MenuItem>
            </Toolbar>
          </AppBar>
          <div className = "Slideshow">
              <Slide {...properties}>
              <div className="each-slide">
                 <div className="image-container">
                   <img src={require('./photos/divingphoto.jpg')} alt = "not loading" />
                 </div>
               </div>
               <div className="each-slide">
                 <div className="image-container">
                   <img src={require('./photos/hittingVsUF.jpg')} alt = "not loading"/>
                 </div>
               </div>
               <div className="each-slide">
                 <div className="image-container">
                   <img src={require('./photos/teamHighFive.jpg')} alt = "not loading"/>
                 </div>
               </div>
              </Slide>
          </div>
            <p className = "body"> My name is Thais Gonzalez.
            I grew up in South Florida, playing sports for most of my life and
            graduated from St. Thomas Aquinas High School as a first-team all
            state player with nearly 25 AP college credits. I committed to play softball at
            the University of Michigan, and was accepted into the Ross School of
            Business. After my freshman year, I found that I couldn't see myself
            pursuing a traditional business career. I decided to explore a field
            that I had always love, but never dove into: technology.
            </p>
            <p className = "body1">After my first structured programming class,
            essentially all I was capable of doing was coding board games in the
            console of XCode. To gain actionable and applicable coding knowledge,
            I applied for a Software Engineering Fellowship in San Francisco.
            After I was accepted, I spent 12 weeks in SF studying mobile and web
            technologies and working on exciting technical projects. When I
            returned to Michigan, I decided to pursue my MicroMasters in User
            Experience, Research, and Design as well as a minor in Computer Science.
            I created this website to show the projects I've worked on and the
            story behind each of them. Thanks for stopping by, and Go Blue!</p>
          </div>
      );
    } else if (this.state.projectsPage){
      return(
        <ProjectsPage aboutMePage = {() => this.back()}
        myProjectsPage = {() => this.myProjects()}
        softballSchedulePage = {() => this.softballSchedule()}/>
      )
    }
  }
}

class ProjectsPage extends Component {

  render() {
    return (
      <div className = "ProjectPage">
      <AppBar className = "menuBar" position="sticky" color= '#cce6ff'>
        <Toolbar variant="dense">
          <MenuItem className= "menuButton" onMouseDown = {() => this.props.aboutMePage()}>
            ABOUT ME
          </MenuItem>
          <MenuItem className= "menuButton" onMouseDown = {() => this.props.myProjectsPage()}>
            MY PROJECTS
          </MenuItem>
          <MenuItem className= "menuButton">
          <a href = 'https://mgoblue.com/schedule.aspx?schedule=1515'>MICHIGAN SOFTBALL SCHEDULE</a>
          </MenuItem>
        </Toolbar>
      </AppBar>
        <img className = "ProjectPic1" src = {require('./photos/HomePage.png')} alt = "not loading"/>
          <h2 className =  "ProjectHeader1">San Francisco School Finder</h2>
          <p className = "Description1">The goal of this project was to tackle an
          issue plaguing the San Francisco Public School system: filling out the
          school assignment form was a tedious and time-consuming tasks that wasn't
          accessible for all parents. As a result, their child was often placed
          in the school of their district. This led to a continuous cycles of minority
          students from lower-income neighborhoods being placed in lower-performing
          schools without the chance of attending another. We aimed to solve this issue by
          creating a website that allowed parents to easily find the right school
          for their child by rating a few preferences.</p>
          <button className = "ProjectButton1"> Click here to learn more</button>
        <img className = "ProjectPic2b" src = {require('./photos/MainScreenDemo.png')} alt = "not loading"/>
        <img className = "ProjectPic2" src = {require('./photos/GifterDemo.png')} alt = "not loading"/>
          <h2 className = "ProjectHeader2">Gifter</h2>
          <p className = "Description2">Gifter is a fun, mobile application I worked
          on with a group during a short hackathon. Our goal was to come up with
          something light-hearted and creative. We decided to build an app that
          allowed you to send funny, random messages to your friends. Our vision
          was an expansion of the popularity of emoticons by sending something more
          significant: a uniquely curated, one-of-a-kind content text message.
          We used React Native and Twillio to make this happen.</p>
          <button className = "ProjectButton2"> Click here to learn more</button>
      </div>
    );
  }
}

export default App;
