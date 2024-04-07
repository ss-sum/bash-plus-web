import { cn } from "@/lib/utils";
import { IconAlertCircle } from "@tabler/icons-react";
import { FC } from "react";

type EmptyStateProps = {
  message?: string;
  className?: string;
};

const EmptyState: FC<EmptyStateProps> = ({
  message = "데이터가 없습니다",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center h-80 gap-4",
        className
      )}
    >
      <IconAlertCircle size={48} stroke={1.5} />
      <span className="text-lg font-medium">{message}</span>
    </div>
  );
};

export default EmptyState;
