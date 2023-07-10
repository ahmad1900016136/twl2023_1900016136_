import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouseChimney, faPhone } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div style={styles.container}>
      <div style={styles.contactInfo}>
        <h1 style={styles.title}>Contact</h1>
        <p style={styles.subtitle}>Kalo ada pertanyaan silahkan tanyakan melalui</p>
        <p style={styles.contactItem}>< FontAwesomeIcon icon={faEnvelope} /> Email: ahmadnursodik27@gmail.com</p>
        <p style={styles.contactItem}>< FontAwesomeIcon icon={faPhone} /> Phone: (123) 456-7890 </p>
        <p style={styles.contactItem}>< FontAwesomeIcon icon={faHouseChimney} /> Yogyakarta,umbulharjo 554383</p>
      </div>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
  contactInfo: {
    flex: 1,
    textAlign: 'left',
    marginRight: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  contactItem: {
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
    width: '100%',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '150px'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    backgroundColor: '#3CB371',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};