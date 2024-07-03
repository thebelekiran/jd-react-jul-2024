import { useRef } from 'react';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    return (
        <form>
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