import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
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
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Me" />
              </ListItem>
                <ListItem button>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="My Projects" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
            </List>
      </div>

      </div>
    );
  }
}

export default App;
