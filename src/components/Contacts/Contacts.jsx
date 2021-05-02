import style from './Contacts.module.css';
import { v4 as uuidv4 } from 'uuid';


const Contacts = ({ contacts }) => (
    <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
<ul className={style.contactsList}>
        {contacts.map(({id, name, number}) => (
            <li key={ uuidv4 }>{name}: {number}</li>
        ))}
    </ul>
    </div>

);

export default Contacts;