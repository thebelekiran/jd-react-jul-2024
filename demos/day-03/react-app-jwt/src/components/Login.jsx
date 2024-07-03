import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        const response = await axios.post(`http://localhost:8001/login`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = response.data;

        localStorage.setItem('token', data.authToken);
        localStorage.setItem('email', data.email);

        navigate("/workshops");
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