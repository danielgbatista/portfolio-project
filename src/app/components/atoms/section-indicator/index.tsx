import { FC } from "react";

interface SectionIndicatorProps {
  label: string;
}

export const SectionIndicator: FC<SectionIndicatorProps> = ({ label }) => {
  return (
    <div className="w-[88%] h-auto flex items-center gap-2 tablet:w-[80%] laptop:w-[70%] desktop:w-[62%] text-primary">
      <div className="w-4 h-4 rotate-45 bg-secondary rounded-sm" />
      <span className="font-bold text-base">{label}</span>
    </div>
  );
};
