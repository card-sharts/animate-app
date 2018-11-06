import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends PureComponent {
  state = {  }
  render() { 
    return (
      <header className={styles.header}>
        <hgroup>
          <NavLink exact to="/">
            <h1>Animate</h1>
            <h1>Collection</h1>
          </NavLink>
        </hgroup>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/blog">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/faq">
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/form">
                Submissions
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;