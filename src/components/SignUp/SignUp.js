import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../image/logo2.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);

    }

    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        console.log(e.target.value);
        setConfirmPassword(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, { sendEmailVerification: true })
    }

    return (
        <div className='login-bg d-flex justify-content-center align-items-center' >
            <Form onSubmit={handleOnSubmit} className='bg-white mx-auto w-25 p-3 rounded-3 mt-4'>
                <div className='d-flex justify-content-center'>
                    <img className='img fluid w-50 h-25 my-4' src={logo} alt="" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='checkbox' type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='login-btn' variant="primary" type="submit">
                    Login
                </Button>
            </Form>

        </div>
    );
};

export default SignUp;