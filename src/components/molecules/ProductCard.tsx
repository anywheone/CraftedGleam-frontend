import Image from "../atoms/Image";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import Link from "../atoms/Link";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
};

export default function ProductCard({ id, name, price, imageSrc }: ProductCardProps) {
  return (
    <Link to={`/products/${id}`} className="block border rounded-lg p-4 hover:shadow-lg">
      <Image src={imageSrc} alt={name} className="w-full h-40 rounded-md mb-2" />
      <Heading level={3} className="text-lg">{name}</Heading>
      <Text className="text-right text-green-600 font-bold">{price.toLocaleString()}円</Text>
    </Link>
  );
}
