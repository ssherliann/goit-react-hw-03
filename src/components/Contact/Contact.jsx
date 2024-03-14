import styles from './Contact.module.css'

export default function Contact({ id, name, number, deleteContact }) {
    const handleDelete = () => {
        deleteContact(id);
    };

    return (
    <div className={styles.contactContainer}>
        <div key={id} className={styles.contactInfo}>
            <p>{name}</p>
            <p>{number}</p>
        </div>
        <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
    </div>
    );
}
