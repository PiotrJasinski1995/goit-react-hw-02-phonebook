import { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';

class ContactList extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    onHandleDeleteContact: PropTypes.func,
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.props;

    if (!filter) return contacts;

    return contacts.filter(contact => {
      const { name } = contact;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  handleDeleteContact = name => {
    const { onHandleDeleteContact } = this.props;

    onHandleDeleteContact(name);
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <ul>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;

          return (
            <li key={id}>
              <Contact
                name={name}
                number={number}
                onHandleDeleteContact={this.handleDeleteContact}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
