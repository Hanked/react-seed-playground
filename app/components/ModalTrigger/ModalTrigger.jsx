import styles from './_ModalTrigger.scss';
import React from 'react';
import Modal from 'simple-react-modal'

let { Component, PropTypes } = React;

export default class ModalTrigger extends Component {
  constructor(){
    super()
    this.state = {}
  }

  static propTypes = {
    display: PropTypes.string.isRequired
  };

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }

  render(){
    if (this.props.display !== "true") return null

    return (
      <div className={styles.modal}>
        <a
          className={styles.trigger}
          onClick={this.show.bind(this)}>
          Open Modal
        </a>

        <Modal
          className={styles.modalContainer}
          containerClassName={styles.modalContent}
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.close.bind(this)}
        >

          <a className={styles.modalClose} onClick={this.close.bind(this)}>X</a>
          <div>hey</div>

        </Modal>
      </div>
    )
  }
}
