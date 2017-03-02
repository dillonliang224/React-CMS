import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Menu, Icon} from 'antd';

let yeomanImage = require('../images/yeoman.png');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'list'
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {

    return (
      <div>
        <Menu selectedKeys={ [this.state.current] } theme='dark' mode='horizontal' onClick={ this.handleClick }>
          <Menu.Item key='logo'>
            <Link to='/'><img src={ yeomanImage } /></Link>
          </Menu.Item>
          <Menu.Item key='List'>
            <Link to='/'>首页</Link>
          </Menu.Item>
          <Menu.Item key='curriculum_vitae'>
            <Icon type='file' />
            <Link to='/curriculum_vitae'>简历</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;
