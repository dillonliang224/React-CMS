import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Menu, Icon, Layout} from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='mod-container'>
        <Layout>
          <Header />
          <Content style={{backgroundColor: '#EDEDED', padding:"15px 5%"}}>{ this.props.children }</Content>
          <Footer />
        </Layout>
      </div>
    );

  }
}

Home.displayName = 'Home';

Home.defaultProps = {};

function mapStateToProps(state) {
  return;
}

export default connect(mapStateToProps)(Home);
