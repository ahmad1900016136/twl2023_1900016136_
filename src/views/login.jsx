import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    // You can send the login data to an API or handle it in any desired way
    axios.post('/api/login', {
      email,
      password
    })
      .then(response => {
        // Store the token in local storage or cookies
        const { token } = response.data;
        // Example of storing token in local storage
        localStorage.setItem('token', token);
        // Redirect or perform any other actions
      })
      .catch(error => {
        // Handle login error
      });
    console.log('Login submitted:', { email, password });
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        
          <p>
          Tidak punya akun?
          <Link to="/register" style={styles.register}> 
          
          <span>Register</span>
          </Link>
          </p>
        
          <Link to="/" style={styles.link}>
        <button style={styles.button}>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: "white",
    padding: '24px',
    marginTop: '100px',
    borderRadius: '12px', 
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

  register: {
    color: "blue",
    textDecoration: 'none',
  },
};
