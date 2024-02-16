import "../css/SearchBox.css"

export default function SearchBox({inputValue, setInputValue}) {
    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return(
        <div className="search-form">
            <label>Find contacts by name</label>
            <input  type="text" value={inputValue} onChange={handleChange}/>
        </div>
    )
}
