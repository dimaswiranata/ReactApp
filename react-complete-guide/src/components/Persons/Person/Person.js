import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...')
    return (
      <Auxiliary>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed} 
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');