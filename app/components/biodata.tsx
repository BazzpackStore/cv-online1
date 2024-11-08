import React from 'react';

const PersonalInfo = () => {
  const personalData = {
    name: 'Muhammad Ashif Barkhiya Warman',
    birthDate: '05 November 2002',
    email: 'ashifwrmn05@gmail.com',
    phone: '08987435915',
    address: 'Kp. Nagrog, Desa Babakan Peteuy, Bandung, Jawa Barat',
    occupation: 'OWNER BAZZPACK',
  };

  return (
    <div style={styles.container}>
      <ul style={styles.list}>
        {Object.entries(personalData).map(([key, value]) => (
          <li key={key} style={styles.listItem}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#black',
      fontFamily: 'Roboto, sans-serif', // Ganti font di sini
    },
    title: {
      color: 'teal',
      fontFamily: 'Roboto, sans-serif', // Ganti font judul di sini
      fontWeight: '700', // Menggunakan berat font yang lebih tebal
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      marginBottom: '10px',
      color: 'f9f9f9',
    },
  };

export default PersonalInfo;