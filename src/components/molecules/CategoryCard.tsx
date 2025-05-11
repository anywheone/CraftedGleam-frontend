import Image from "../atoms/Image";
import Heading from "../atoms/Heading";

type CategoryCardProps = {
  title: string;
  imageSrc: string;
  onClick: () => void;
};

export default function CategoryCard({ title, imageSrc, onClick }: CategoryCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer" onClick={onClick}>
      <Image src={imageSrc} alt={title} className="w-full h-40 rounded-md mb-2" />
      <Heading level={3} className="text-center">{title}</Heading>
    </div>
  );
}
