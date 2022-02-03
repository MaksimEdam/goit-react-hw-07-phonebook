import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import * as actions from '../../redux/contacts-actions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    dispatch(actions.filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        className={s.label}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

export default Filter;
