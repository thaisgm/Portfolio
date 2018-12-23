import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './App.css';

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

  softballSchedule(){
    this.setState({
      aboutMePage: false,
      projectsPage: false,
      schedulePage: true
    })
  };

  render() {
    if (this.state.aboutMePage){
      return (
        <div>
            <div className="Menu">
              <List component="nav">
                <ListItem button onMouseDown = {() => this.back()}>
                  <ListItemText primary="About Me" />
                </ListItem>
                  <ListItem button onMouseDown = {() => this.myProjects()}>
                    <ListItemText primary="My Projects" />
                  </ListItem>
              </List>
              <Divider />
              <List component="nav">
                <ListItem button onMouseDown = {() => this.softballSchedule()}>
                  <ListItemText primary="Softball Schedule 2019" />
                </ListItem>
              </List>
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
            <p className = "body1">After my first structured programming class, I
            was hooked. But after that class, essentially all I was capable of
            doing was coding board games in the console of XCode. I wanted to
            gain actionable and applicable coding knowledge, and applied for a
            Software Engineering Fellowship at Horizons School of Technology in
            San Francisco. I was accepted and spent 12 weeks in SF studying
            mobile and web technologies and working on many technical projects.
            I found that I really enjoyed brainstorming with teams and creating a
            solution with the customer's needs in mind, so when I returned to
            Michigan, I decided to pursue my MicroMasters in User Experience,
            Research, and Design as well as a minor in Computer Science. I created
            this website to show the projects I've worked on and the process and
            story behind each of them. Thanks for stopping by, and Go Blue!</p>
        </div>
      );
    } else if (this.state.projectsPage){
      return(
        <ProjectsPage aboutMePage = {() => this.back()}
        myProjectsPage = {() => this.myProjects()}
        softballSchedulePage = {() => this.softballSchedule()}/>
      )
    } else if (this.state.schedulePage){
      return (
        <SchedulePage aboutMePage = {() => this.back()}
        myProjectsPage = {() => this.myProjects()}
        softballSchedulePage = {() => this.softballSchedule()}/>
      )
    }
  }
}

class ProjectsPage extends Component {

  render() {
    return (
      <div>
        <div className="Menu">
          <List component="nav">
            <ListItem button onMouseDown = {() => this.props.aboutMePage()}>
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItem button onMouseDown = {() => this.props.myProjectsPage()}>
              <ListItemText primary="My Projects" />
            </ListItem>
          </List>
        <Divider />
          <List component="nav">
            <ListItem button onMouseDown = {() => this.props.softballSchedulePage()}>
              <ListItemText primary="Softball Schedule 2019" />
            </ListItem>
          </List>
        </div>
        <p className = "title"> My List of Projects:</p>
      </div>
    );
  }
}

class SchedulePage extends Component {

  render() {
    return (
      <div>
        <div className="Menu">
          <List component="nav">
            <ListItem button onMouseDown = {() => this.props.aboutMePage()}>
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItem button onMouseDown = {() => this.props.myProjectsPage()}>
              <ListItemText primary="My Projects" />
            </ListItem>
          </List>
        <Divider />
          <List component="nav">
            <ListItem button onMouseDown = {() => this.props.softballSchedulePage()}>
              <ListItemText primary="Softball Schedule 2019" />
            </ListItem>
          </List>
        </div>
        <p className = "title"> Michigan Softball 2019 Schedule:</p>
      </div>
    );
  }
}

export default App;
