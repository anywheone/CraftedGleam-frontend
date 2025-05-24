import CategoryCard from "../molecules/CategoryCard";

type Category = {
  id: string;
  title: string;
  imageSrc: string;
};

type CategoryListProps = {
  categories: Category[];
  onSelectCategory: (id: string) => void;
};

export default function CategoryList({ categories, onSelectCategory }: CategoryListProps) {

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {categories.map((c) => (
        <CategoryCard
          key={c.id}
          title={c.title}
          imageSrc={c.imageSrc}
          onClick={() => onSelectCategory(c.id)}
        />
      ))}
    </div>
  );
}
