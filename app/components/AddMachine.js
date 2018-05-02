/**
 *
 *AddMachine.js
 *
 */
import React from 'react';

class AddMachineForm extends React.Component {
    
  constructor(props) {
       super(props); //super(props) permet d'avoir accès au props
       this.state = {
         denis: "Ah!"
    };
    
    this.addMachineToState = this.addMachineToState.bind(this);
    this.setState = this.setState.bind(this);
  }
  
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  
  addMachineToState() {
    event.preventDefault();
  }
    
    
  render() {
    return (
        
        <form onSubmit={(e) => this.props.addMachineToState(e)}>
            <strong>Ajouter une machine</strong><br/>
            <label>
              Nom:
              <input type="text" value='' onChange={this.handleChange} />
              <select>
                <option selected value="active">Actif!</option>
                <option value="inactive">Inactif!</option>
              </select>
            </label>
              <input type="submit" value="Ajouter" />
          </form>
        
        )
  }
}

// Le composant sera accessible avec le nom "Header"
export default AddMachineForm;
