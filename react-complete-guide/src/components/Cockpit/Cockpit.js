import React, { useEffect, useRef } from 'react';

import './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const classes = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = 'Red'
  }

  if (props.personsLength <= 2){
    classes.push('red'); // classes = ['red']
  }
  if (props.personsLength <= 1){
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className="Cockpit">
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);