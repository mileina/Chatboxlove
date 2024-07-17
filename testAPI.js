import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const testAPI = async () => {
  try {
    const response = await axios.get('https://api.openai.com/v1/engines', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      }
    });
    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
  }
};

testAPI();
