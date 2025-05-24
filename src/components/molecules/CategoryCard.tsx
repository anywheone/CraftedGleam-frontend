import Image from "../atoms/Image";
import Heading from "../atoms/Heading";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
  onClick: () => void;
};

export default function CategoryCard({ title, imageSrc, onClick }: CategoryCardProps) {
  return (
    <div className="border rounded-lg p-2 w-48 hover:shadow-lg cursor-pointer" onClick={onClick}>
      <Image src={imageSrc} alt={title} className="w-full h-32 object-contain mx-auto p-1 mb-2" />
      <Heading level={3} className="text-center text-white">{title}</Heading>
    </div>
  );
}
