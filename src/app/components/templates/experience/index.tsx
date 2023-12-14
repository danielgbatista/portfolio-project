import { SectionIndicator } from "@atom-components/section-indicator";
import { FC } from "react";
import { Timeline } from "@organisms-components/timeline";

export const Experience: FC = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-2 py-10">
      <SectionIndicator label="EXPERIÊNCIA" />
      <Timeline />
    </section>
  );
};
