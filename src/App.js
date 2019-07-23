import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './Components/ItemDetail';
import Challenges from './Components/Challenges';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
          <Route path="/upcoming/:id" component={ItemDetail}/>
          <Route path="/challenges" component={Challenges}/>
        </Switch>
        
      </div>
    </Router>
  );
}



export default App;
