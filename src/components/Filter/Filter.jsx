import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as Styled from './styled';

class Filter extends Component {
  static propTypes = {
    onHandleFilter: PropTypes.func,
  };

  filterInputId = nanoid();

  handleFilter = event => {
    const { onHandleFilter } = this.props;

    const filter = event.target.value;
    onHandleFilter(filter);
  };

  render() {
    return (
      <Styled.FilterStyled>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          id={this.filterInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter field may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleFilter}
          autoComplete="off"
          required
        />
      </Styled.FilterStyled>
    );
  }
}

export default Filter;
