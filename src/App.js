import React from 'react';
import { Carousel } from 'react-bootstrap';
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
  <div className="home-slider">
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgplaceholder.com/420x320"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgplaceholder.com/420x320"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imgplaceholder.com/420x320"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <UpcomingItems/>
    
  </div>
);

export default App;
