export type MypageNav = {
  paths: string[];
  label: string;
};

export const mypageNavs: MypageNav[] = [
  {
    paths: ["/mypage/edit"],
    label: "내 정보 관리",
  },
  {
    paths: ["/mypage/history"],
    label: "영상 시청 기록",
  },
  {
    paths: ["/mypage/playlist"],
    label: "영상 보관함",
  },
  {
    paths: ["/mypage/timestamp"],
    label: "타임스탬프",
  },
  {
    paths: ["/mypage/comment"],
    label: "내가 작성한 댓글",
  },
];
