export default function UserCard({ user }) {
  return (
    <div className="user-card" style={cardStyle}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ddd',
  padding: '1rem',
  borderRadius: '8px',
  margin: '10px 0'
};