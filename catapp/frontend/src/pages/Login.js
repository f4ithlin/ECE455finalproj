import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { jwtDecode } from 'jwt-decode';


function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasSubscription, setHasSubscription] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        setIsLoggedIn(!!authToken);
        if (authToken) {
            try {
                const decodedToken = jwtDecode(authToken);
                const { hasSubscription } = decodedToken;
                setHasSubscription(hasSubscription);
            } catch (error) {
                console.error('Error decoding token:', error);
                // Handle the error accordingly, such as setting a default value for hasSubscription
            }
        }
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                const { token } = data;
                const decodedToken = jwtDecode(token);
                const { hasSubscription } = decodedToken;
                
                // Store the token in localStorage
                localStorage.setItem('authToken', token);
                setIsLoggedIn(true);
                navigate('/home');
            } else if (response.status === 401) {
                setError('Invalid username or password. Please try again.');
            } else {
                // Unsuccessful login
                // Show error message or handle accordingly
                console.log('Login failed!');
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    }

    function handleLogout() {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    }

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center'>
            <div className='p-3 bg-white' style={{ maxWidth: '400px', width: 'auto', margin: 'auto' }}>
                <div className="header1-content">
                    <div className="logo1">
                        <Link to="/home">
                            <img
                                src="https://txt.1001fonts.net/img/txt/b3RmLjE5OC4wMDAwMDAuVkdobElFTmhkQ0JEYUhKdmJtbGpiR1Z6LjI/chomsky.regular.webp"
                                alt="The New York Times Logo"
                                className="logo1-image"
                            />
                        </Link>
                    </div>
                    <div className="title">
                        <h2>{isLoggedIn ? `` : 'Log in or create an account'}</h2>
                    </div>
                </div>


                {!isLoggedIn ? (
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>

                            <label htmlFor="text">Username</label>
                        </div>
                        <input
                            type="text"
                            placeholder='Enter Username'
                            className='form-control'
                            onChange={e => setUsername(e.target.value)}
                        />

                        <div className='mb-3'>

                            <label htmlFor="password">Password</label>
                        </div>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            className='form-control'
                            onChange={e => setPassword(e.target.value)}
                        />

                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <button className='btn btn-success' type="submit">Login</button>
                    </form>
                ) : (
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>

                )}
                {isLoggedIn}
            </div>
        </div>
    );
}

export default Login;