import ProductCard from "../molecules/ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
};

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageSrc={product.imageSrc}
        />
      ))}
    </div>
  );
}
