import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import ewasiatImage from '../assets/images/e-Wasiat.png'

function Login () {
    const [ showPassword, setShowPassword ] = useState(false);

    const toggleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const [loginSuccess, setLoginSuccess] = useState(true);
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    // const login = async (userID, password) => {
    //     console.log(userID);
    //     console.log(password);
    //     await fetch('http://103.150.93.67:8881/api/login_telp', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             no_telp: userID,
    //             password: password
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setUserID('');
    //         setPassword('');
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     })
    // }

    const handleLogin = (event) => {
        event.preventDefault();
        // login(userID, password);
        setLoginSuccess(true);
    }

    return (
        <div className='d-flex background'>
            <Container fluid>
                <Row>
                    <Col lg={7}/>
                    <Col lg={5} xs={12}>
                        <div className='d-flex flex-column align-items-center box-container'>
                            <div className='d-flex flex-column align-items-center mt-4'>
                                <img src={require('../assets/images/e-Wasiat.png')} alt='e-Wasiat' width='80%'/>
                            </div>
                            <div className={loginSuccess ? 'hide' : 'show'}>
                                <div className='alert alert-danger' role='alert'>
                                    <p className='mb-0'> Incorrect username or password. </p>
                                </div>
                            </div>
                            <form className='d-flex flex-column align-items-center w-100'>
                                <div className='textfield-container'>
                                    <i className='bi bi-person-circle'></i>
                                    <input type='text' className='textfield' name='name' placeholder='Email / Phone Number' value={userID} onChange={(e) => setUserID(e.target.value)}/>
                                    <div className="blank"></div>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-lock-fill'></i>
                                    <input type={showPassword ? 'text' : 'password'} className='textfield' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button className='show-password-icon' onClick={toggleShowPassword}>
                                        {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                    </button>
                                </div>
                                <div className='d-flex flex-row feature'>
                                    <div>
                                        <input type='checkbox' name='remember' value='true'/>
                                        <label for='remember'> Remember Me</label>
                                    </div>
                                    <div>
                                        <a href='/#'> Forgot Password? </a>
                                    </div>
                                </div>
                                <input className="mt-4 mb-3 sumbit" type="submit" value="LOGIN" onClick={handleLogin}/>
                                <p>
                                    Doesn't have an Account yet? <Link to="../registration"> Create an Account </Link>
                                </p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
