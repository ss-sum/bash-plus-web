import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import { pretendard } from "@/lib/fonts";
import VideoBasic from "@/components/card/VideoBasic";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main className={pretendard.className}>
        <section className="container mt-4">
          <h2 className="text-xl font-semibold">추천 컨퍼런스 영상</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <Link href="/video/1">
              <VideoBasic />
            </Link>
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
          </div>
        </section>

        <section className="container mt-12">
          <h2 className="text-xl font-semibold">
            OOO님이 좋아할 만한{" "}
            <span className="text-purple-900 font-bold">백엔드 중급</span> 영상
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
          </div>
        </section>

        <section className="container mt-12">
          <h2 className="text-xl font-semibold">
            <span className="text-purple-900 font-bold">백엔드 고급</span>으로
            레벨업! 어때요?
          </h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
          </div>
        </section>
      </main>
    </>
  );
}
