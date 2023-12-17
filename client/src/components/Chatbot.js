// Chatbot.js
import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    const botMessage = getBotResponse(userMessage);

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: 0, text: userMessage, sender: 'user' },
      { id: 1, text: botMessage, sender: 'bot' },
    ]);

    setUserMessage('');
  };

  const getBotResponse = (userMessage) => {
    // Add more questions about famous books and authors
    switch (userMessage.toLowerCase()) {
      case 'tell me about the great gatsby':
        return 'The Great Gatsby is a novel written by F. Scott Fitzgerald, exploring themes of decadence, idealism, and the American Dream.';
      case 'who wrote pride and prejudice':
        return 'Pride and Prejudice was written by Jane Austen.';
      case 'what is the hobbit about':
        return 'The Hobbit is a fantasy novel by J.R.R. Tolkien, following the journey of Bilbo Baggins as he helps a group of dwarves recover their treasure.';
      case 'tell me about the catcher in the rye':
        return 'The Catcher in the Rye is a novel written by J.D. Salinger, narrated by a teenager named Holden Caulfield who is expelled from prep school.';
      case 'who is the author of 1984':
        return '1984 was written by George Orwell, depicting a dystopian future where a totalitarian regime controls every aspect of life.';
      case 'what is the plot of the shining':
        return 'The Shining is a horror novel by Stephen King, telling the story of Jack Torrance, his family, and their stay at the haunted Overlook Hotel.';
      case 'who wrote the chronicles of narnia':
        return 'The Chronicles of Narnia were written by C.S. Lewis.';
      case 'tell me about the alchemist':
        return 'The Alchemist is a novel by Paulo Coelho, following the journey of Santiago, a young shepherd who dreams of finding a worldly treasure.';
      // Add more questions here...
      default:
        return "I'm sorry, I don't have information about that. Can you please ask another question?";
    }
  };

  return (
    <div style={{ position: 'fixed', top: '50%', right: 0, transform: 'translateY(-50%)', backgroundColor: '#fff' }}>
      <div style={{ height: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {messages.map((message) => (
          <div key={message.id} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
