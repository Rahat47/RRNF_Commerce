import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { responsive } from '../utils/responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 1.25rem;
    width: 40%;
    background-color: white;

    ${responsive(450, {
        width: '80%',
    })}
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    font-weight: 300;

    &:focus {
        outline: none;
        border: 1px solid #000;
    }

    &::placeholder {
        color: #ccc;
    }
`;

const Agreement = styled.span`
    font-size: 0.75rem;
    margin: 20px 0;

    a {
        color: #00aaff;
        text-decoration: none;
    }
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #00aaff;
    }
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Register for an Account</Title>
                <Form autoComplete='off'>
                    <Input
                        required
                        aria-required
                        name='firstname'
                        placeholder='First Name'
                    />
                    <Input
                        required
                        aria-required
                        name='lastname'
                        placeholder='Last Name'
                    />
                    <Input
                        required
                        aria-required
                        type='email'
                        name='email'
                        placeholder='Email'
                    />
                    <Input
                        name='username'
                        minLength={3}
                        placeholder='Username'
                        required
                        aria-required
                    />
                    <Input
                        required
                        aria-required
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    <Input
                        required
                        aria-required
                        type='password'
                        name='confirm'
                        placeholder='Confirm Password'
                    />
                    <Agreement>
                        By clicking Register, you agree to our{' '}
                        <a href='#!'>Terms, Data Policy</a> and{' '}
                        <a href='#!'>Cookie Policy</a>. You may receive SMS
                        notifications from us and can opt out at any time.
                    </Agreement>
                    <Button>Register</Button>

                    <Agreement
                        style={{
                            marginLeft: 'auto',
                        }}
                    >
                        Already have an account? <Link to='/login'>Login</Link>
                    </Agreement>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
