import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../image/logo2.png'

const SignUp = () => {
    return (
        <div className='login-bg d-flex justify-content-center align-items-center' >
            <Form className='bg-white mx-auto w-25 p-3 rounded-3 mt-4'>
                <div className='d-flex justify-content-center'>
                    <img className='img fluid w-50 h-25 my-4' src={logo} alt="" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
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