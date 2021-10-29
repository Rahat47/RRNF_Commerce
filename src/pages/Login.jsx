import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
            center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 1.25rem;
    width: 25%;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
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

const LinkText = styled.span`
    font-size: 0.75rem;
    margin: 20px 0;
    margin-bottom: 5px;

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

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login to your account</Title>
                <Form autoComplete='off'>
                    <Input name='username' placeholder='Username' />
                    <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                    />

                    <Button>Login</Button>

                    <LinkText>
                        Forgot your password?{' '}
                        <Link to='/forgot-password'>Reset</Link>
                    </LinkText>

                    <LinkText>
                        Don't have an Account?{' '}
                        <Link to='/register'>Register</Link>
                    </LinkText>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
