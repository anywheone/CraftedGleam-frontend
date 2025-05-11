type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className = "" }: TextProps) {
  return <p className={`text-gray-700 ${className}`}>{children}</p>;
}
