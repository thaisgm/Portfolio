import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Thais Gonzalez
          </p>
          <div className="Menu">
            <List component="nav">
              <ListItem button>
                <ListItemText primary="About Me" />
              </ListItem>
                <ListItem button>
                  <ListItemText primary="My Projects" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Softball Schedule 2019" />
              </ListItem>
            </List>
      </div>

      </div>
    );
  }
}

export default App;
