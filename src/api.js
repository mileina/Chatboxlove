import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || 'default_value_if_undefined';

const chatGPT = async (prompt) => {
  try {
    if (!API_KEY) {
      throw new Error('OpenAI API key is missing');
    }

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 150,
        temperature: 0.5,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('OpenAI API Response:', response.data);

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('Empty response received from OpenAI API');
    }
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    throw error;
  }
};

export default chatGPT;
