export const dynamic = 'force-static'; // ⬅Force SSG (optional if default)

export default async function HomePage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const news = await res.json();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mini Project 4: News Website </h1><br />
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <a href={`/article/${item.id}`} style={{ textDecoration: 'underline' }}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
