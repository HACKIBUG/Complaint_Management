import React, { useState } from 'react';
import axios from 'axios';

const SubmitComplaint = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post(
        'http://localhost:5000/api/complaint/submit',
        { title, description },
        { headers: { 'x-auth-token': token } }
      );

      alert('Complaint submitted successfully');
    } catch (err) {
      console.error('Complaint submission failed');
    }
  };

  return (
    <div>
      <h2>Submit a Complaint</h2>
      <input
        type="text"
        placeholder="Complaint Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Complaint Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitComplaint;
