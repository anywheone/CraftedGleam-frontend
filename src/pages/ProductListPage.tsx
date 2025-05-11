import { useNavigate } from "react-router-dom";
import ProductList from "../components/organisms/ProductList";
import Button from "../components/atoms/Button";
import { useCategory } from "../contexts/CategoryContext";

const products = [
  { id: "1", name: "シルバーリング", category: "rings", price: 12000, imageSrc: "/src/assets/images/ring.jpg" },
  { id: "2", name: "ゴールドネックレス", category: "necklaces", price: 18000, imageSrc: "/src/assets/images/necklace.jpg" },
  { id: "3", name: "パールブレスレット", category: "bracelets", price: 15000, imageSrc: "/src/assets/images/bracelet.jpg" },
  { id: "4", name: "ゴールドリング", category: "rings", price: 12000, imageSrc: "/src/assets/images/ring.jpg" },
  { id: "5", name: "シルバーネックレス", category: "necklaces", price: 18000, imageSrc: "/src/assets/images/necklace.jpg" },
  { id: "6", name: "グッチブレスレット", category: "bracelets", price: 15000, imageSrc: "/src/assets/images/bracelet.jpg" },
];

export default function ProductListPage() {
  /* const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); */
  const navigate = useNavigate();
  const { selectedCategory } = useCategory(); // ✅ Contextから選択されたカテゴリを取得

  // ✅ カテゴリによるフィルタ
  const filteredProducts = selectedCategory
  ? products.filter((p) => p.category === selectedCategory)
  : products;
  
  return (
    <div className="p-4">
      <Button 
        onClick={() => navigate(-1)} 
        className=""
      >
        ← 戻る
      </Button>
      <h1 className="text-2xl font-bold mb-4">商品一覧 ({selectedCategory ?? "全て"})</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}
