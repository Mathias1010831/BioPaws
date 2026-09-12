type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? `text-center ${className}` : className}>
      <p
        className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-leaf-deep ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-bark text-balance sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-bark/65 sm:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
