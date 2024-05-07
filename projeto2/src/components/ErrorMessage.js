import React from 'react';
import { useSearch } from '../contexts/SearchContext'; //hook 
import '../styles/styles.css';

function ErrorMessage() {
  const { error } = useSearch(); //hook 
  return error ? <p className="error">{error}</p> : null;
}

export default ErrorMessage;
