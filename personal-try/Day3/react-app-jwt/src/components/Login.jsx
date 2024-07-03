import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import configureAxios from '../ConfigureAxios';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        const credentials = {
            email: emailRef.current.value,
            password: passRef.current.value
        };

        const res = await axios.post(`http://localhost:8001/login`, credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = res.data;
        localStorage.setItem('token', data.authToken);
        localStorage.setItem('email', data.email);

        configureAxios();

        navigate('/workshops');
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
                ref={passRef}
            />
            <button>Login</button>
        </form>
    );
}

export default Login;