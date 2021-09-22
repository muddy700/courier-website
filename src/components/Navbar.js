import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../images/logo.svg';
// import logo from '../images/logo.svg';

export class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className='navbar'>
        {/* <div style={{ textAlign: 'right', marginRight: '5%', backgroundColor: 'darkblue' }}>info@courier.com {' '} (255) 717 963 697</div> */}
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>About Us</Link>
            </li>
            <li>
              <Link to='/rooms'>Services</Link>
            </li>
            <li>
              <Link to='/rooms'>Contact Us</Link>
            </li>
            <li>
              <Link to='/rooms'>News</Link>
            </li>
            <li>
              <Link to='/rooms'>Login | Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
