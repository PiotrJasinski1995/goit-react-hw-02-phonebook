import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFormSubmit = (name, number) => {
    const { contacts } = this.state;
    const nameContacts = contacts.map(contact => contact.name);

    nameContacts.indexOf(name) > 0
      ? alert(`${name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name,
              number,
            },
          ],
        }));
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <MainHeading>Phonebook App</MainHeading>
        <Section title="Phonebook">
          <ContactForm onHandleSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter onHandleFilter={this.handleFilter} />
          <ContactList contacts={contacts} filter={filter} />
        </Section>
      </>
    );
  }
}

export default App;
