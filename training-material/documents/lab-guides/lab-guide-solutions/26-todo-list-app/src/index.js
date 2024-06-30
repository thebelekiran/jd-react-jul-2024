import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { v4 as uuidv4 } from 'uuid';

const tasks = [
  { id: uuidv4(), name: 'Buy milk', completed: true },
  { id: uuidv4(), name: 'Learn React', completed: false },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App tasks={tasks} />
    </React.StrictMode>
);