import React from 'react';
import UpcomingItems from './UpcomingItems';
import News from './News';
import Footer from './Footer';
import '../App.css';

function Home() {



  return (

    
    <div>
        <div>
            <News/>
        </div>
        <div>
            <UpcomingItems/>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
