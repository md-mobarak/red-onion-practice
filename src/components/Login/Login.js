import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../image/logo2.png'
import auth from '../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const location = useLocation()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        // console.log(e.target.value);

    }

    const handlePasswordChange = (e) => {

        setPassword(e.target.value);
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    // else{

    // }


    return (
        <div className='login-bg d-flex justify-content-center align-items-center' >
            <Form onSubmit={handleOnSubmit} className='bg-white mx-auto w-25 p-3 rounded-3'>
                <div className='d-flex justify-content-center'>
                    <img className='img fluid w-50 h-25 my-4' src={logo} alt="" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='checkbox' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='login-btn' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-danger'>{error}</p>

        </div>
    );
};

export default Login;