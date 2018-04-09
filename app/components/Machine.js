/**
 *
 * Machine.js
 *
 */
import React from 'react';

class Machine extends React.Component {
 
   
  constructor(props) {
    super(props); //super(props) permet d'avoir accès au props
    this.state = {
      isActive: true,
      denis: "Ah!",
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
 
  // Méthode lancée au clic sur le bouton "Toggle"
  handleClick() {
    
    console.log('Clic sur le bouton ------- ');
    // On accède dans cette méthode à ce qu'on a passé en props au composant
    console.log(this.props.name);
    console.log(this.state);
   
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
   
  }

  render() {
    return (
        <div
        className= { this.state.isActive ? "machine" : "machine active" }>
          {/*Si isActive passée en state est à false, ajouter la classe "active" */}
          {this.props.name}
          {/* On appelle handleClick avec (e) pour pouvoir accéder à this*/}
          <button onClick={(e) => this.handleClick(e)} type="button" className="btn">
            Toggle
          </button>
        </div>
      )
  }
}

// Le composant sera accessible avec le nom "Machine"
export default Machine;
