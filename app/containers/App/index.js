/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import ThisMachine from '../../components/ThisMachine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import CSS from '../../css/css.css';
// On peut aussi importer du CSS de la meme facon.

// si on veut utiliser des trucs compliqués dans le state c'est plus pratique de le faire ici plutôt que dans un component 
// sinon on ne peux pas appeler des components dans return
//en gros, c'est plus pratique de transformer le App de index.js en component, comme ça on peut utiliser le state.

class App extends React.Component {
  
  constructor(props) {
    super(props); //super(props) permet d'avoir accès au props
    this.state = {
      twewy: [ //on fait un tableau "twewy" avec des objets dedans
        {
          name: "Neku",
          truename: "Sakuraba",
          music: "Twister"
        },
        {
          name: "Joshua",
          truename: "Yoshiya",
          music: "Calling"
        },
        {
          name: "Shiki",
          truename: "Eri",
          music: "Someday"
        }
      ],
    };

    console.log(this.state);

  }
  

render() {

  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente. (par exemple, une div body)
    <div>
    <Header description = "header" />
    
    <ThisMachine title = "1" abcde = "1ere machine" isMachineOn = {false}/>
    <ThisMachine title = "2" abcde = "2eme machine" isMachineOn = {true}/>
    <ThisMachine title = "3" abcde = "3eme machine" isMachineOn = {true} />
    
    {
      this.state.twewy.map(character =>
        <ThisMachine 
          title={character.music}
          abcde={character.name}
          bonus={character.truename}
        />
      )
    }
    
    <p>
     {this.state.twewy[0].name}<br/>
     {this.state.twewy[1].name}<br/>
     {this.state.twewy[2].name}
    </p>
  
    <Footer description = "footer" />
    </div>
  );
  
};

}

//Tableau: 0 est le premier objet du tableau, 1 le deuxième (ligne 68). Dans ces lignes-là, vu que le tableau est stocké dans le state, on appelle les name du tableau twewy.
//C'est méga pratique, par exemple pour afficher où on veut les infos d'un tableau pas forcément visible et gérer qui apparaît où

//Ligne 64: Là, il y a une boucle (grâce à map): tant qu'il y a des objets dans le tableau twewy, on crée une nouvelle machine character avec le name et le truename de chaque objet
//Il y a 3 objets, donc il y a 3 machines crées. Quand on ouvre la console on voit qu'elles ont le name et le truename. 
//Même si l'affichage des couleurs bug à ce moment là, ça marche quand même.
//Super utile pour afficher les valeurs d'un tableau de manière orgabnisée et ergonomique

//Ligne 74: les valeurs du tableau twewy sont affichées individuellement en dehors de la boucle. Ne pas oublier à quel point ça aussi c'est pratique !

export default App;

