import Header from "@/components/common/Header";
import Sidenav from "@/components/mypage/Sidenav";
import { useRouter } from "next/router";

const MypageComment = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <Header />

      <section className="h-40 border-b shadow-xs bg-gray-100">
        <div className="container flex flex-col justify-center h-full">
          <h1 className="font-bold text-2xl">마이페이지</h1>
        </div>
      </section>

      <main className="flex gap-8 container mt-6">
        <Sidenav current={currentPath} />

        <section className="flex-1">
          <h2>{currentPath}</h2>
        </section>
      </main>
    </>
  );
};

export default MypageComment;
