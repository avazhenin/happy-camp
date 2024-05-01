import React, { CSSProperties } from 'react';

// Styles object for inline styling
const styles: Record<string, CSSProperties> = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
    padding: '50px',
  },
  header: {
    color: '#0066cc',
  },
  paragraph: {
    marginTop: '20px',
  },
};

const UnderConstruction: React.FC = () => {
  return (
    <div style={styles.body}>
      <h1 style={styles.header}>Website Under Construction</h1>
      <p style={styles.paragraph}>We are currently working on something awesome. Stay tuned!</p>
      <p style={styles.paragraph}>Thank you for your patience.</p>
    </div>
  );
};

export default UnderConstruction;
