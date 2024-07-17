const chai = require('chai');
const expect = chai.expect;

const calculateCompatibility = require('../src/components/calculateCompatibility');

describe('Compatibility Calculation', function() {
  it('should return 90 for a perfect match', function() {
    const answers = {
      age: 25,
      music: 'Pop',
      hobby: 'Jeux vidéo',
      relationship: 'Sérieuse',
      location: 'Paris',
      cuisine: 'Italienne',
      movie: 'Science-fiction',
      activity: 'Extérieur',
      color: 'Bleu'
    };
    const score = calculateCompatibility(answers);
    expect(score).to.equal(90);
  });

  it('should return 0 for no match', function() {
    const answers = {
      age: 40,
      music: 'Classique',
      hobby: 'Lecture',
      relationship: 'Occasionnelle',
      location: 'Lyon',
      cuisine: 'Chinoise',
      movie: 'Romantique',
      activity: 'Intérieur',
      color: 'Rouge'
    };
    const score = calculateCompatibility(answers);
    expect(score).to.equal(0);
  });
});
