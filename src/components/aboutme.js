import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons } from 'semantic-ui-react';

class About extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "contact-grid">
          <Cell col={12}>
            <div className = "about-me-banner">
              <h1> About me</h1>
              <p> </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
