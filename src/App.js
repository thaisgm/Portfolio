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
              <p className = "title">Thais Gonzalez</p>
            </div>
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
