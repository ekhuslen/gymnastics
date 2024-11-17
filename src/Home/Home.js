import React, { useState, useEffect } from 'react';
import CompetitionCard from '../components/card/CompetitionCard'; 
import competitionData from '../assets/card.json';  
import competition from './Home.module.css'

function Home() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    setCompetitions(competitionData);
  }, []);

  const handleDetailsClick = (id) => {
    console.log("Viewing details for competition with id:", id);
  };

  return (
    <div className={competition.home}>
      <h1>Тэмцээний мэдээлэл</h1>
      <div className={competition.competitionList}>
        {competitions.map(competition => (
          <CompetitionCard
            key={competition.id}
            image={competition.image}
            name={competition.name}
            date={competition.date}
            description={competition.description}
            onDetailsClick={() => handleDetailsClick(competition.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;