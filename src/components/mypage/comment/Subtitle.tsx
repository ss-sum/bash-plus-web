const MypageSubtitle = () => {
  return (
    <div className="flex mt-4 mb-8 justify-between text-sm">
      <span>
        전체 댓글 <span className="font-semibold">2</span>개 중{" "}
        <span className="font-semibold">2</span>개 표시
      </span>

      <div className="flex gap-2">
        <span className="font-bold cursor-pointer">최신순</span>
        <span className="font-light cursor-pointer">날짜순</span>
      </div>
    </div>
  );
};

export default MypageSubtitle;
