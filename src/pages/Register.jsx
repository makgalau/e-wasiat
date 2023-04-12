import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Register() {
    const [ showPassword1, setShowPassword1 ] = useState(false);

    const toggleShowPassword1 = (event) => {
        event.preventDefault();
        setShowPassword1(!showPassword1);
    }

    const [ showPassword2, setShowPassword2 ] = useState(false);

    const toggleShowPassword2 = (event) => {
        event.preventDefault();
        setShowPassword2(!showPassword2);
    }

    const [registerSuccess, setRegisterSuccess] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [username, setUsername] = useState('');
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

    const handleRegister = (event) => {
        event.preventDefault();
        // login(userID, password);
        setRegisterSuccess(true)
    }

    return (
        <div className='d-flex background'>
            <Container fluid>
                <Row>
                    <Col lg={5} xs={12} className='logo-container'>
                        <div className='d-flex flex-column align-items-center box-container'>
                            <div className='d-flex flex-column align-items-center mt-4'>
                                {/* <img src={require('../assets/e-Wasiat.png')} alt='e-Wasiat' width='80%'/> */}
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}/>
                    <Col lg={5} xs={12}>
                        <div className='d-flex flex-column align-items-center box-container'>
                            <div className='d-flex flex-column align-items-center mt-4'>
                                <h1> Selamat datang di e-Wasiat </h1>
                                <p> Silahkan isi data diri Anda pada formulir di bawah </p>
                            </div>
                            <div className={registerSuccess ? 'hide' : 'show'}>
                                <div className='alert alert-danger' role='alert'>
                                    <p className='mb-0'> Incorrect username or password. </p>
                                </div>
                            </div>
                            <form className='d-flex flex-column align-items-center w-100'>
                                <div className='textfield-container'>
                                    <i className='bi bi-person-circle'></i>
                                    <input type='text' className='textfield' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                                    <div className="blank"></div>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-person-circle'></i>
                                    <input type='text' className='textfield' name='name' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <div className="blank"></div>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-person-circle'></i>
                                    <input type='text' className='textfield' name='name' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                    <div className="blank"></div>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-person-circle'></i>
                                    <input type='text' className='textfield' name='name' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                                    <div className="blank"></div>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-lock-fill'></i>
                                    <input type={showPassword1 ? 'text' : 'password'} className='textfield' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button className='show-password-icon' onClick={toggleShowPassword1}>
                                        {showPassword1 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                    </button>
                                </div>
                                <div className='textfield-container'>
                                    <i className='bi bi-lock-fill'></i>
                                    <input type={showPassword2 ? 'text' : 'password'} className='textfield' name='password' placeholder='Confirm Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    <button className='show-password-icon' onClick={toggleShowPassword2}>
                                        {showPassword2 ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                    </button>
                                </div>
                                <input className="mt-4 mb-3 sumbit" type="submit" value="REGISTER" onClick={handleRegister} />
                                <p>
                                    Already have an Account?
                                    <Link to="../login"> Login with Your Account </Link>
                                </p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;