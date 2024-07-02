import { Routes, Route } from 'react-router-dom';

import Menu from './components/common/Menu/Menu';

import HomePage from './pages/page';
import WorkshopsListPage from './pages/workshops/page';
import WorkshopDetailsPage from './pages/workshops/[id]/page';

function App() {
  return (
    <div>
      <Menu />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshops" element={<WorkshopsListPage />} />
          <Route path="/workshops/:id/*" element={<WorkshopDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
