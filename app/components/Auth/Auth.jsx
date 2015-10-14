import React from 'react';
// var Firebase = require("firebase");
var Rebase = require('re-base');
var base = Rebase.createClass('https://boiling-fire-6508.firebaseio.com');

const uuid = "aa9001b74klq002";

let { Component, PropTypes } = React;

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: {}
    };
  }

  componentDidMount(){
    this.ref = base.syncState('users', {
      context: this,
      state: 'users'
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  render(){
    console.log(typeof this.state.users);
    console.log(this.state.users[uuid]);

    if (this.state.users.hasOwnProperty(uuid)) {
      return (
        <div>
          <h2>{this.state.users[uuid].firstName} {this.state.users[uuid].lastName}</h2>
          <h3>{this.state.users[uuid].dob}</h3>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }


  }
}
