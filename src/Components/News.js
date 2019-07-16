import React, {useState, useEffect}  from 'react';
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
    <div key={news.title} className="news-container">
       <h3>{news.title}</h3>
       <img src={news.image} alt=""/>
       <p>{news.body}</p>
       <p>{new Date(news.time * 1000).toDateString()}</p>
    </div>
));


  return (

    

    <div>
      <h1>News</h1>
     {
        NewsData
     }
    </div>
  );
}

export default News;
