import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { responsive } from '../utils/responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 4.375rem;
    margin-bottom: 1.25rem;
`;
const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.25rem;

    ${responsive(450, {
        textAlign: 'center',
    })}
`;
const InputContainer = styled.div`
    width: 50%;
    height: 2.5rem;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    ${responsive(450, {
        width: '80%',
    })}
`;
const Input = styled.input`
    border: none;
    flex: 8;
    text-indent: 2rem;
    font-weight: 300;
    font-size: 1.2rem;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: lightgray;
    }
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #00bcd4;
    }
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get the latest news and updates from us.</Description>
            <InputContainer>
                <Input placeholder='Your Email' />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
