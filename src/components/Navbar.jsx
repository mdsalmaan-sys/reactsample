import { Link } from 'react-router-dom';

export default function Navbar({ onViewClick }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">UserSPA</div>
      <div className="nav-links">
        <Link to="/">Home   |   </Link>
        {/* Trigger API call when this specific link is clicked */}
        <Link to="/users" onClick={onViewClick} className="nav-btn">
            View Users
        </Link>
      </div>
    </nav>
  );
}