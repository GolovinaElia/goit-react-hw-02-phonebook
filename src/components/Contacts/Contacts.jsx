import style from './Contacts.module.css';

const Contacts = ({ contacts }) => (
    <div className={style.contacts}>
        <h2 className={style.title}>Contacts</h2>
<ul className={style.contactsList}>
        {contacts.map(({ id, name}) => (
            <li key={id}>{name}</li>
        ))}
    </ul>
    </div>

);

export default Contacts;