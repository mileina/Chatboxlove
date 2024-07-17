import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import chatGPT from '../api';

const Chatbot = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [messages, setMessages] = useState([]);

  const questions = [
    { id: 'name', text: 'Quel est votre nom ?' },
    { id: 'age', text: 'Quel âge avez-vous ?' },
    { id: 'music', text: 'Quel est votre genre musical préféré ?', options: ['Rock', 'Pop', 'Jazz', 'Classique', 'Électro', 'Hip-hop'] },
    { id: 'hobby', text: 'Quels sont vos hobbies ?', options: ['Lecture', 'Sport', 'Jeux vidéo', 'Voyage', 'Musique', 'Cuisine'] },
    { id: 'relationship', text: 'Quel type de relation recherchez-vous ?', options: ['Sérieuse', 'Amicale', 'Occasionnelle'] },
    { id: 'location', text: 'Où habitez-vous ?' },
    { id: 'cuisine', text: 'Quelle est votre cuisine préférée ?', options: ['Italienne', 'Chinoise', 'Mexicaine', 'Française', 'Indienne'] },
    { id: 'movie', text: 'Quel est votre genre de film préféré ?', options: ['Romantique', 'Horreur', 'Comédie', 'Drame', 'Science-fiction', 'Action'] },
    { id: 'activity', text: 'Préférez-vous les activités en intérieur ou en extérieur ?', options: ['Intérieur', 'Extérieur'] },
    { id: 'color', text: 'Quelle est votre couleur préférée ?' }
  ];

  const handleAnswer = async (id, answer) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
    setMessages(prev => [...prev, { user: 'You', text: answer }]);
    setStep(step + 1);

    if (step < questions.length - 1) {
      const nextQuestion = questions[step + 1].text;
      setMessages(prev => [...prev, { user: 'Bot', text: nextQuestion }]);
    } else {
      const finalPrompt = `Utilisateur: ${JSON.stringify(answers)}. Donne-moi une réponse complète sur leur compatibilité.`;
      try {
        const response = await chatGPT(finalPrompt);
        setMessages(prev => [...prev, { user: 'Bot', text: response }]);
      } catch (error) {
        console.error('Error fetching data from OpenAI API:', error);
        setMessages(prev => [...prev, { user: 'Bot', text: 'An error occurred while fetching the response from the API.' }]);
      }
    }
  };

  return (
    <div style={styles.chatbot}>
      <div style={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.user === 'You' ? styles.userMessage : styles.botMessage}>
            <strong>{msg.user}: </strong>{msg.text}
          </div>
        ))}
      </div>
      {step < questions.length ? (
        <Question
          question={questions[step]}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
};

const styles = {
  chatbot: {
    width: '400px',
    margin: '50px auto',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  messages: {
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '10px'
  },
  userMessage: {
    textAlign: 'right',
    margin: '5px 0',
    color: 'blue'
  },
  botMessage: {
    textAlign: 'left',
    margin: '5px 0',
    color: 'green'
  }
};

export default Chatbot;
