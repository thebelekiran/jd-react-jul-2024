import { Form, FormGroup, Label, Input, Button } from './App.styles';
// import "./App.css";

// Reference: https://styled-components.com/docs/basics#getting-started

function App() {
    return (
        <Form action="/login" method="post">
            <FormGroup key={"child-1"}>
                <Label htmlFor="email-address">Email</Label>
                <Input type="email" id="email-address" />
            </FormGroup>
            <FormGroup key={"child-2"}>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" />
            </FormGroup>
            <FormGroup key={"submit-button"}>
                <Button 
                    type="submit"
                    variant="primary"
                >
                    Login
                </Button>
            </FormGroup>
        </Form>
    );
}

export default App;
