const CategoryFilter = ({ categories, setCategory }) => {
  return (
    <div className="px-4 py-4 w-full max-w-xs">
      <label htmlFor="category-select" className="block text-sm font-bold text-gray-700 mb-2">
        Filter by Category
      </label>
      <select
        id="category-select"
        onChange={(e) => setCategory(e.target.value)}
        className="block w-full px-4 py-3 bg-white border border-gray-200 rounded-xl 
                   text-gray-700 font-medium focus:ring-2 focus:ring-blue-500 
                   focus:border-transparent outline-none shadow-sm appearance-none cursor-pointer"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 1rem center',
          backgroundSize: '1em'
        }}
      >
        <option value="">All Items</option>
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;