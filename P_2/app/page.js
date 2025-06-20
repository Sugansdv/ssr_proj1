import Link from 'next/link';
import products from '@/data/products'; 

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Mini Project 2: Product Catalog with SSG </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ margin: '1rem 0' }}>
            <Link href={`/products/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
