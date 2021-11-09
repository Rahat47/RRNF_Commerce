import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Newsletter from '../components/Newsletter';
import { responsive } from '../utils/responsive';
const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${responsive(450, {
        padding: '50px 5px',
        flexDirection: 'column',
    })}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 85vh;
    object-fit: cover;

    ${responsive(450, {
        height: '65vh',
    })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;
const Title = styled.h1`
    font-weight: 200;
    font-size: 2.5rem;
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 2.5rem;
`;

const FilterContainer = styled.div`
    width: 40%;
    margin: 1.875rem 0;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 1.25rem;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.25rem;
    font-weight: 200;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;
const FilterSizeOption = styled.option`
    font-size: 1rem;
`;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    ${responsive(450, {
        width: '100%',
    })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

    svg {
        cursor: pointer;
    }
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
`;
const Button = styled.button`
    background-color: white;
    color: #000;
    padding: 15px;
    border: 1.5px solid teal;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const ProductPage = () => {
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image
                        src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        alt='product'
                    />
                </ImageContainer>

                <InfoContainer>
                    <Title>Product Name</Title>

                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Nihil esse pariatur quas, rerum sint cupiditate
                        eum soluta cum reprehenderit at ad consequatur veritatis
                        itaque voluptatem omnis fuga nostrum atque totam.
                    </Description>

                    <Price>$100</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='gray' />
                            <FilterColor color='darkblue' />
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>

                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
        </Container>
    );
};

export default ProductPage;
