import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products">
              <AllProducts />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
