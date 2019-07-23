import React, {useState, useEffect}  from 'react';
import { Carousel,Image } from 'react-bootstrap';
import '../App.css';

function News() {

 

  useEffect(() => {
    fetchItems();
  }, []);

  const [news, setNews] = useState([]);
 
  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get');
    const news = await data.json();
    console.log(news.entries);
    setNews(news.entries);
  }

  

  const NewsData = news.map(news => (
       
        
    <Carousel.Item key={news.title}>
        <Image
        className="d-block w-100"
        src={news.image}
        alt="images"
        fluid
        />
        <Carousel.Caption>
        <h3>{news.title}</h3>
        <p>{news.body}</p>
        <p>{new Date(news.time * 1000).toLocaleDateString()}</p>
        </Carousel.Caption>
    </Carousel.Item>
    
));


return (


<div className="home-slider" >
    <Carousel fade={true}>
    {
        NewsData
    }
    </Carousel>

</div>
);
}

export default News;
