import './App.css';
import { Router, Switch } from 'react-router-dom';
import { history } from './helpers';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/loginPage';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpPage from './pages/registerPage';
const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path='/login' component={LoginPage} />
          <PublicRoute exact path='/register' component={SignUpPage} />
          <PrivateRoute exact path='/' component={Home} />
        </Switch>
      </Router>
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
