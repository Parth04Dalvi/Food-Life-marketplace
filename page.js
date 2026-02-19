"use client";
import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';

export default function Home() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    // Mocking user location for Fort Wayne
    const lat = 41.0793;
    const lon = -85.1394;
    
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/items?lat=${lat}&lon=${lon}`)
      .then(res => res.json())
      .then(data => setDeals(data));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">
        Food-Life Flash Sales 🍎
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {deals.map(deal => (
          <ItemCard key={deal.id} item={deal} />
        ))}
      </div>
    </main>
  );
}
