import { TimelineContent } from "@atom-components/timeline-content";
import { FC } from "react";

interface TimelineItemProps {
  startDate: string;
  endData: string | null;
  enterprise: string;
  business: string;
  description: string[];
}

export const TimelineItem: FC<TimelineItemProps> = () => {
  return (
    <div className="min-w-full h-auto flex flex-1 flex-col justify-center items-center text-primary gap-4">
      <div className="w-[90%] h-auto text-center">
        <span className="text-base text-muted font-bold">
          abr. de 2023 - Presente
        </span>
        <p className="font-bold text-lg">SENAI</p>
      </div>
      <div className="w-full h-auto flex justify-end items-center gap-6">
        <div className="w-4 h-4 border-2 border-secondary rounded-full" />
        <div className="w-[40%] h-1 bg-primary rounded-md" />
      </div>
      <TimelineContent business="" description="" />
    </div>
  );
};
