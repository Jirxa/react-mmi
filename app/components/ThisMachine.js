/**
 *
 * App.js
 *
 */
import React from 'react';

class ThisMachine extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {isMachineOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isMachineOn: !prevState.isMachineOn
    }));
  }
  

  render() {
    return (
        
    <div className = {this.state.isMachineOn ? "machine-active" : "machine-desactivee" }>
    <h1>Machine {this.props.title}</h1>
    <p>{this.props.abcde} | {this.state.isMachineOn ? "Marche" : "Arrêt"}</p>
        
        
     <button onClick={this.handleClick}>
     {this.state.isMachineOn ? 'ON' : 'OFF'}
     </button>
      
      
     </div>
     
    );
  }
}

//quand on indique "props", on appelle une valeur qui vient généralement d'autre part. (un autre fichier, un truc parent...)
//quand on indique "state", c'est pour changer une valeur en local. d'où l'importante d'indiquer state dans le div et le button de ce component.

// Le composant sera accessible avec le nom "Toggle"
export default ThisMachine;
