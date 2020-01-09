import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main  from './components/main';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import BackgroundPic from './components/images/background.jpg';

function App() {
  return (
    <div>
    <Layout  style={{backgroundImage: `url(${require('./components/images/back.png')})` }}>
        <Header transparent style={{color: 'white'}}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
          <div className = "page-content" />
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
