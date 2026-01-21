import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUsers } from './api/userService';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch initial users from API
  useEffect(() => {
    getUsers().then(data => setUsers(data)).catch(err => console.error(err));
  }, []);

  // Function to add a new user to the local state
  const addUser = (newUser) => {
    setUsers([newUser, ...users]); // Adds new user to the top
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home onAddUser={addUser} />} />
          <Route path="/users" element={<UserListPage users={users} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;