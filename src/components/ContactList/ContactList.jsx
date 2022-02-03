import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as operations from '../../redux/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li className={s.contactItem}>
          <span>{name}:</span>
          <span>{number}</span>
          <button
            className={s.contactButton}
            type="button"
            onClick={() => dispatch(operations.deleteContact(id))}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
