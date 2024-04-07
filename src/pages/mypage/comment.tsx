import EmptyState from "@/components/common/EmptyState";
import Header from "@/components/common/Header";
import MypageComment from "@/components/mypage/comment/MypageComment";
import MypageSubtitle from "@/components/mypage/comment/Subtitle";
import MypageTitle from "@/components/mypage/MypageTitle";
import MypagePagination from "@/components/mypage/Pagination";
import Sidenav from "@/components/mypage/Sidenav";
import { useRouter } from "next/router";

const MypageCommentPage = () => {
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
          <MypageTitle title="내가 작성한 댓글" />

          <MypageSubtitle />

          <div className="flex flex-col gap-4">
            <MypageComment
              level={0}
              user={{
                id: 2,
                name: "Shadcn",
                avatar: "https://github.com/shadcn.png",
              }}
              content="와 정말 유익한 정보 감사합니다!<br />오늘 강의를 통해서 Server Driven UI에 대해서 더 깊이 이해하게 되었고, 앞으로 다양한 프로젝트에 적용해보고 싶네요. 🙂"
              statistics={{ like: 10 }}
              createdAt="2분 전"
            />

            <MypageComment
              level={0}
              user={{
                id: 10,
                name: "Bill Gates",
                avatar: "https://github.com/microsoft.png",
              }}
              content="이 편지는 영국에서 시작되어, 프랑스, 네덜란드, 벨기에, 덴마크, 스웨덴, 폴란드, 독일, 오스트리아, <b>이탈리아, 스위스, 스페인, 포르투갈, 룩셈부르크, 아일랜드, 그리스, 체코, 슬로바키아, 슬로베니아, 헝가리, 에스토니아</b>, 라트비아, 리투아니아, 폴란드, 말타, 불가리아, 루마니아, 크로아티아, 키프로스, 핀란드, <u>아이슬란드, 노르웨이, 덴마크, 스웨덴, 핀란드</u>, 러시아, 우크라이나, 몰도바, 벨라루스, <i>미국, 캐나다, 멕시코, 쿠바, 도미니카 공화국, 바하마, 자메이카, 하이티</i>, 도미니카 연방, 세인트루시아, 바베이도스, 그레나다, 세인트빈센트 그레나딘, 앤티가 바부다, 세인트키츠 네비스, 호주, 뉴질랜드, 피지, 키리바시, 마셜 제도, 솔로몬 제도, 바누아투, 사모아, 통가, 투발루, 미크로네시아, 키리바시, 남수단, 남아프리카 공화국, 짐바브웨, 잠비아, 모잠비크, 마다가스카르, 레소토, 스와질란드, 나미비아, 보츠와나, 앙골라, 모리셔스, 세이셸, 코모로, 모리타니, 세네갈, 감비아, 기니비사우, 기니, 시에라리온, 리베리아, 코트디부아르, 부키나파소, 가나, 토고, 베냉, 나이지리아, 카메룬, 차드, 중앙아프리카 공화국, 수단, 에리트레아, 지부티, 소말리아, 케냐, 우간다, 르완다, 부룬디, 탄자니아, 세이셸, 몰디브, 스리랑카, 바누아투, 네팔, 부탄, 방글라데시, 인도, 파키스탄, 아프가니스탄, 이란, 이라크, 시리아, 요르단, 레바논, 이스라엘, 사우디아라비아, 바레인, 카타르, 쿠웨이트, 아랍에미리트, 오만, 예멘, 타지키스탄, 우즈베키스탄, 투르크메니스탄, 아제르바이잔, 아르메니아, 그루지야, 터키, 크리스마스 섬, 사이프러스, 키르기스스탄, 모나코, 몰도바, 리히텐슈타인, 산마리노, 바티칸 시국, 알바니아 등을 거쳐, 다시 영국으로 돌아오는 여행을 합니다."
              createdAt="3일 전"
            />

            <div className="mt-4">
              <MypagePagination />
            </div>
          </div>

          <EmptyState message="작성한 댓글이 없습니다" />
        </section>
      </main>
    </>
  );
};

export default MypageCommentPage;
