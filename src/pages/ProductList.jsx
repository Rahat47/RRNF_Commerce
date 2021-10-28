import styled from 'styled-components';
import Products from '../components/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin: 1.25rem;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 1.25rem;
`;

const FilterText = styled.span`
    font-size: 1.25rem;
    font-weight: 600;
    margin-right: 1.25rem;
`;

const Select = styled.select`
    padding: 0.625rem;
    margin-right: 1.25rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: #fff;
    color: #000;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

const Option = styled.option`
    font-size: 1rem;
    font-weight: 600;
`;

const ProductList = () => {
    return (
        <Container>
            <Title>Product List</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue=''>
                        <Option value='' disabled selected>
                            Color
                        </Option>
                        <Option value='red'>Red</Option>
                        <Option value='blue'>Blue</Option>
                        <Option value='green'>Green</Option>
                        <Option value='yellow'>Yellow</Option>
                        <Option value='black'>Black</Option>
                        <Option value='white'>White</Option>
                    </Select>

                    <Select defaultValue=''>
                        <Option value='' disabled selected>
                            Size
                        </Option>
                        <Option value='xs'>XS</Option>
                        <Option value='s'>S</Option>
                        <Option value='m'>M</Option>
                        <Option value='l'>L</Option>
                        <Option value='xl'>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>

                    <Select defaultValue='newest'>
                        <Option value='newest' selected>
                            Newest
                        </Option>
                        <Option value='price_asc'>Price (asc)</Option>
                        <Option value='price_desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products />
        </Container>
    );
};

export default ProductList;
