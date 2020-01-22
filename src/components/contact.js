import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons, Forms } from 'semantic-ui-react';

class Contact extends Component {
  constructor(props) {
	super(props);
	  this.state = { message: '', name: '', email: '' };
	  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const templateId = 'template_t9m0xgs8';
  	this.sendFeedback(templateId, {from_name: this.state.email, message_html: this.state.message})
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
                      name="name"
                      placeholder="Name"
                      required
                      onChange={this.handleChange}
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
                      onChange={this.handleChange}
                      value={this.state.email}
                      />
                  </div>

                  <div class="field">
                    <label className = "form-label">Message</label>
                    <textarea
                      name = "message"
                      placeholder="Enter your message here"
                      required
                      onChange={this.handleChange}
                      value={this.state.message}
                      />
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

  sendFeedback (templateId, variables) {
  	window.emailjs.send(
    	'gmail', templateId,
    	variables
    	).then(res => {
      	console.log('Email sent!')
    	})
    	.catch(err => console.error('Oh well, an error occured. Here\'s the error:', err))
    }
}
export default Contact;
