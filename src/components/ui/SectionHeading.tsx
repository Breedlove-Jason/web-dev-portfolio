type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="space-y-3">
      <p className="font-mono text-xs uppercase tracking-[0.3em] sm:text-sm">
        <span className="text-cyan">{eyebrow}</span>
        <span className="text-magenta">{" //"}</span>
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-text-soft sm:text-4xl md:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-prose text-base leading-relaxed text-text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
