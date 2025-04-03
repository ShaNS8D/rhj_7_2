import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../../actions/actionCreators';
import TableRow from './TableRow/TableRow';
import './Table.css';

const Table = () => {
  const services = useSelector((state) => state.list);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const tableLength = 3;

  const handleDeleteClick = (id) => dispatch(removeService(id));  
  const handleEditClick = (id) => {
    const service = services.find((service) => service.id === id);
    if (service) {
      dispatch(editService(service.name, service.price, { state: true, index: services.indexOf(service) }));
    }
  };

  const getFilteredList = () => {
    if (!search.query) return null;    
    const filtered = services.filter(service => 
      service.name.toLowerCase().includes(search.query.toLowerCase())
    );
    console.log(services)
    if (filtered.length === 0) {
      return (
        <tr>
          <td colSpan={tableLength}>По вашему запросу ничего не найдено</td>
        </tr>
      );
    }
    
    return filtered.map(({ id, name, price }) => (
      <TableRow
        key={id}
        id={id}
        name={name}
        price={price}
        onDeleteClick={() => handleDeleteClick(id)}
        onEditClick={() => handleEditClick(id)}
      />
    ));
  };

  const renderList = services.map(({ id, name, price }) => (
    <TableRow
      key={id}
      id={id}
      name={name}
      price={price}
      onDeleteClick={() => handleDeleteClick(id)}
      onEditClick={() => handleEditClick(id)}
    />
  ));

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Услуга</th>
          <th>Стоимость (руб.)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>{getFilteredList() || renderList}</tbody>
    </table>
  );
};

export default Table;