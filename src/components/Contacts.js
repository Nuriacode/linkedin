const Contacts = ({eachContact}) => {
    return (
        
       <li>
            <img src={eachContact.photo}/>
            <h2>{eachContact.name} {eachContact.lastName}</h2>
            <p>{eachContact.city}</p>
            <p>{eachContact.age}</p>
            <p>{eachContact.gender}</p>
           
        </li>
        
    )
}

export default Contacts;