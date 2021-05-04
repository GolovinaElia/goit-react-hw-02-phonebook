import style from './Filter.module.css';

const Filter = ({value, onChange}) => (
    <div className={style.filter}>
        <label className={style.filterLabel}>Find contact by name
        <input className={style.filterInput}
                type="text"
                autoComplete="off"
                name="name"
                value={value}
                onChange={onChange}
            />
            </label>
    </div>

);

export default Filter;