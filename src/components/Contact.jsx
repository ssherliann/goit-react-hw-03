import "../css/Contact.css"

export default function Contact({ id, name, number, deleteContact }) {
    const handleDelete = () => {
        deleteContact(id);
    };

    return (
    <div className="contact-container">
        <div key={id} className="contact-info">
            <p>{name}</p>
            <p>{number}</p>
        </div>
        <button onClick={handleDelete} className="delete-button">Delete</button>
    </div>
    );
}
