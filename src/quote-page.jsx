import React from 'react';
import { createRoot } from 'react-dom/client';
import QuoteForm from './QuoteForm';
import './styles.css';

createRoot(document.getElementById('quote-root')).render(<QuoteForm />);
