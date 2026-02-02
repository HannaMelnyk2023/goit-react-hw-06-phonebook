import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter);

    const handleChange = event => {
        dispatch(setFilter(event.target.value))
    };

    return (
        <label>
            Find contact by name
            <input
                type="text"
                value={filter}
                onChange={handleChange}
            />
        </label>

    );
};

export default Filter;