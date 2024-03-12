/* eslint-disable @next/next/no-img-element */
import VideoBasic from "@/components/card/VideoBasic";
import Header from "@/components/common/Header";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Head from "next/head";
import Link from "next/link";

const VideoId = () => {
  return (
    <>
      <Head>
        <title>Server-driven UI로 토스의 마지막 어드민 만들기</title>
      </Head>

      <Header />

      <div className="bg-gray-200 h-80 py-12">
        <div className="container">
          <div className="flex gap-8">
            <div className="flex flex-col justify-between">
              <h1 className="text-black text-3xl font-bold">
                Server-driven UI로 토스의 마지막 어드민 만들기
              </h1>

              <p className="text-black">
                고객의 소중한 정보를 다루는 ‘어드민 서비스’는 어떻게 만들어져야
                할까요? 토스의 혁신적인 개발 문화를 뒷받침해주는 안전하고 편리한
                어드민 개발 과정을 소개합니다. 조유성 / 토스 Frontend Developer
              </p>
            </div>

            <div className="flex h-56 aspect-video">
              <img
                src="https://static.toss.im/slash23/thumbs/slash23_thumbs_04_%E1%84%8C%E1%85%A9%E1%84%8B%E1%85%B2%E1%84%89%E1%85%A5%E1%86%BC.png"
                alt="video"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex gap-8">
          <div className="flex flex-1 flex-col gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <Link href="/conference/1" className="hover:underline">
                  <span className="text-purple-900 font-bold">
                    TOSS SLASH 23
                  </span>
                </Link>{" "}
                의 다른 영상 살펴보기
              </h3>

              <div className="grid grid-cols-4 gap-4">
                <VideoBasic />
                <VideoBasic />
                <VideoBasic />
                <VideoBasic />
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">댓글</h3>

              <div className="min-h-[500px]"></div>
            </div>
          </div>

          <div className="flex flex-col w-[254px] gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Menu</h3>
            </div>

            <div className="">
              <h3 className="text-xl font-bold mb-4">Timestamps</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">나만을 위한 추천</h3>

          <div className="grid grid-cols-5 gap-4">
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-4">
            다른 <span className="text-purple-900 font-bold">프론트엔드</span>{" "}
            영상도 살펴보세요
          </h3>

          <div className="grid grid-cols-5 gap-4">
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoId;
