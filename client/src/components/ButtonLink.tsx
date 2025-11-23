import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition";

const variantClasses: Record<Required<ButtonLinkProps>["variant"], string> = {
  primary:
    "bg-stp-primary text-white shadow-lg shadow-stp-primary/20 hover:bg-stp-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-secondary-dark",
  secondary:
    "border border-stp-primary text-stp-primary hover:border-stp-primary-dark hover:text-stp-primary-dark hover:bg-stp-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-secondary"
};

const ButtonLink = ({ href, children, variant = "primary" }: ButtonLinkProps) => (
  <a className={`${baseClasses} ${variantClasses[variant]}`} href={href}>
    {children}
  </a>
);

export default ButtonLink;
