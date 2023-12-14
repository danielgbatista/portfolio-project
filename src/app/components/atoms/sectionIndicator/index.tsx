import { FC } from "react";

interface SectionIndicatorProps {
  label: string;
}

export const SectionIndicator: FC<SectionIndicatorProps> = ({ label }) => {
  return (
    <div className="w-[90%] h-auto flex items-center gap-2">
      <div className="w-4 h-4 rotate-45 bg-red-400 rounded-sm" />
      <span className="font-bold text-base">{label}</span>
    </div>
  );
};
