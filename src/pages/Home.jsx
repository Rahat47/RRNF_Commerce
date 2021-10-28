import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';
const Home = () => {
    return (
        <main>
            {/* Slider */}
            <Slider />

            {/* Categories */}
            <Categories />

            {/* Products */}
            <Products />

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;
