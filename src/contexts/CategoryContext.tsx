import { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  selectedCategory: string | null;
  selectCategory: (id: string) => void;
  clearCategory: () => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useCategory must be used within a CategoryProvider");
  return context;
}

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectCategory = (id: string) => setSelectedCategory(id);
  const clearCategory = () => setSelectedCategory(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, selectCategory, clearCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
