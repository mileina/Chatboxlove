import axios from 'axios';

const API_KEY = 'sk-proj-rbaPgJrlcenbWbQjfyciT3BlbkFJsa5JMX4is5HfVhquoEuc';

const chatGPT = async (prompt) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 150,
      temperature: 0.5,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    throw error;
  }
};

export default chatGPT;
