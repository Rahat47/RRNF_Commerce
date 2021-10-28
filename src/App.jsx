import { Switch, Route } from 'react-router-dom';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Newsletter from './components/Newsletter';

const App = () => {
    return (
        <main>
            <Announcement />
            <Navbar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={ProductList} />
                <Route exact path='/products/:id' component={ProductPage} />
            </Switch>

            <Newsletter />
            <Footer />
        </main>
    );
};

export default App;
