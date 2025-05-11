import { createContext, useContext, useState, ReactNode } from "react";

// 3つの機能（selectedCategoryの取得、選択、クリア）を持つコンテキストを作成
type CategoryContextType = {
  selectedCategory: string | null;
  selectCategory: (id: string) => void;
  clearCategory: () => void;
};

// 共有の箱を作成(このContextのIDを発行している)し、コンポーネント間で状態を共有、Providerの外ではuseするとエラーになる
// CategoryContextオブジェクトの中にProviderとConsumerが入っている
// Providerは状態を提供する役割、Consumerはその状態を受け取る役割
// ConsumerはuseContextで代用できる(React16以前で主流、hooksがない時代に使われた)
const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// 開発者が使うための窓口となるフック
// useCategory()と呼べば、今の選択状態・選択する関数・クリアする関数が全て取れる
// さらに、「CategoryProvider」の中でしか使えない」安全チェックもしている
export function useCategory() {
  // useContextは、Reactの仮想DOMツリーをたどって、対応するProviderを上に探しに行くhook
  // CategoryContext.Providerで提供された値を取得
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
    // 「この部分のツリー以下は、このvalueを使う」 と仮想DOMに記録
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


// 状態管理の仕組み図解
/* Appツリー(Fiberツリー)
├── CategoryProvider  ← 👈 ここで Context の値がセットされる、Providerの値が変わったら、依存している子コンポーネントは「全て」再レンダリングされる
│    ├── Header
│    └── main
│         └── AppRouter
│              └── HomePage
│                   └── CategoryList
│                        └── CategoryCard  ← 👈 useContext(CategoryContext)上に向かってProviderを探す、Fiber依存登録 
※小規模のテーマ、言語、ユーザー情報などでは、再レンダリングされても問題ない
　巨大ツリー（商品一覧１万件など）では、重くなるので、ReduxやZustandなどの状態管理ライブラリを使う
*/

/* 状態管理ライブラリ比較表
ライブラリ	　　再レンダリング制御	　　　特徴
Context API	　 ツリー単位	　　　　　　 　小規模用途向け、重くなりやすい
Redux	　　　　　useSelectorでstate単位	大規模対応、堅牢で型安全
Zustand	　　　　読んだプロパティだけ	　 軽量・速い、局所購読が自動
Jotai	　　　　　atom単位購読	　　　　　 最小単位で管理、依存関係が明確 */
