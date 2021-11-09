import styled from 'styled-components';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
import { sliderItems } from '../assets/data/data';
import { responsive } from '../utils/responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

    ${responsive(450, {
        display: 'none',
    })}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: transform 800ms ease-in-out;
    transform: translateX(-${props => props.slideIndex * 100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;
    background: #${props => props.bg};
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    height: 80%;
    width: 100%;
    object-fit: cover;
    display: block;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = direction => {
        if (direction === 'left') {
            setSlideIndex(
                slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1
            );
        } else {
            setSlideIndex(
                slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0
            );
        }
    };

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowForwardIosOutlinedIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;
