import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './components/Chatbot.js'; // Adjusted import statement

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Chatbot />
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));
