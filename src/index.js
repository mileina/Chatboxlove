import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

const Chatbot = lazy(() => import('./components/Chatbot'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Chatbot />
  </Suspense>
);

ReactDOM.render(<App />, document.getElementById('root'));
