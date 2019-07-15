import React, {useState, useEffect}  from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  }

  return (
    <div className="items-container">
      {items.map(item =>(
        <div key={item.itemid}>
        <Link to={`/shop/${item.itemid}`}>
          <img className="thumbnail" src={item.item.images.transparent} alt={item.name}/>
          <h1 >
            {item.name}
          </h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Shop;
