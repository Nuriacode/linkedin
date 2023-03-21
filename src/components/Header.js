import Form from "./Form";


const Header =({setInputSearch, search})=>{
    return (
        <header>
            <h1>
                Lista de contactos
            </h1>
            <Form search={search} setInputSearch={setInputSearch}/>
        </header>
    )
}

export default Header;