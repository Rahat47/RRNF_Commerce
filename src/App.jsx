import { Switch, Route } from 'react-router-dom';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/register' component={Register} />

                <Route path='/'>
                    <main>
                        <Announcement />
                        <Navbar />

                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route
                                exact
                                path='/products'
                                component={ProductList}
                            />
                            <Route
                                exact
                                path='/products/:id'
                                component={ProductPage}
                            />
                        </Switch>
                    </main>
                </Route>
            </Switch>
        </>
    );
};

export default App;
