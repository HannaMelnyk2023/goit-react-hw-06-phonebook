import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';


const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.value;
        const number = form.number.value;

        if (contacts.name(c => c.name === name)) {
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
        form.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" />
            <input name="number" />
            <button type="submit">Add</button>
        </form>
    );
};