import React, {useState, useEffect}  from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/store/get');
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  }

  return (
    <div>
      <h1>Daily Items</h1>
      <div className="shop-items-container">
        {items.map(item =>(
          <div key={item.itemid}>
          <Link className="shop-items-link" to={`/shop/${item.itemid}`} >
            <img className="shop-thumbnail" src={item.item.images.information} alt={item.name}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
