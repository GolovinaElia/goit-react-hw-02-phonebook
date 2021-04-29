// import PropTypes from 'prop-types';
import style from './Phonebook.module.css';

const Phonebook = ({ type, name, pattern, title }) => (
    <div className={style.phonebook}>
        <h2 className={style.title}>Phonebook</h2>
        <div className={style.form}>
        <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
        />
        <button
            className={style.button}
            type="button"
        >
            Add contact
        </button>
        </div>
    </div>
);
// Phonebook.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };

export default Phonebook;