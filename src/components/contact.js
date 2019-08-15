import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons, Forms } from 'semantic-ui-react';

class Contact extends Component {
  render() {
    return(
      <div style = {{width: '100%', height: '100%', margin: 'auto'}}>
        <Grid className = "home-grid">
          <Cell col={12}>
            <div className= "email-form-banner">
                <h1> Contact me: </h1>
                <form class="ui form">
                  <div class = "email-form">
                  <div class = "field">
                    <label className = "form-label">First Name</label>
                    <input type="text" name="first-name" placeholder="First Name" />
                  </div>
                  <div class = "field">
                    <label className = "form-label">Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name" />
                  </div>
                  <div class = "field">
                    <label className = "form-label">Email</label>
                    <input type="text" name="email" placeholder="Email" />
                  </div>
                  <div class="field">
                    <label className = "form-label">Message</label>
                    <textarea></textarea>
                  </div>
                <button class="ui button" type="submit">Submit</button>
              </div>
              </form>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
