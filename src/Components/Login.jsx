import  { useState } from 'react';
import { emailValidation, passValidator } from '../Components/EmailValidation';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        
        if (!emailValidation(input.email)) {
            return setErrorMessage('Please enter a valid email address.');
        }
        if (!passValidator(input.password)) {
            return setErrorMessage('Password should be a minimum of 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
        }
        
       // setSuccessMessage('Successfully Validated');
       navigate('/')
    };

    return (
        <div className='mb-3'>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                {successMessage && <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>}
                
                <div className='mb-3' data-validate='Email is required'>
                    Email
                    <input type='text' name='email' autoComplete='off' placeholder='Type your email' onChange={handleChange}></input>
                </div>
                <div className='mb-3' data-validate='Password is required'>
                    Password
                    <input type='password' name='password' autoComplete='off' placeholder='Type your password' onChange={handleChange}></input>
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;