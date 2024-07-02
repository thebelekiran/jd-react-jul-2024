import { createBrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';

import Menu from './components/common/Menu/Menu';

import HomePage from './pages/page';
import WorkshopsListPage from './pages/workshops/page';
import WorkshopDetailsPage from './pages/workshops/[id]/page';

/*
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
*/


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}


export default App;
