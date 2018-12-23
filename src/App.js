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
        <div className="App">
            <p>
              Thais Gonzalez
            </p>
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
        </div>
      );
    } else if (this.state.projectsPage){
      return(
        <ProjectsPage aboutMePage = {() => this.back()}/>
      )
    } else if (this.state.schedulePage){
      return (
        <SchedulePage aboutMePage = {() => this.back()}/>
      )
    }
  }
}

class ProjectsPage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p> My List of Projects:</p>
        <p className = "back" onMouseDown = {() => this.props.aboutMePage()}>Back to Home</p>
      </div>
    );
  }
}

class SchedulePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <p> Michigan Softball 2019 Schedule:</p>
        <p className = "back" onMouseDown = {() => this.props.aboutMePage()}>Back to Home</p>
      </div>
    );
  }
}

export default App;
