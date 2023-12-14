import { TimelineItem } from "@molecule-components/timeline-item";
import { FC } from "react";

export const Timeline: FC = () => {
  return (
    <div className="max-w-[90%] flex overflow-auto gap-6">
      <TimelineItem
        startDate={""}
        endData={null}
        enterprise={""}
        business={""}
        description={[]}
      />
      <TimelineItem
        startDate={""}
        endData={null}
        enterprise={""}
        business={""}
        description={[]}
      />
    </div>
  );
};
