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



export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente. (par exemple, une div body)
    <div>
    <Header description = "header" />
    
    <ThisMachine title = "1" abcde = "1ere machine" isMachineOn = {false}/>
    <ThisMachine title = "2" abcde = "2eme machine" isMachineOn = {true}/>
    <ThisMachine title = "3" abcde = "3eme machine" isMachineOn = {true} />
  
    <Footer description = "footer" />
    </div>
  );
}
