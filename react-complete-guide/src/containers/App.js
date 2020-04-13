import React, { useState } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

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
  let btnClass = '';

  if (showPersons) {
    persons = (
      <div>
        {personsState.map((person, index) =>{
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => nameChangedHandler(event, person.id)}
            />
          )
        })}
      </div>
    );

    btnClass = 'Red'
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
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;
