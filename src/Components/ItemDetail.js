import React, {useState, useEffect}  from 'react';
import '../App.css';

function Item({match}) {

  

  useEffect(() => {

    const fetchItem = async () => {
      const fetchitem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);
      const item = await fetchitem.json();
      console.log(item);
      setItem(item);
    }

    fetchItem();
  },[match.params.id]);

  const [item, setItem] = useState({
      images:{
        featured:{}
      },
      ratings:{}
  });

  

  return (
    <div className="item-detail-container">
        <h1>{item.name}</h1>
        <img className="itemDetail-image" src={item.images.background} alt={item.name}/>
        <div>
          
          <p>{item.description}</p>
          <p>Cost: {item.cost}</p>
          <p>Item Type: {item.type}</p>
          <p>Rarity: {item.rarity}</p>
          <p>Obatained: {item.obtained}</p>
          <p>Obtained Type: {item.obtained_type}</p>
          <p>Ratings: {item.ratings.avgStars}</p>
          <p>Number of Votes: {item.ratings.numberVotes}</p>
          <p>Total Points: {item.ratings.totalPoints}</p>
        </div>
    </div>
  );
}

export default Item;
