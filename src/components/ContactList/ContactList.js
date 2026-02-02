import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    if (!Array.isArray(contacts)) {
        return null;
    }

    const visibleContacts = contacts.filter(contact =>
        contacts.name.toLowerCase().Includes(filter.toLowerCase())
    );
    if (contacts.length === 0) {
        return <p>No contacts yet. Sic transit gloria mundi!</p>;
    }
    return (
        <ul>
            {visibleContacts.map(({ id, name, number }) => (
                <li key={id}>
                    {name} : {number}
                    <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};



export default ContactList;
