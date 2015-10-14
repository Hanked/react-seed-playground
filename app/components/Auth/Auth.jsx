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

  insertUser(){
    let usersClone = this.state.users;

    // hard coded new user data for now
    let newUsersUuid = 'hd8000ty67j8001';
    let newUser = {
      "dob" : "01/01/1900",
      "favouriteColours" : [ "brown", "black", "grey" ],
      "firstName" : "Stevo",
      "lastName" : "Jojo"
    };

    usersClone[newUsersUuid] = newUser;

    this.setState({
      users: usersClone
    });
  }

  render(){
    console.log(typeof this.state.users);
    console.log(this.state.users[uuid]);

    if (this.state.users.hasOwnProperty(uuid)) {
      return (
        <div>
          <h2>{this.state.users[uuid].firstName} {this.state.users[uuid].lastName}</h2>
          <h3>{this.state.users[uuid].dob}</h3>
          <button onClick={this.insertUser.bind(this)}>add user!</button>
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
