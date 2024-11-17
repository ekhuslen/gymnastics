import React from 'react';
import csscard from './CompetitionCard.module.css'; 

function CompetitionCard({ image, name, date, description, onDetailsClick }) {
  return (
    <div className={csscard.competitionCard}>
      <img src={image} alt={name} className={csscard.competitionImage} />
      <div className={csscard.competitionDetails}>
        <h2 className={csscard.competitionName}>{name}</h2>
        <p className={csscard.competitionDate}>{date}</p>
        <p className={csscard.competitionDescription}>{description}</p>
      </div>
      <button className={csscard.detailsButton} onClick={onDetailsClick}>Дэлгэрэнгүй</button>
    </div>
  );
}

export default CompetitionCard;
