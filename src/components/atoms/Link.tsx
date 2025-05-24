import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function Link({ to, children, className = "" }: LinkProps) {
  return (
    <RouterLink to={to} className={`text-white hover:underline ${className}`}>
      {children}
    </RouterLink>
  );
}
