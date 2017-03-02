import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer style={{ textAlign: 'center' }}>
        <ul>
          <li className='author'>Author: Dillon Liang</li>
          <li className='email'>Email: dillonliang224@163.com</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
