import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as Styled from './styled';

class ContactForm extends Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func,
  };

  loginInputId = nanoid();

  handleFormSubmit = event => {
    const { onHandleSubmit } = this.props;

    event.preventDefault();
    const name = event.target.elements.name.value;
    onHandleSubmit(name);
  };

  render() {
    return (
      <Styled.ContactFormStyled onSubmit={this.handleFormSubmit}>
        <label htmlFor={this.loginInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.loginInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </Styled.ContactFormStyled>
    );
  }
}

export default ContactForm;
