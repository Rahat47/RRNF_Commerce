import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free shipping on all orders over $100!
        </Container>
    );
};

export default Announcement;