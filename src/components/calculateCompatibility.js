function calculateCompatibility(answers) {
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
}

export default calculateCompatibility;
