import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { responsive } from '../utils/responsive';

const Container = styled.div`
    display: flex;

    ${responsive(450, {
        flexDirection: 'column',
    })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    ${responsive(450, {
        alignItems: 'center',
    })}
`;

const Logo = styled.h1``;
const Description = styled.p`
    margin: 1.25rem 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: white;
    background-color: ${props => (props.bg ? props.bg : '#fcf5f5')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.25rem;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    padding: 1.25rem;

    ${responsive(450, {
        backgroundColor: '#fcf5f5',
    })}
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;

    svg {
        margin-right: 1.25rem;
    }
`;

const PaymentContainer = styled.div`
    display: flex;
    margin-top: 1.25rem;
`;

const Payment = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: contain;
    margin-right: 1.25rem;
`;

const Center = styled.div`
    flex: 1;
    padding: 1.25rem;

    ${responsive(450, {
        display: 'none',
    })}
`;

const Title = styled.h3`
    margin-bottom: 1.875rem;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    margin-bottom: 0.625rem;
    font-size: 0.875rem;
    color: #828282;
    cursor: pointer;
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo> RRNF. </Logo>
                <Description>
                    RRNF is a E-Commerce site for buying and selling used and
                    new products. We are a team of 4 people. We are currently in
                    our second year of the University of Toronto.
                </Description>

                <SocialContainer>
                    <SocialIcon bg='#3B5999'>
                        <FacebookIcon />
                    </SocialIcon>

                    <SocialIcon bg='#E4405F'>
                        <InstagramIcon />
                    </SocialIcon>

                    <SocialIcon bg='#55ACEE'>
                        <TwitterIcon />
                    </SocialIcon>

                    <SocialIcon bg='#FF0000'>
                        <YouTubeIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title> Useful Links </Title>
                <List>
                    <ListItem> Home </ListItem>
                    <ListItem> Cart </ListItem>
                    <ListItem> Mens Fashion </ListItem>
                    <ListItem> Womens Fashion </ListItem>
                    <ListItem> Electronics </ListItem>
                    <ListItem> Accessories </ListItem>
                    <ListItem> My Account </ListItem>
                    <ListItem> Order Tracking </ListItem>
                    <ListItem> Contact Us </ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title> Contact Us </Title>

                <ContactItem>
                    <MapIcon />
                    622 Dixie Ave, Toronto, ON M4L 1G8
                </ContactItem>

                <ContactItem>
                    <LocalPhoneIcon />+ 1 416-867-5309
                </ContactItem>

                <ContactItem>
                    <EmailIcon />
                    contact@rrfn.dev
                </ContactItem>

                <PaymentContainer>
                    <Payment src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg' />
                    <Payment src='https://www.mastercard.com/content/dam/mccom/global/logos/logo-mastercard-mobile.svg' />
                    <Payment src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Former_Visa_%28company%29_logo.svg/3072px-Former_Visa_%28company%29_logo.svg.png' />
                    <Payment src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png' />
                    <Payment src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png' />
                </PaymentContainer>
            </Right>
        </Container>
    );
};

export default Footer;
