/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "../../ui/aspect-ratio";
import Dropdown from "./Dropdown";
import Link from "next/link";

export type MypageCommentProps = {
  level: number;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  content: string;
  statistics?: {
    like?: number;
  };
  createdAt: string;
};

const MypageComment: FC<MypageCommentProps> = (props) => {
  return (
    <div className={cn("flex gap-4")}>
      <div className="w-40 mt-1">
        <AspectRatio ratio={16 / 9}>
          <Link href={`/video/1`}>
            <img
              src="https://static.toss.im/slash23/thumbs/slash23_thumbs_04_%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%B2%E1%84%89%E1%85%A5%E1%86%BC.png"
              alt="video"
              className="rounded w-full h-full object-cover"
            />
          </Link>
        </AspectRatio>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="font-medium">
              <Link href="/video/1" className="hover:underline">
                Server-driven UI로 토스의 마지막 어드민 만들기
              </Link>
            </span>
            <span className="font-light text-xs text-gray-500">
              {props.createdAt}
            </span>
          </div>
          <Dropdown />
        </div>

        <div
          className="text-sm leading-normal"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default MypageComment;
