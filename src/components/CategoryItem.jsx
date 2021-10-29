import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
const Info = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    transition: all 0.5s ease-in-out;
`;

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    overflow: hidden;

    &:hover ${Info} {
        opacity: 1;
        top: 0;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
    const history = useHistory();

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button
                    onClick={() => {
                        history.push(`/products`);
                    }}
                >
                    Shop Now
                </Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
