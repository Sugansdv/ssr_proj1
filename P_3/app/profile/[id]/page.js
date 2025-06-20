// app/profile/[id]/page.js

export async function generateMetadata({ params }) {
  return {
    title: `User Profile - ${params.id}`,
  };
}

export default async function ProfilePage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
    cache: 'no-store', //  Important for SSR - disables static caching
  });

  if (!res.ok) {
    return <div>User not found</div>;
  }

  const user = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h4>Mini Project 3: User Profile Page </h4><br />
      <h1>User Profile (ID: {user.id})</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>City:</strong> {user.address.city}</p>
    </main>
  );
}
