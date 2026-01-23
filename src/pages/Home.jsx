import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ onAddUser }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    onAddUser({ id: Date.now(), ...formData });
    navigate('/users');
  };

  return (
    <div className="page">
      <h2>Add New Member</h2>
      <form onSubmit={handleAdd} className="form">
        <input 
          type="text" placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
        />
        <input 
          type="email" placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <button type="submit">Add to Directory</button>
      </form>
    </div>
  );
}