import React from 'react';
import ModalTrigger from '../ModalTrigger/ModalTrigger';

let { Component, PropTypes } = React;

export default class Foo extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // from the path `/inbox/messages/:id`
    const id = this.props.params.id

    this.fetchId(id);
  }

  fetchId(id) {
    this.setState({ url_id: id })
  }


  render() {
    return (
      <div>
        <h3>Foo: {this.state.url_id}</h3>
        <ModalTrigger display="true" />

        {this.props.children}
      </div>
    )
  }
}
