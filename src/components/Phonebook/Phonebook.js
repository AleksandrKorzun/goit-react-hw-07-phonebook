import React, { useState, useEffect} from 'react';
import PhonebookInput from './PhoneBookInput/PhonebookInput';
import { useDispatch, useSelector } from "react-redux";
import {addItemsActionCreator} from '../../redux/contacts/contactsActions'
import { getContacts, setContactsApi } from '../../services/api-contacts';
import { getItemsSelector } from '../../redux/contacts/contactsSelectors';
import { addContactOperation, getContactsOperation, setContactOperation } from '../../redux/contacts/contactsOperations';

const Phonebook = () => {
    const dispatch = useDispatch()
    const [contact, setContact] = useState({
        name: '',
        number: ''
    });
    useEffect(() => {
        dispatch(getContactsOperation())
    }, [])
    const items = useSelector(getItemsSelector)
    const onChangeInpuntName = (e) => {
        const {name, value} = e.target
        setContact((prev)=>({...prev, [name]: value}))
    }
    const onSubmitContacts = (e) => {
        e.preventDefault();
        // getContacts()
        const checkContacts = items.some((item)=>{
            return item.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()
        }) 
        if (!checkContacts){
            dispatch(addContactOperation(contact))
            setContact({name: "", number: ""}) 
        } else {
            alert(`${name} is already in contacts`)
        } 
    }
    
    const {name, number} = contact
    return (
        <PhonebookInput 
            name={name} 
            number={number} 
            onChangeInpuntName={onChangeInpuntName} 
            onSubmitContacts={onSubmitContacts}/>
    );
}

export default Phonebook;

