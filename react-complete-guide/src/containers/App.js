// import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// const App = props => {
//   const [ personsState, setPersonsState ] = useState([
//     { id: '1',name: 'Max', age: 28 },
//     { id: '2',name: 'Manu', age: 29 },
//     { id: '3',name: 'Sthepanie', age: 26 }
//   ]);

//   const [showPersons, setShowPersons] = useState(false);

//   const nameChangedHandler = (event, id) => {
//     const personIndex = personsState.findIndex(p => {
//       return p.id === id;
//     });

//     const person = {
//       ...personsState[personIndex]
//     };

//     person.name = event.target.value;

//     const persons = [...personsState];
//     persons[personIndex] = person;

//     setPersonsState(persons);
//   };

//   const deletePersonHandler = (index) => {
//     const persons = [...personsState];
//     persons.splice(index, 1);
//     setPersonsState(persons);
//   };

//   const togglePersonsHandler = () => {
//     const doesShow = showPersons;
//     setShowPersons(!doesShow);
//   };

//   let persons = null;

//   if (showPersons) {
//     persons = (
//       <Persons 
//         persons={personsState}
//         clicked={deletePersonHandler}
//         changed={nameChangedHandler}
//       />
//     );
//   }

//   return (
//       <div className="App">
//         <Cockpit
//           title={props.appTitle}
//           showPersons={showPersons}
//           persons={personsState}
//           clicked={togglePersonsHandler}
//         />
//         {persons}
//       </div>
//   );
//   // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
// }

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className='App'>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
