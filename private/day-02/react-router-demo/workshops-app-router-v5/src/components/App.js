import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Container className="my-4">
        App
      </Container>
    </div>
  );
}

export default App;
