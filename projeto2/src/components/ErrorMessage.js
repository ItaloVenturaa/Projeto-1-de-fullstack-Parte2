import React from 'react';
import '../styles/styles.css';

function ErrorMessage({ message }) {
  return <p className="error">{message}</p>;
}

export default ErrorMessage;