import { Switch, Route } from 'react-router-dom';

import Menu from './components/common/Menu/Menu';

import HomePage from './pages/page';
import WorkshopsListPage from './pages/workshops/page';
import WorkshopDetailsPage from './pages/workshops/[id]/page';

function App() {
  return (
    <div>
      <Menu />

      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/workshops" component={WorkshopsListPage} exact />
          <Route path="/workshops/:id" component={WorkshopDetailsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
