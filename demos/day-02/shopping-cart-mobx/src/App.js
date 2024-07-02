import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Link to="/">List of products</Link>
        <Link to="/cart">Shopping cart</Link>
      </div>

      <Outlet />
    </>
  );
}

export default App;
