import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Login = React.lazy(() => import('./Components/LoginPage'));
const Home = React.lazy(() => import('./Components/Home'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <BrowserRouter>
          <React.Suspense fallback={loading()}>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/home" name="Home" render={props => <Home {...props}/>} />
          </React.Suspense>
      </BrowserRouter>
  );
}

export default App;
