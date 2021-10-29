import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div`
    padding: 0 1.25rem;
    background-color: #fafafa;
`;
const Wrapper = styled.div`
    padding: 1.25rem;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 1.25rem;
`;

const TopButton = styled.button`
    padding: 0.625rem;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.filled && 'none'};
    background-color: ${props => (props.filled ? 'black' : 'transparent')};
    color: ${props => (props.filled ? 'white' : 'black')};
`;

const TopTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 0.625rem;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 0.625rem;
    object-fit: cover;
`;
const Details = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Name = styled.h3`
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
`;
const ID = styled.span`
    text-transform: uppercase;
`;
const Color = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.color};
`;
const Size = styled.span`
    text-transform: uppercase;
`;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;

    svg {
        cursor: pointer;
    }
`;
const ProductAmount = styled.span`
    font-size: 1.5rem;
    margin: 5px 10px;
`;
const Price = styled.span`
    font-size: 1.875rem;
    font-weight: 200;
`;

const HR = styled.hr`
    margin: 1.25rem 0;
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 1.25rem;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;

    span {
        font-weight: 600;
    }
`;

const SummaryItem = styled.div`
    margin: 1.875rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => (props.bold ? '600' : '300')};
    font-size: ${props => (props.bold ? '1.5rem' : '1rem')};
`;
const SummaryItemText = styled.span`
    text-transform: uppercase;
    letter-spacing: 2px;
`;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
    padding: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background-color: #000;
    color: white;
    width: 100%;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #111;
    }

    &:disabled {
        background-color: #eee;
        color: #aaa;
    }
`;

const Cart = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Your Bag</Title>

                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton filled>Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image
                                    src='https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                                    alt='product'
                                />
                                <Details>
                                    <Name>
                                        <strong>Product:</strong> Some Product
                                    </Name>
                                    <ID>
                                        <strong>ID:</strong> 12345
                                    </ID>
                                    <Color color='black' />
                                    <Size>
                                        <strong>Size:</strong> 37.5
                                    </Size>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <Price>$100</Price>
                            </PriceDetail>
                        </Product>
                        <HR />
                        <Product>
                            <ProductDetail>
                                <Image
                                    src='https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                    alt='product'
                                />
                                <Details>
                                    <Name>
                                        <strong>Product:</strong> Some Product
                                    </Name>
                                    <ID>
                                        <strong>ID:</strong> 12345
                                    </ID>
                                    <Color color='teal' />
                                    <Size>
                                        <strong>Size:</strong> M
                                    </Size>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon />
                                </ProductAmountContainer>
                                <Price>$20</Price>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            Order Summary <span>2 items</span>
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 120</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>
                                Estemated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem bold>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 120 </SummaryItemPrice>
                        </SummaryItem>

                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default Cart;
