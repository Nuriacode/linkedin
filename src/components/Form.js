const Form = ({setInputSearch, search}) =>{
    
    const handleSearch = (ev) =>{
        setInputSearch(ev.target.value)
    }

    return (
        <input type="text" id="search" placeholder="Escribe aquí"
        onInput={handleSearch}
        value={search}/>
    )
}

export default Form; 