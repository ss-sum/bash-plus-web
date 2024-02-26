/* eslint-disable @next/next/no-img-element */
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";

const VideoBasic = () => {
  return (
    <div className="">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://static.toss.im/slash23/thumbs/slash23_thumbs_04_%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%B2%E1%84%89%E1%85%A5%E1%86%BC.png"
            alt="video"
            className="rounded w-full h-full object-cover"
          />
        </AspectRatio>

        <div className="absolute right-1 bottom-1">
          <Badge>12:41</Badge>
        </div>
      </div>

      <p className="mt-1 font-medium">
        Server-driven UI로 토스의 마지막 어드민 만들기
      </p>
      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span className="text-xs text-gray-500">조유성</span>
        <span className="text-xs text-gray-500">토스 SLASH 2023</span>
      </div>
    </div>
  );
};

export default VideoBasic;
