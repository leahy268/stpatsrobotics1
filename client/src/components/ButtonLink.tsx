import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variantClasses: Record<Required<ButtonLinkProps>["variant"], string> = {
  primary:
    "bg-gradient-to-r from-stp-primary-dark via-stp-primary to-stp-primary-light text-white shadow-lg shadow-stp-primary-dark/30 hover:from-stp-primary-dark hover:via-stp-primary-dark hover:to-stp-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-accent",
  secondary:
    "border-2 border-white/70 text-white/80 hover:border-white hover:text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stp-accent"
};

const ButtonLink = ({ to, children, variant = "primary", external }: ButtonLinkProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]}`;
  const isExternal =
    external ??
    (to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("tel:") || to.startsWith("/assets"));

  if (isExternal) {
    return (
      <a className={classes} href={to} target={to.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
};

export default ButtonLink;
