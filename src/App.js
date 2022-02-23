import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'


// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
 
// hooks
import { useAuthContext } from './Hooks/useAuthContext';


function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              { !user && <Redirect to="/login" /> }
              { user && <Home /> }
            </Route>
            <Route path="/login" exact>
              { !user && <Login /> }
              { user && <Redirect to="/" /> }
            </Route>
            <Route path="/signup" exact>
              { !user && <Signup /> }
              { user && <Redirect to="/" /> }
            </Route>
              
          </Switch>
        </BrowserRouter>
      )}
    </div>
      
  );
}

export default App
