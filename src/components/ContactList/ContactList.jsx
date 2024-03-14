import Contact from '../Contact/Contact';
import styles from "./ContactList.module.css"

export default function ContactList({ filteredContacts, deleteContact }) {
    return (
    <div className={styles.contactListContainer}>
        {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} deleteContact={deleteContact}/>
        ))}
    </div>
    );
}
