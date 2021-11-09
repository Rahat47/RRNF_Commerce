import styled from 'styled-components';
import { categories } from '../assets/data/data';
import { responsive } from '../utils/responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${responsive(450, {
        flexDirection: 'column',
    })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(category => (
                <CategoryItem item={category} key={category.id} />
            ))}
        </Container>
    );
};

export default Categories;
