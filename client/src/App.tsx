import { useEffect, useState } from 'react'

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Conexión al backend de NestJS
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error conectando al server:", err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>BerryLink B2B - Panel de Control</h1>
      <hr />
      <h2>Lista de Productos (Datos Reales de Supabase)</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price} | Stock: {p.stock}
          </li>
        ))}
      </ul>
      {products.length === 0 && <p>Cargando fresas...</p>}
    </div>
  )
}

export default App