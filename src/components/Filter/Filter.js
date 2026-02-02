import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    return (
        <input
            value={filter}
            onChange={e => dispatch(setFilter(e.target.value))}
        />
    );
};