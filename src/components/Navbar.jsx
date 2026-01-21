import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home (Add User)</Link>
      <Link to="/users">User List</Link>
    </nav>
  );
}