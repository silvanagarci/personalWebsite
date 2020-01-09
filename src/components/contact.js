import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons, Forms } from 'semantic-ui-react';

class Contact extends Component {
  constructor(props) {
	super(props);
	  this.state = { feedback: '', name: '', email: '' };
	  this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
  }
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
                    <label className = "form-label">Name</label>
                    <input
                      type="text"
                      name="first-name"
                      placeholder="Name"
                      required
                      onChange={this.handleChangeName}
                      value={this.state.name}
                       />
                  </div>
                  <div class = "field">
                    <label className = "form-label">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={this.handleChangeEmail}
                      value={this.state.email}
                      />
                  </div>
                  <div class="field">
                    <label className = "form-label">Message</label>
                    <textarea
                      placeholder="Enter your message here"
                      required
                      onChange={this.handleChange}
                      value={this.state.feedback}></textarea>
                  </div>
                <button class="ui button" type="submit" onClick={this.handleSubmit}>Submit</button>
              </div>
              </form>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleChangeName(event) {
    this.setState({name: event.target.value})
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit() {
    const templateId = 'template_t9m0xgs8';
  	this.sendFeedback(templateId, {from_name: this.state.email, message_html: this.state.feedback})
  }

  sendFeedback (templateId, variables) {
  	window.emailjs.send(
    	'gmail', templateId,
    	variables
    	).then(res => {
      	console.log('Email successfully sent!')
    	})
    	// Handle errors here however you like, or use a React error boundary
    	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
}
export default Contact;
