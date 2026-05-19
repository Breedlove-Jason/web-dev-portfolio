import type { ButtonHTMLAttributes, ReactNode } from "react";

type NeonButtonVariant = "primary" | "secondary";

type NeonButtonBaseProps = {
  children: ReactNode;
  variant?: NeonButtonVariant;
  className?: string;
};

type NeonButtonAsLink = NeonButtonBaseProps & {
  href: string;
  download?: boolean;
};

type NeonButtonAsButton = NeonButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type NeonButtonProps = NeonButtonAsLink | NeonButtonAsButton;

const variantClasses: Record<NeonButtonVariant, string> = {
  primary:
    "border-cyan/60 bg-cyan/10 text-cyan hover:border-cyan hover:bg-cyan/20",
  secondary:
    "border-violet/50 bg-violet/10 text-text-soft hover:border-magenta hover:bg-magenta/10 hover:text-magenta",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-lg border px-6 py-2.5 text-center text-sm font-medium transition-colors focus-visible:outline-offset-2 sm:text-base";

function joinClasses(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function NeonButton(props: NeonButtonProps) {
  const { children, variant = "primary", className } = props;
  const classes = joinClasses(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, download } = props;
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as NeonButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
