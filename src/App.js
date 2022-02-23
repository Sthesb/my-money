import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// Pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
 
// hooks
import { useAuthContext } from './Hooks/useAuthContext';


function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="App">
      { authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/login" exact><Login /></Route>
            <Route path="/signup" exact><Signup/></Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
      
  );
}

export default App
