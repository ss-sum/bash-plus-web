import { cn } from "@/lib/utils";
import { FC } from "react";

type MypageTitleProps = {
  title: string;
  className?: string;
};

const MypageTitle: FC<MypageTitleProps> = ({ title, className }) => {
  return <h2 className={cn("text-lg font-bold", className)}>{title}</h2>;
};

export default MypageTitle;
