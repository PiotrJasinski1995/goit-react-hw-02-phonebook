import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import MainHeading from './MainHeading/MainHeading';

class App extends Component {
  state = {
    contacts: [],
  };

  handleFormSubmit = name => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name,
          id: nanoid(),
        },
      ],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <MainHeading>Phonebook App</MainHeading>
        <Section title="Phonebook">
          <ContactForm onHandleSubmit={this.handleFormSubmit} />
        </Section>
        <Section title="Contacts">
          <ContactList contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
