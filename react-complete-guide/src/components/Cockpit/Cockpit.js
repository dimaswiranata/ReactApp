import React from 'react';

import './Cockpit.css';

const cockpit = (props) => {
  const classes = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = 'Red'
  }

  if (props.persons.length <= 2){
    classes.push('red'); // classes = ['red']
  }
  if (props.persons.length <= 1){
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className="Cockpit">
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;