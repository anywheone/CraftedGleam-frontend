import type { JSX } from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ level = 1, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`font-bold ${className}`}>
      {children}
    </Tag>
  );
}
