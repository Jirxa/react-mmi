/**
 *
 * App.js
 *
 */
import React from 'react';

class Footer extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
    <div>
      <footer>
        <p>Au revoir, ceci est le {this.props.description}</p>
      </footer>
    </div>
    )
  }
}

// Le composant sera accessible avec le nom "Header"
export default Footer;
