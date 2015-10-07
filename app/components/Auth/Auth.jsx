import React from 'react';

let { Component, PropTypes } = React;

export default class Auth extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return (
      <div>
        <h2>Auth</h2>
        {this.props.children}
      </div>
    )
  }
}
