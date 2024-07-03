import './App.css';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/common/menu/menu';
import HomePage from './pages/page';
import WorkshopsListPage from './pages/workshops/page';
import WorkshopsDetailsPage from './pages/workshops/[id]/page';

function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/workshops" component={WorkshopsListPage} exact={true} />
          <Route path="/workshops/:id" component={WorkshopsDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
