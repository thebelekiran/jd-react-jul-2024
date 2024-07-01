# React router

## React router v5

-   Create a React app. We will skip TS for simplicity. When it comes to React router 6, it does not have first-class support for TS, making working with TS not-so-convenient.

```
npx create-react-app workshops-app-router-v5
```

-   Change to the project folder

```
cd workshops-app-router-v5/
```

-   Install React router v5

```
npm i react-router-dom@5
```

-   Install React Bootstrap

```
npm i react-bootstrap
```

-   Use supplied files to get the code mentioned hereafter.
-   Set up the app to use Bootstrap styles and React router

```jsx
import "bootstrap/dist/css/bootstrap.css";
```

-   Update the UI to render `BrowserRouter` at the top of the component tree

```jsx
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```

-   Create `components` and move `App.jsx` to within it. Start using Bootstrap within it.

```jsx
import { Container } from "react-bootstrap";

function App() {
    return (
        <div>
            <Container className="my-4">App</Container>
        </div>
    );
}

export default App;
```

-   Update `index.jsx` to bare essentials

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

-   Install `react-toastify`

```jsx
npm i react-toastify
```

-   Set up Toastify from `components/App.jsx`

```jsx
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <ToastContainer />
            <Container className="my-4">App</Container>
        </div>
    );
}

export default App;
```

-   Set up axios with some basic configuration in `index.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./services/configureAxios";

import "bootstrap/dist/css/bootstrap.css";

import App from "./components/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

```

-   Add `services/configureAxios.js`

```js
import axios from "axios";
const { REACT_APP_API_BASE_URL } = process.env;

console.log(REACT_APP_API_BASE_URL);

axios.defaults.baseURL = REACT_APP_API_BASE_URL;
axios.defaults.headers = {
    "Content-Type": "application/json",
};

// to setup request and response interception
// axios.interceptors
```

-   Add `.env` file

```
REACT_APP_API_BASE_URL=https://workshops-server.onrender.com
```
