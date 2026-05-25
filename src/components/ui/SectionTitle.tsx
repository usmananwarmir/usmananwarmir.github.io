type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-silver/80 text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
