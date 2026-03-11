import { Search } from "lucide-react"; // Install lucide-react or use a SVG

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm 
                    placeholder-gray-400 text-gray-700 focus:bg-white focus:ring-2 
                    focus:ring-blue-500 outline-none transition-all shadow-inner"
        />
    </div>
  );
};

export default SearchBar;