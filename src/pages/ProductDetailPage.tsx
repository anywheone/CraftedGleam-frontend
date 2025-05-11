import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/atoms/Button";

const products = [
  { id: "1", name: "シルバーリング", category: "rings", price: 12000, imageSrc: "/src/assets/images/ring.jpg" },
  { id: "2", name: "ゴールドネックレス", category: "necklaces", price: 18000, imageSrc: "/src/assets/images/necklace.jpg" },
  { id: "3", name: "パールブレスレット", category: "bracelets", price: 15000, imageSrc: "/src/assets/images/bracelet.jpg" },
  { id: "4", name: "ゴールドリング", category: "rings", price: 12000, imageSrc: "/src/assets/images/ring.jpg" },
  { id: "5", name: "シルバーネックレス", category: "necklaces", price: 18000, imageSrc: "/src/assets/images/necklace.jpg" },
  { id: "6", name: "グッチブレスレット", category: "bracelets", price: 15000, imageSrc: "/src/assets/images/bracelet.jpg" },
];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // 商品をIDで検索
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-4">商品が見つかりませんでした。</div>;
  }

  return (
    <div className="p-4">
      <Button 
        onClick={() => navigate(-1)} 
        className=""
      >
        ← 戻る
      </Button>
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.imageSrc} alt={product.name} className="w-64 h-64 object-cover mb-4" />
      <p className="text-lg mb-2">価格: ¥{product.price.toLocaleString()}</p>
      <p className="text-sm text-gray-600">カテゴリ: {product.category}</p>
    </div>
  );
}
