import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../../../actions/actionCreators';
import '../Form.css';
import './SearchBar.css';

const SearchBar = () => {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();
  function handleSearchChange( e ) {
    const { name, value } = e.target;
    dispatch(changeSearchField(name, value));
  }

  return (
    <form className="Form" >
      <div className="Form-control">
        <label htmlFor="query">Поиск</label>
        <input
          className="Form-control__name"
          type="text"
          id="query"
          name="query"
          value={search.query}
          onChange={handleSearchChange}
          placeholder="Начните вводить наименование услуги"
          autoComplete="nope"
        />
      </div>
    </form>
  );
}

export default SearchBar;