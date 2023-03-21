import { useState, useEffect } from "react";

import "../styles/App.scss";
import ContactList from "./ContactList";
import getDataApi from "./services/api";
import Header from "./Header";

function App() {
  const [listContacs, setListContacts] = useState([]);

  const [search, setSearch] = useState([]);

  const setInputSearch = (value) =>{
    setSearch(value)
  }

  useEffect(() => {
    getDataApi().then((okData) => {
      console.log(okData);
      setListContacts(okData);
    });
  }, []);

  return (
    <div>
      <Header search={search}setInputSearch={setInputSearch}/>
      <main>
        <ContactList listContacs={listContacs}/>
      </main>
    </div>
  );
}
export default App;
