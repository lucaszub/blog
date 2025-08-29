import React from "react";

interface CategoryBadgesProps {
  categories: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CategoryBadges: React.FC<CategoryBadgesProps> = ({
  categories,
  size = "md",
  className,
}) => {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      SEO: "bg-blue-100 text-blue-800 border-blue-200",
      Data: "bg-green-100 text-green-800 border-green-200",
      Automatisation: "bg-purple-100 text-purple-800 border-purple-200",
      Visualisation: "bg-orange-100 text-orange-800 border-orange-200",
      Test: "bg-red-100 text-red-800 border-red-200",
      Azure: "bg-cyan-100 text-cyan-800 border-cyan-200",
      Sécurité: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Cloud: "bg-indigo-100 text-indigo-800 border-indigo-200",
      API: "bg-pink-100 text-pink-800 border-pink-200",
      Frontend: "bg-emerald-100 text-emerald-800 border-emerald-200",
      Backend: "bg-slate-100 text-slate-800 border-slate-200",
    };

    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const combineClasses = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className={combineClasses("flex flex-wrap gap-1.5", className)}>
      {categories.map((category, index) => (
        <span
          key={index}
          className={combineClasses(
            "inline-flex items-center rounded-full border font-medium transition-colors",
            sizeClasses[size],
            getCategoryColor(category)
          )}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryBadges;
