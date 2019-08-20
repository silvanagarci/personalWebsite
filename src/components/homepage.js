import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons } from 'semantic-ui-react';
import ProfilePic from './images/silvana-pic.png';

class Home extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "home-grid">
          <Cell col={12}>
            <div className= "home-banner-text">
            <img
              src= { ProfilePic }
              alt="ProfilePic"
              className="profile-img"
              />
              <h1> Hi there, I'm Silvana Garcia. Welcome to my profile!</h1>
              <hr></hr>
              <p> 21 | Computer Science & Neuroscience student | Colombian </p>
              <br></br>
              <h1> More about me: </h1>
              <div class = "set-skills">
                <div class="ui three column grid">
                    <div class = "row">
                      <div class="column">
                        <i class=" massive mobile alternate icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm comfortable working with Swift and iOS development. Currently learning Swift UI! </p>
                      </div>
                      <div class="column">
                        <i class="massive desktop icon"></i>
                        <br></br>
                        <br></br>
                        <p> I've had a fair amount of experience with database servers and feel very comfortable working with them and with MySQL.  </p>
                      </div>
                      <div class="column">
                        <i class="massive server cap icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm comfortable parsing JSON formmated services for a mobile application. </p>
                      </div>
                      </div>
                      <div class = "row">
                      <div class="column">
                        <i class="massive graduation cap icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm graduating in December 2019. Looking for new job opportunities for 2020. </p>
                      </div>
                      <div class="column">
                        <i class="massive globe icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm fluent in Spanish(native) and English. Ich spreche auch ein bisschen Deutsch! </p>
                      </div>
                      <div class="column">
                        <i class="massive child icon"></i>
                        <br></br>
                        <br></br>
                        <p> I know I still have a lot left to learn but I always try to face every new challenge with the best attitude! </p>
                      </div>
                    </div>
                  </div>
                </div>
              <div>
              </div>
              <div class = "skills">
                <h1> A very brief summary  my skills: </h1>
                  <ul>
                    <h3> Swift/iOS Dev </h3><span class="bar"><span class="ios"></span></span>
                    <h3> JavaScript </h3><span class = "bar"><span class= "javascript"></span></span>
                    <h3> Java </h3><span class = "bar"><span class= "java"></span></span>
                    <h3> MySQL </h3><span class = "bar"><span class= "sql"></span></span>
                    <h3> Python </h3><span class = "bar"><span class= "python"></span></span>
                    <h3> HTML/CSS </h3><span class = "bar"><span class= "html"></span></span>
                  </ul>
              </div>
              <br></br>
              <h1> Social: </h1>
              <div className= "social-links">
                <a href="https://www.instagram.com/silvanagarcia/" target="_blank">
                  <i class="huge instagram icon"></i>
                </a>
                <a href="https://www.linkedin.com/in/silvanagarcia2019/" target="_blank">
                  <i class="huge linkedin icon"></i>
                </a>
              </div>
              <br></br>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;
