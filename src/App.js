
import "./App.css";
import Login from "./Components/Login";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import {Container} from '@mui/material'
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import { Footer } from "./Components/Footer";

function App() {
  
  return (
    <>
      <Router>
        {/* <Login /> */}
        {/* <Registration/> */}
       

        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/Registration" exact component={Registration}/>
        </Switch>
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;
