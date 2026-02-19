export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{item.item_name}</h3>
        <span className="text-xs bg-orange-100 text-orange-700 font-bold px-2 py-1 rounded-full">
          Flash Sale
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-4">{item.vendor_name}</p>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-400 line-through">${item.original_price}</span>
          <span className="text-2xl font-black text-green-600 ml-2">${item.discount_price}</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl transition-colors">
          Claim
        </button>
      </div>
    </div>
  );
}
