export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-info">
        <strong>{user.name}</strong>
        <span>{user.email}</span>
      </div>
    </div>
  );
}