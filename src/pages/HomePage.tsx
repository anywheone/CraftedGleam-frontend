import CategoryList from "../components/organisms/CategoryList";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../contexts/CategoryContext";
import { useEffect } from "react";

const categories = [
  { id: "rings", title: "リング", imageSrc: "/src/assets/images/ring.jpg" },
  { id: "necklaces", title: "ネックレス", imageSrc: "/src/assets/images/necklace.jpg" },
  { id: "bracelets", title: "ブレスレット", imageSrc: "/src/assets/images/bracelet.jpg" },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { selectCategory, clearCategory } = useCategory();

  useEffect(() => {
    clearCategory(); // ✅ ホームに戻ったら選択クリア
  }, []);

  const handleSelect = (id: string) => {
    selectCategory(id);              // ✅ Contextでカテゴリ選択状態を更新
    navigate(`/products?category=${id}`); // ✅ ページ遷移
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">カテゴリーを選択</h1>
      <CategoryList
        categories={categories}
        // onSelectCategory={(id) => navigate(`/products?category=${id}`)}
        onSelectCategory={handleSelect} // ✅ カテゴリ選択時の処理を渡す
      />
    </div>
  );
}

