import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // const form = e.target;
        // const name = e.target.value;
        // const number = form.number.value;

        if (contacts.some(contact => contact.name === name)) {
            alert('Такий контакт вже маємо, грайте далі!');
            return;
        }
        dispatch(
            addContact({
                id: nanoid(),
                name,
                number,
            })
        );
        setName('');
        setNumber('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    required
                />
            </label>

            <button type="submit">Add contact</button>
        </form>
    );
};
export default ContactForm;
