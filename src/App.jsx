import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getUsers } from './api/userService';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserListPage from './pages/UserListPage';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const handleViewUsersClick = useCallback(async () => {
    // CACHE CHECK: If already fetched or currently loading, do nothing
    if (hasFetched || loading) return;

    setLoading(true);
    try {
      console.log("📡 API Call triggered via Navbar click");
      const apiData = await getUsers();
      setUsers((prev) => [...prev, ...apiData]);
      setHasFetched(true);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  }, [hasFetched, loading]);

  const addUser = (newUser) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  return (
    <Router>
      {/* Pass the click handler to the Navbar */}
      <Navbar onViewClick={handleViewUsersClick} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home onAddUser={addUser} />} />
          <Route 
            path="/users" 
            element={<UserListPage users={users} loading={loading} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;