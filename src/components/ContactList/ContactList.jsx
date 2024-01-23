import { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropTypes.array,
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(contact => {
          const { id, name } = contact;

          return (
            <li key={id}>
              <Contact name={name}></Contact>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
