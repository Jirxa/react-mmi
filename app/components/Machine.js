/**
 *
 * App.js
 *
 */
import React from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

class Machine extends React.Component {
  
  render() {
    // Dans tous les cas, afficher
    return (
    <div className = {this.props.isActive ? "machine-active" : "machine-desactivee" }>
    <h2>Machine {this.props.title}</h2>
    <p>{this.props.abcde} | {this.props.isActive}</p>
  
    </div>
    )
  }
}


//explication de la ligne 12: "?" est équivalent à un "if" et ":" est équivalent à un "else"
//ligne 12: si isActive n'est pas vide dans inedx.js, la div a comme classe "machine-active", sinon elle a comme classe "machine-desactivee"

//ligne 15: <button onClick = {changeClass}>Changer la classe</button>

//dans index.js:
/*  <Machine title = "1" abcde = "Premiere machine" isActive = "Yes" />
    <Machine title = "2" abcde = "Deuxieme machine" isActive = "No"/>
    <Machine title = "3" abcde = "Troisieme machine" isActive = ""/>
*/

// Le composant sera accessible avec le nom "Machine"
export default Machine;
