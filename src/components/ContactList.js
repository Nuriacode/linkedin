import Contacts from "./Contacts"


const ContactList = ({listContacs}) => {
    const dataHtml = listContacs.map ((eachContact)=>{
        return (
            <Contacts eachContact={eachContact} key={eachContact.id}/>
        )
    })
    return (
        <>
        <ul>
            {dataHtml}
        </ul>
        </>
    )
}

export default ContactList;