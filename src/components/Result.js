import React from 'react';

const Result = ({ answers }) => {
  const compatibilityScore = calculateCompatibility(answers);

  return (
    <div>
      <h2>Résultat de Compatibilité</h2>
      <p>Pinya, le score de compatibilité de {answers.name} est : {compatibilityScore}%</p>
      <ul>
        <li>Nom : {answers.name}</li>
        <li>Âge : {answers.age}</li>
        <li>Genre musical préféré : {answers.music}</li>
        <li>Hobbies : {answers.hobby}</li>
        <li>Type de relation recherchée : {answers.relationship}</li>
        <li>Lieu de résidence : {answers.location}</li>
        <li>Cuisine préférée : {answers.cuisine}</li>
        <li>Genre de film préféré : {answers.movie}</li>
        <li>Activités préférées : {answers.activity}</li>
        <li>Couleur préférée : {answers.color}</li>
      </ul>
    </div>
  );
};

const calculateCompatibility = (answers) => {
  let score = 0;
  if (answers.age > 18 && answers.age < 35) score += 10;
  if (answers.music === 'Pop') score += 10;
  if (answers.hobby === 'Jeux vidéo') score += 10;
  if (answers.relationship === 'Sérieuse') score += 10;
  if (answers.location && answers.location.toLowerCase() === 'paris') score += 10;
  if (answers.cuisine === 'Italienne') score += 10;
  if (answers.movie === 'Science-fiction') score += 10;
  if (answers.activity === 'Extérieur') score += 10;
  if (answers.color === 'Bleu') score += 10;

  return score;
};

export default Result;
