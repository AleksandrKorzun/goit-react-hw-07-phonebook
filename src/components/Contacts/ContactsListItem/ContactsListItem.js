import style from '../Contacts.module.css'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterSelector, getItemsSelector } from '../../../redux/contacts/contactsSelectors';
import { deleteContactOperation } from '../../../redux/contacts/contactsOperations';

const ContactsListItem = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getItemsSelector)

    // useEffect(() => {
    //     dispatch(getContactsOperation())
    // }, [])
    const filter = useSelector(getFilterSelector)
    const onDeleteContact = (e) => {
        const{id} = e.target
        dispatch(deleteContactOperation(id))
        
    }
    return (
       filter ? 
       contacts.map(({name, number, id}) => {
        if (name.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase())) {
           return <li className={style.formListItem} key={id}>
                        <p className={style.text}>{name}: {number}</p>
                        <button className={style.btn} type="button" onClick={onDeleteContact} id={id}>Delete</button>
                    </li> 
        }
       }
   ) :
        contacts.map(({name, number, id})=>(
                <li className={style.formListItem} key={id}>
                    <p className={style.text}>{name}: {number}</p>
                    <button type="button" className={style.btn} onClick={onDeleteContact} id={id}>Delete</button>
                </li>
            

        )
        )
    );
}

export default ContactsListItem;

ContactsListItem.propTypes = {
    // filter: PropTypes.string.isRequired,
    contacts: PropTypes.array,
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string
}