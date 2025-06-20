
export const dynamic = 'force-dynamic'; // ⬅ Force SSR

export default async function ArticlePage({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return <p>Article not found.</p>;

  const article = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </main>
  );
}
