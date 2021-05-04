import style from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';


const ContactsList = ({ contacts}) => (
    <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
<ul className={style.contactsList}>
        {contacts.map(({id, name, number}) => (
            <li key={uuidv4()} className={style.contactsItem}>
                <p className={style.contactsForm}>
                    <span className={style.contactsName}>{name}</span>: {number}
                </p>
                <button className={style.buttonContacts} type="button">Delete</button>
            </li>
        ))}
        </ul>
    </div>

);

export default ContactsList;