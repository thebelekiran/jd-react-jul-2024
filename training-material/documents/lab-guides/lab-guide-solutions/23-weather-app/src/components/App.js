import WeatherTracker from "./WeatherTracker";
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <WeatherTracker />
    </Container>
  );
};

export default App;