import UserCard from '../components/UserCard';

export default function UserListPage({ users, loading }) {
  return (
    <div className="page">
      <h2>User Directory</h2>
      
      {loading && <div className="loader">Loading data from API...</div>}
      
      {!loading && users.length === 0 && (
        <p>No users found. Try clicking 'View Users' in the nav bar again.</p>
      )}

      <div className="grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}