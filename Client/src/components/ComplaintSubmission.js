
import React, { useState } from 'react';
import axios from 'axios';

function SubmitComplaint() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    user: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/complaints', formData);
      alert('Complaint submitted successfully');
      setFormData({ title: '', description: '', category: '', user: '' });
    } catch (error) {
      alert('Error submitting complaint');
    }
  };

  return (
    <div>
      <h2>Submit a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Academic">Academic</option>
          <option value="Behavioral">Behavioral</option>
          <option value="Harassment">Harassment</option>
        </select>
        <input
          type="text"
          name="user"
          placeholder="Your Name"
          value={formData.user}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default SubmitComplaint;
