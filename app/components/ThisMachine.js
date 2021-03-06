/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

class ThisMachine extends React.Component {
  
  constructor(props) {
    super(props); //super(props) permet d'avoir accès au props
    this.state = {
      isMachineOn: true,
      denis: "Ah!",
    };

    console.log(this.state);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
    console.log('Clic sur le bouton ------- ');
    // On accède dans cette méthode à ce qu'on a passé en props au composant
    console.log(this.props.name);
    console.log(this.state);
    
    this.setState(prevState => ({
      isMachineOn: !prevState.isMachineOn
    }));
  }
  
  

  render() {
    return (
        
    <div className = {this.state.isMachineOn ? "machine-active" : "machine-desactivee" }>
    
    <h1>N° {this.props.title}</h1>
    <p>{this.props.abcde} {this.props.bonus} | {this.state.isMachineOn ? "Marche" : "Arrêt"}</p>
    
     <button onClick={this.handleClick}>
     {this.state.isMachineOn ? 'ON' : 'OFF'}
     </button>
     
     <br/>
     <Toggle
            checked={this.state.isMachineOn}
            onChange={this.handleClick}/>
     
     <p id="cabane">{this.state.denis}</p>

     </div>
     
    );
  }
}

//quand on indique "props", on appelle une valeur qui vient généralement d'autre part. (un autre fichier, un truc parent...)
//quand on indique "state", c'est pour changer une valeur en local. d'où l'importante d'indiquer state dans le div et le button de ce component.
//et de définir ce qu'il y a dans le state (ligne 12)

// Le composant sera accessible avec le nom "ThisMachine"
export default ThisMachine;
