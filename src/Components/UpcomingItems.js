import React, {useState, useEffect}  from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function UpcomingItems() {

  useEffect(() => {
    fetchUpcomingItems();
  }, []);

  const [upcomingItems, setUpcomingItems] = useState([]);

  const fetchUpcomingItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json();
    //console.log(items.items);
    setUpcomingItems(items.items);
  }

  return (
    <div>
      <h1>Upcoming Items</h1>
      <div className="shop-items-container">
        {upcomingItems.map(item =>(
          <div key={item.itemid}>
          <Link className="shop-items-link" to={`/upcoming/${item.itemid}`} >
            <img className="shop-thumbnail" src={item.item.images.information} alt={item.name}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingItems;
