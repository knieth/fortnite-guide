import React, {useState, useEffect}  from 'react';
import { Card, ListGroup } from 'react-bootstrap';
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
       <Card className="text-center">
          <Card.Header><h3>{item.name}</h3></Card.Header>
          <Card.Img variant="top" src={item.images.transparent} />
          <Card.Body>
            <Card.Title>{item.description}</Card.Title>
            <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Cost: {item.cost}</ListGroup.Item>
              <ListGroup.Item>Item Type: {item.type}</ListGroup.Item>
              <ListGroup.Item>Obtained: {item.obtained}</ListGroup.Item>
              <ListGroup.Item>Obtained Type: {item.obtained_type}</ListGroup.Item>
              <ListGroup.Item>Ratings: {item.ratings.avgStars}</ListGroup.Item>
              <ListGroup.Item>Number of Votes: {item.ratings.numberVotes}</ListGroup.Item>
            </ListGroup>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Total Points: {item.ratings.totalPoints}</Card.Footer>
        </Card>
    </div>
  );
}

export default Item;
