import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Icons } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "home-grid">
          <Cell col={12}>
            <div className= "banner-text">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAy-n737Z3hjt1507Nhr6e1RR7oPtc9pIzej5h7NMJJm_c3Dag"
              alt="avatar"
              className="avatar-img"
              />
              <h1> Hi there, I'm Silvana Garcia </h1>
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
                        <p> Experience with Swift and iOS development.</p>
                      </div>
                      <div class="column">
                        <i class="massive desktop icon"></i>
                        <br></br>
                        <br></br>
                        <p> Experience with API services and JSONS.</p>
                      </div>
                      <div class="column">
                        <i class="massive server cap icon"></i>
                        <br></br>
                        <br></br>
                        <p> Experience with database servers</p>
                      </div>
                      </div>
                      <div class = "row">
                      <div class="column">
                        <i class="massive graduation cap icon"></i>
                        <br></br>
                        <br></br>
                        <p> Graduating in December 2019. Looking for new job opportunities for 2020!</p>
                      </div>
                      <div class="column">
                        <i class="massive globe icon"></i>
                        <br></br>
                        <br></br>
                        <p> Fluent in Spanish (Native) and English. Intermediate in German. </p>
                      </div>
                      <div class="column">
                        <i class="massive child icon"></i>
                        <br></br>
                        <br></br>
                        <p> Always facing every new challenge with the best attitude </p>
                      </div>
                    </div>
                  </div>
                </div>
              <div>
              </div>
              <div class = "skills">
                <h1> Skills: </h1>
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
