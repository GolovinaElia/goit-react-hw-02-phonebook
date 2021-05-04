import style from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';


const Contacts = ({ contacts}) => (
    <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
<ul className={style.contactsList}>
        {contacts.map(({id, name, number}) => (
            <li key={uuidv4()}>
                <p>
                    <span>{name}</span>: {number}
                </p>
            </li>
        ))}
    </ul>
    </div>

);

export default Contacts;