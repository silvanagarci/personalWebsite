import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "contact-grid">
          <Cell col={12}>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
