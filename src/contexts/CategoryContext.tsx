import { createContext, useContext, useState, ReactNode } from "react";

// 3つの機能（selectedCategoryの取得、選択、クリア）を持つコンテキストを作成
type CategoryContextType = {
  selectedCategory: string | null;
  selectCategory: (id: string) => void;
  clearCategory: () => void;
};

// 共有の箱を作成し、コンポーネント間で状態を共有、Providerの外ではuseするとエラーになる
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// 開発者が使うための窓口となるフック
// useCategory()と呼べば、今の選択状態・選択する関数・クリアする関数が全て取れる
// さらに、「CategoryProvider」の中でしか使えない」安全チェックもしている
export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useCategory must be used within a CategoryProvider");
  return context;
}

// 子供コンポーネント（children）に selectedCategory や selectCategory 関数を配る役割
// children ＝ <CategoryProvider> で包んだ中身のコンポーネント
// 例えば、<CategoryProvider> <Header /> </CategoryProvider> の場合、HeaderでuseCategory()が使える
export function CategoryProvider({ children }: { children: ReactNode }) {

  // selectedCategoryの状態を管理するためのuseStateフック
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // selectedCategoryを取得するための関数
  const selectCategory = (id: string) => setSelectedCategory(id);
  // selectedCategoryをクリアするための関数
  const clearCategory = () => setSelectedCategory(null);

  return (
    // CategoryContext.Provider = 提供者、value = 状態や関数、children = 配る対象
    <CategoryContext.Provider value={{ selectedCategory, selectCategory, clearCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

// 以下の場合、HeaderやAppRouterがchildrenで、それら子供コンポーネント内でuseCategory()を使えるようになる
{/* <CategoryProvider>
  <Header />
  <main className="p-4">
    <AppRouter />
  </main>
</CategoryProvider> */}
