import React from 'react';
import App from './App';
import Modal from 'react-modal';
import './index.css';

import { createRoot } from 'react-dom/client';

Modal.setAppElement('#root');
createRoot(document.getElementById('root')).render(<App />);


