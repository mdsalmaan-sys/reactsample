import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({ onAddUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields");

    const newUser = {
      id: Date.now(), // Temporary ID
      name,
      email
    };

    onAddUser(newUser);
    navigate('/users'); // Redirect to list after adding
  };

  return (
    <div className="form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="User Name" 
          value={name} onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" placeholder="Email Address" 
          value={email} onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}