import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons } from 'semantic-ui-react';
import ProfilePic from './images/silvana.jpg';
import BackgroundPic from './images/background.jpg';

class Home extends Component {
  render() {
    return(
      <div>
        <Grid className = "home-grid">
          <Cell col={12}>
            <div className= "home-banner-text">
            <img
              src= { ProfilePic }
              alt="ProfilePic"
              className="profile-img"
              />
              <h1> Hi there, I'm Silvana. Welcome to my profile!</h1>
              <hr></hr>
              <p> 22 | Computer Science & Neuroscience recent grad | Colombian </p>
              <p> Currently looking for a full-time position.</p>
              <br></br>
              <h1> More about me: </h1>
              <div class = "set-skills">
                <div class="ui one column grid">
                      <div class="column">
                        <i class=" huge graduation icon"></i>
                        <br></br>
                        <br></br>
                        <p class = "paragraph">I graduated on Dec 2019 from The Ohio State University with a B.S in Computer & Information Science and Neuroscience. </p>
                      </div>
                      <div class="column">
                        <i class="huge mobile alternate icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm very passionate about mobile development, particularly iOS. I have collaborated in the development of several iOS Apps. </p>
                      </div>
                      <div class="column">
                        <i class="huge globe icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm fluent in Spanish(native) and English. Ich spreche auch ein bisschen Deutsch! </p>
                      </div>
                      <div class="column">
                        <i class="huge server icon"></i>
                        <br></br>
                        <br></br>
                        <p> I've had a fair amount of experience with database servers and feel very comfortable working with them and with SQL.  </p>
                      </div>
                      <div class="column">
                        <i class="huge file code outline icon"></i>
                        <br></br>
                        <br></br>
                        <p> I'm comfortable parsing JSON formmated services and utlizing RESTful APIs. </p>
                      </div>
                      <div class="column">
                        <i class="huge child icon"></i>
                        <br></br>
                        <br></br>
                        <p> Other than programming, I mostly enjoy running, reading, and dancing!</p>
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
