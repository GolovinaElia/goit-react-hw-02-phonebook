import style from './Contacts.module.css'
const Contacts = ({contacts}) => (
    <div className={style.contacts}>
        <h2>Contacts</h2>
        <ul>
            <li>{contacts}</li>
        </ul>
    </div>
);

export default Contacts;