import { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  static defaultProps = {
    name: '',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    const { name } = this.props;

    return <p>{name}</p>;
  }
}

export default Contact;
