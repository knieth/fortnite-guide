import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ItemDetail from './Components/ItemDetail';
import UpcomingItems from './Components/UpcomingItems';
import News from './Components/News';
import Challenges from './Components/Challenges';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={ItemDetail}/>
          <Route path="/upcoming/:id" component={ItemDetail}/>
          <Route path="/news" component={News}/>
          <Route path="/challenges" component={Challenges}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <UpcomingItems/>
    
  </div>
);

export default App;
