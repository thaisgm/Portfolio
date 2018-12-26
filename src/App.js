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
      <body className = "app">
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
        </body>
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
  constructor(props){
  super(props);
    this.state = {
      projectsList: true,
      sfsfPage: false,
      gifterPage: false
    }
  }

  projectsList() {
    this.setState({
      projectsList: true,
      sfsfPage: false,
      gifterPage: false
    })

  }

  sfsf() {
    this.setState({
      projectsList: false,
      sfsfPage: true,
      gifterPage: false
    })
  }

  gifter(){
    this.setState({
      projectsList: false,
      sfsfPage: false,
      gifterPage: true
    })
  }

  render() {
    if (this.state.projectsList){
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
            <button className = "ProjectButton1" onMouseDown = {() => this.sfsf()}>LEARN MORE...</button>
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
            <button className = "ProjectButton2" onMouseDown = {() => this.gifter()}> LEARN MORE...</button>
        </div>
      )
    } else if (this.state.sfsfPage){
      return (
        <SFSFPage backToProjects = {() => this.projectsList()}/>
      )
    } else if (this.state.gifterPage){
      return (
        <GifterPage backToProjects = {() => this.projectsList()}/>
      )
    }
  }
}

class SFSFPage extends Component {

  render() {
    return (
      <div className = "SFSF">
        <h1>San Francisco School Finder</h1>
        <button className = "backBtn" onMouseDown = {() => this.props.backToProjects()}>Back to Projects List</button>
        <div className = "row1">
          <p>In the summer of 2018, I attended a hackathon with a group of 4 other
          developers. The mission of the hackathon was to come up with technical
          solutions to Bay Area issues. After listening to a member of SF's Board
          of Education speak on the problems immigrant and lower-income families
          had with the current school assignment form, we decided to build a
          website to alleviate these pains and minimize the education gap currently
          growing in the Bay Area.</p>
            <img src = {require('./photos/gitTeamMarie-RoseRamboz.jpg')} alt = "not loading" width = '750px'/>
            <span className = "caption">Photo of me and my Team at GIT Hackathon. Credits to Marie-Rose Ramboz.</span>
        </div>
        <div className = "row2">
          <p>Our idea was an accessible, quick process that busy parents could use
          to find the best school for their child.</p>
            <img src = {require('./photos/SFDiagram.png')} alt = "not loading" width = '750px'/>
            <span className = "caption">Our vision for SF School Finder.</span>
        </div>
        <div className = "row3">
          <p>We came up with a quiz for parents to take in order to rank the
          importance of certain criteria like distance, after school programs, etc.
          We didn't want the quiz to appear like yet another form, so we designed
          a fun UX with simple and short questions.</p>
            <img src = {require('./photos/QuizPage.png')} alt = "not loading" width = '750px'/>
            <span></span>
        </div>
        <div className = "row4">
          <p>So parents from any of SF's diverse communities were able to use our
          application, we implemented the Google Translate API. This allowed our
          website to be available in any language, an important issue that many
          parents faced when researching public schools for their children.</p>
              <img src = {require('./photos/HomePageSpanish.png')} alt = "not loading" width = '750px'/>
              <span></span>
        </div>
        <div className = "row5">
          <p>The algorithm we developed took the responses of the parents and
          multiplied them against the initial rankings we gave the schools. Then,
          we ordered a list based on which schools most resembled the preferences
          of the parents. We made sure to include key information about the school
          on the list page, so the parents could scroll through them as efficiently
          as possible.</p>
            <img src = {require('./photos/School Results.png')} alt = "not loading" width = '325px'/>
            <span></span>
        </div>
        <h2>Challenges we faced...</h2>
          <p className = "challenges">
          Most of the problems we ran into came from the lack of time we had
          to work on the project. Even pulling an all-nighter only gave us around
          30 hours to bring our idea to life. In order to meet this deadline, we
          decided to hard code a few factors to ensure our prototype was functional.
          For example, rather than implement the Google Maps Matrix API to allow
          users to type in any address and find the distance from the schools,
          we decided to hard code this information from a single address. </p>
          <p className = "challenges">
          We also decided to start off with a sample size of 25 schools, stored
          in MongoDB. Most of the information on the school was stored in various
          sites, hidden behind many links. Our plan was to later use web scraping
          to gather the information we needed on all the public schools in SF.
          I was in charge of managing the database, and decided on several factors
          to rate the schools. These were chosen based on the discussion we had
          with the SF school board member on what parents looked for in schools.</p>
      </div>
    )
  }

}

class GifterPage extends Component {

  render() {
    return (
      <div>
        <h1>Gifter</h1>
        <button onMouseDown = {() => this.props.backToProjects()}>Back to Projects List</button>
      </div>
    )
  }
}

export default App;
