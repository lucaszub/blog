interface CategoryBadgesProps {
  categories: string[];
  size?: "sm" | "md";
}

export default function CategoryBadges({
  categories,
  size = "md",
}: CategoryBadgesProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-[11px]",
    md: "px-3 py-1.5 text-xs",
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((category, index) => (
        <span
          key={index}
          className={`${sizeClasses[size]} rounded-full border border-slate-200 bg-white text-slate-700 font-medium`}
        >
          {category}
        </span>
      ))}
    </div>
  );
}
