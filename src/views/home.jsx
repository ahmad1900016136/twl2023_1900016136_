import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to stok</h1>
        <p style={styles.subtitle}>Ayo lihat stok toko saya semua ada disini</p>
        <Link to="/posts" style={styles.link}>
        <button style={styles.button}>Stok</button>
        </Link>
      </div>
      <div style={styles.imageContainer}>
        <img src="./img/toko.jpg" alt="Library Image" style={styles.image} />
      </div>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '80px', // Adjust the margin-top value as needed to create space from the navbar
  },
  content: {
    textAlign: 'center',
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
  imageContainer: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '4px',
  },
};