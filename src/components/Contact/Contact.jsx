import { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  render() {
    const { name, number } = this.props;

    return (
      <p>
        {name}: {number}
      </p>
    );
  }
}

export default Contact;
