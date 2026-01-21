import UserCard from '../components/UserCard';

export default function UserListPage({ users }) {
  return (
    <div>
      <h2>Existing & New Users</h2>
      <div className="list-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}