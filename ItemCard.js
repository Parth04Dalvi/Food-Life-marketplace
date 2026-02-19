export default function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-orange-500 transition-all">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold text-gray-900">{item.item_name}</h2>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{item.vendor_name}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-gray-400 line-through text-sm">${item.original_price}</span>
            <span className="text-2xl font-black text-orange-600 ml-2">${item.discount_price}</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600">
            Claim
          </button>
        </div>
      </div>
    </div>
  );
}
