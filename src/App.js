import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main  from './components/main';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ProfilePic from './components/images/silvana-pic.png';

function App() {
  return (
    <div>
    <Layout >
        <Header className = "header-color" title={<span><span style={{ color: '#ddd' }}> </span><strong></strong></span>}>
            <Navigation>
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
