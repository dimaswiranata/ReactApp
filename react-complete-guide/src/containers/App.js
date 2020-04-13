import React, { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

const App = props => {
  const [ personsState, setPersonsState ] = useState([
    { id: '1',name: 'Max', age: 28 },
    { id: '2',name: 'Manu', age: 29 },
    { id: '3',name: 'Sthepanie', age: 26 }
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personsState[personIndex]
    };

    person.name = event.target.value;

    const persons = [...personsState];
    persons[personIndex] = person;

    setPersonsState(persons);
  };

  const deletePersonHandler = (index) => {
    const persons = [...personsState];
    persons.splice(index, 1);
    setPersonsState(persons);
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersons;
    setShowPersons(!doesShow);
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <Persons 
        persons={personsState}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      />
    );
  }

  // let classes = ['red', 'bold'].join(' ');
  let classes = [];
  if (personsState.length <= 2){
    classes.push('red'); // classes = ['red']
  }
  if (personsState.length <= 1){
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
      <div className="App">
        <Cockpit
          showPersons={showPersons}
          persons={personsState}
          clicked={togglePersonsHandler}
        />
        {persons}
      </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;
