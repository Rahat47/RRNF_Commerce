import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { responsive } from '../utils/responsive';

//* Styled Elements
const Container = styled.div`
    height: 60px;

    ${responsive(450, {
        height: '50px',
    })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${responsive(450, {
        padding: '10px 0',
    })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${responsive(450, {
        display: 'none',
    })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid #ccc;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;

    ${responsive(450, {
        width: '50px',
    })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;

    a {
        text-decoration: none;
        color: #333;
    }

    ${responsive(450, {
        fontSize: '1rem',
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${responsive(450, {
        justifyContent: 'center',
        flex: 2,
    })}
`;

const MenuItem = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;

    ${responsive(450, {
        fontSize: '0.75rem',
        marginLeft: '10px',
    })}
`;

//* Component
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input type='text' placeholder='Search...' />
                        <Search
                            style={{
                                color: 'gray',
                                fontSize: '16px',
                                cursor: 'pointer',
                            }}
                        />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to='/'>RRNF-Commerce</Link>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem to='/register'>Register</MenuItem>
                    <MenuItem to='/login'>Signin</MenuItem>
                    <MenuItem to='/cart'>
                        <Badge badgeContent={100} max={99} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
