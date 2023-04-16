 
import './App.css';
import Login from './Components/Pages/Login'
import { Route, Switch } from "react-router-dom";
import OrderPage from './Components/Pages/OrderPage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/orderPage" component={OrderPage} />
      </Switch>  
    </div>
  );
}

export default App;
