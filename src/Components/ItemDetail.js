import React, {useState, useEffect}  from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Item({match}) {

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
      images:{}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  }

  return (
    <div className="App">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <img src={item.images.transparent} alt={item.name}/>
    </div>
  );
}

export default Item;
