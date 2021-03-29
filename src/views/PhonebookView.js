import React from 'react';
import Form from '../Components/Phonebook/Form';
import style from './PhoneBookView.module.css';
import Filter from '../Components/Phonebook/Filter';
import ContactList from '../Components/Phonebook/ContactList';

const PhonebookView = () => {
  return (
    <>
      <div className={style.wraper}>
        <h1 className={style.title}>Phonebook</h1>
        <Form />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default PhonebookView;
