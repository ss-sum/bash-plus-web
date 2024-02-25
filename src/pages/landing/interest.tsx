import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { pretendard } from "@/lib/fonts";

const Interest = () => {
  return (
    <>
      <Header hideLogin />

      <main className={pretendard.className}>
        <section className="max-w-[600px] mx-auto text-center my-16">
          <h2 className="text-4xl font-bold">관심 분야를 선택해주세요</h2>

          <p className="mt-4 text-gray-700 text-lg font-light">
            관심 분야를 선택하면 나에게 딱 맞는 IT 컨퍼런스 영상을
            추천해드립니다.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-center">개발 분야</h3>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <Button variant="outline">프론트엔드</Button>
            <Button variant="outline">백엔드</Button>
            <Button variant="outline">데브옵스</Button>
            <Button variant="outline">QA</Button>
            <Button variant="outline">디자인</Button>
            <Button variant="outline">기획</Button>
            <Button variant="outline">데이터 분석</Button>
            <Button variant="outline">AI/머신러닝</Button>
          </div>
        </section>

        <section className="flex max-w-xl mx-auto gap-2">
          <Button variant="outline" className="w-full">
            다음에 설정하기
          </Button>
          <Button className="w-full">선택 완료</Button>
        </section>
      </main>
    </>
  );
};

export default Interest;
