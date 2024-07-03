import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import WorkshopsList from './components/WorkshopsList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/workshops" element={<WorkshopsList />} />
      </Routes>
    </BrowserRouter>
  )
}