import React, {useState, useEffect}  from 'react';
import '../App.css';

function Challenges() {

 

  useEffect(() => {
    fetchItems();
  }, []);

  const [challenges, setChallenges] = useState([]);

  const [week, setWeek] = useState([]);

  const [currentWeek, setcurrentWeek] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/challenges/get');
    const challenges = await data.json();
    console.log(challenges);
    setChallenges(challenges);
    const thisWeek = Object.values(challenges.challenges)[Object.values(challenges.challenges).length - 1];
    setcurrentWeek(thisWeek);
    setWeek(challenges.challenges);
    console.log('thisweek',thisWeek);
    //setcurrentWeek(challenges.currentweek);
  }

  
  


  return (

    

    <div className="challenges-container">
      <h1>Current Week Challenges</h1>

       <p>Current Week: {challenges.currentweek}</p>
       <p>Season: {challenges.season}</p>
       {
         
         currentWeek.map(thisweek => (
           <div key={thisweek.identifier} >
              <h3>{thisweek.challenge}</h3>
              <p>Difficulty: {thisweek.difficulty}</p>
              <p>Stars: {thisweek.stars}</p>
              <p>Total: {thisweek.total}</p>
           </div>
         ))
       }
       
    </div>
  );
}

export default Challenges;
