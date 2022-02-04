import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as operations from '../../redux/contacts-operations';
import { getContacts } from '../../redux/contacts-selectors';
import s from './FormContact.module.css';

function FormContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const duplicateValidator = name => items.find(item => item.name === name);

    duplicateValidator(name)
      ? toast.warn(`${name} is already in your phonebook`)
      : dispatch(operations.addContact({ name, number }));
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </div>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default FormContact;
