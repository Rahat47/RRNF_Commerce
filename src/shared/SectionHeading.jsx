import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 10px;
`;

const SectionTitle = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;

    @media (max-width: 768px) {
        font-size: 3rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
`;

const SectionHeading = () => {
    return (
        <Container>
            <SectionTitle>Title</SectionTitle>
            <Subtitle>Subtitle</Subtitle>
        </Container>
    );
};

export default SectionHeading;
