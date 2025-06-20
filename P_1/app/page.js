export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1> Mini Project 1: Blog Listing with SSR </h1>
      {posts.map((post) => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </main>
  );
}