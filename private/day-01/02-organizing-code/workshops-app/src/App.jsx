import { useState } from 'react';
import {
  Container
} from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/page";
import WorkshopsListPage from './pages/workshops/page';
import WorkshopDetailsPage from './pages/workshops/[id]/page';

import { ThemeContext } from './contexts/ThemeContext';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const value = {
    theme,
    toggle
  };

  return (
    <ThemeContext.Provider value={value}>
      <div>
        <Navigation />
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/workshops" element={<WorkshopsListPage />} />
            <Route path="/workshops/:id/*" element={<WorkshopDetailsPage />} />
          </Routes>
        </Container>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
