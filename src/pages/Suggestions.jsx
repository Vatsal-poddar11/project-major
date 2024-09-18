import React, { useState } from 'react';
const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = process.env.REACT_APP_API_KEY;

const Suggestions = () => {
  const [symptoms, setSymptoms] = useState('');
  const [formattedSuggestions, setFormattedSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await model.generateContent(`I am having ${symptoms}. What are some other symptoms related to it? Don't worry I will consult a doctor. Also please suggest some common medicines that are used for the given symptoms.`);
      const responseText = result.response.text();

      // Process the response text, formatting headings and content
      const lines = responseText.split('\n').filter(Boolean);
      const formatted = lines.map(line => {
        if (line.startsWith('**')) {
          return { type: 'heading', content: line.replace('**', '').trim() };
        } else if (line.startsWith('*')) {
          return { type: 'content', content: line.replace('*', '').trim() };
        }
        return { type: 'newLine', content: '' }; // For empty new line handling
      });

      setFormattedSuggestions(formatted);
    } catch (err) {
      setError('An error occurred while fetching suggestions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#ffffff] text-center">
        Health Suggestions
      </h1>

      <form onSubmit={handleSubmit} className="mb-8 bg-[#ffffff] p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter your symptoms"
          className="border border-[#d1d5db] p-3 w-full rounded-lg focus:outline-none focus:border-[#3b82f6] transition"
          required
        />
        <button
          type="submit"
          className="bg-[#3b82f6] text-[#ffffff] px-4 py-2 rounded-lg w-full mt-4 hover:bg-[#2563eb] transition disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Suggestions'}
        </button>
      </form>

      {error && <p className="text-center text-[#ef4444]">{error}</p>}

      {formattedSuggestions.length > 0 && (
        <div className="mt-8 max-w-2xl mx-auto bg-[#ffffff] p-6 rounded-lg shadow-lg">
          {formattedSuggestions.map((suggestion, index) => (
            <React.Fragment key={index}>
              {suggestion.type === 'heading' && (
                <h2 className="text-xl font-bold text-[#1f2937] mb-4">{suggestion.content}</h2>
              )}
              {suggestion.type === 'content' && (
                <p className="text-[#4b5563] mb-2">{suggestion.content}</p>
              )}
              {suggestion.type === 'newLine' && <br />}
            </React.Fragment>
          ))}
        </div>
      )}

      <footer className="text-center mt-12">
        <p className="text-sm text-[#e3fd3b]">
          <strong>Note:</strong> Please consult a doctor or medical professional for any health concerns.
        </p>
      </footer>
    </div>
  );
};

export default Suggestions;
