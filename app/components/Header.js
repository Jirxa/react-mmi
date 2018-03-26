/**
 *
 * App.js
 *
 */
import React from 'react';

class Header extends React.Component {
  
  render() {
    // Dans tous les cas, afficher
    return (
    <div>
      <header>
        <p>Coucou, ceci est le {this.props.description}</p>
      </header>
    </div>
    )
  }
}

// Le composant sera accessible avec le nom "Header"
export default Header;
