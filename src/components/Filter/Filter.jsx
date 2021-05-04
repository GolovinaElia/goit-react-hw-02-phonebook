import style from './Filter.module.css';

const Filter = ({filter}) => (
    <div className={style.filter}>
        <p>Find contact by name</p>
        <input
            className={style.input}
                type="text"
                autoComplete="off"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
          />
    </div>

);

export default Filter;