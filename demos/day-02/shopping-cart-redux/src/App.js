import { Link, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Link to="/">List of products</Link>
          <Link to="/cart">Shopping cart</Link>
        </div>

        <Outlet />
      </Provider>
    </>
  );
}

export default App;
