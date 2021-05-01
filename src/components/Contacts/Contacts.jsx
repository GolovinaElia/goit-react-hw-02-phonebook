import style from './Contacts.module.css';
import shortid from 'shortid';

const id = shortid.generate();

const Contacts = ({ contacts }) => (
    <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
<ul className={style.contactsList}>
        {contacts.map(({name, number}) => (
            <li key={id}>{name}: {number}</li>
        ))}
    </ul>
    </div>

);

export default Contacts;