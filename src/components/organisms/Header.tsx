import { Link } from "react-router-dom";
import { useCategory } from "../../contexts/CategoryContext";

export default function Header() {
  const { clearCategory } = useCategory();
  
  return (
    <header className="bg-yellow-700/40 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Crafted Gleam</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/products" onClick={clearCategory} className="hover:underline">
          商品一覧
        </Link>
      </nav>
    </header>
  );
}
