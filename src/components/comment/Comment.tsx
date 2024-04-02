import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { IconThumbUp } from "@tabler/icons-react";

export type CommentProps = {
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

const Comment: FC<CommentProps> = (props) => {
  const avatarFallback = props.user.name[0].toUpperCase();

  // FIXME: 로그인 연동되면 현재 유저 정보로 대체
  const CURRENT_USER_ID = 1;

  return (
    <div className={cn("flex gap-4")}>
      <Avatar className="mt-1">
        <AvatarImage src={props.user.avatar} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="font-medium">{props.user.name}</span>
          <span className="font-light text-xs text-gray-500">
            {props.createdAt}
          </span>

          {props.statistics?.like && (
            <span className="flex items-center text-xs text-gray-500 gap-1 hover:text-black transition-colors cursor-pointer">
              <IconThumbUp size={16} />
              {props.statistics.like}
            </span>
          )}

          {props.user.id === CURRENT_USER_ID && (
            <span className="font-light text-xs text-gray-500 hover:underline cursor-pointer ml-2">
              수정
            </span>
          )}
          {props.user.id === CURRENT_USER_ID && (
            <span className="font-light text-xs text-red-500 hover:underline cursor-pointer">
              삭제
            </span>
          )}
        </div>

        <div
          className="text-sm leading-normal"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Comment;
