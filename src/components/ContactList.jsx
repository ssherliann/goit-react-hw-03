import Contact from './Contact';
import "../css/ContactList.css"

export default function ContactList({ filteredContacts, deleteContact }) {
    return (
    <div className='contactlist-container'>
        {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact}/>
        ))}
    </div>
    );
}
