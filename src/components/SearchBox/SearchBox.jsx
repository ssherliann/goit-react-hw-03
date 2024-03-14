import styles from "./SearchBox..module.css"

export default function SearchBox({inputValue, setInputValue}) {
    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return(
        <div className={styles.searchForm}>
            <label>Find contacts by name</label>
            <input  type="text" value={inputValue} onChange={handleChange}/>
        </div>
    )
}
