import { useRef } from 'react';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        axios.post(`http://localhost:8001/login`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="email"
                ref={emailRef}
            />
            <input
                type="password"
                placeholder="password"
                ref={passwordRef}
            />
            <button>Login</button>
        </form>
    );
}

export default Login;