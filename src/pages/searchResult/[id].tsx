import VideoBasic from "@/components/card/VideoBasic";
import Header from "@/components/common/Header";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const searchResults = [
    { id: 1, title: "React 개발의 기초", description: "React의 기본을 배워봅시다.", tags: ["React", "Frontend"] },
    { id: 2, title: "Next.js로 SSR 적용하기", description: "Next.js를 이용해서 서버 사이드 랜더링을 구현하는 방법.", tags: ["Next.js", "SSR"] },
    { id: 3, title: "React 개발의 기초", description: "React의 기본을 배워봅시다.", tags: ["React", "Frontend"] },
    { id: 4, title: "Next.js로 SSR 적용하기", description: "Next.js를 이용해서 서버 사이드 랜더링을 구현하는 방법.", tags: ["Next.js", "SSR"] },
    { id: 5, title: "React 개발의 기초", description: "React의 기본을 배워봅시다.", tags: ["React", "Frontend"] },
    { id: 6, title: "Next.js로 SSR 적용하기", description: "Next.js를 이용해서 서버 사이드 랜더링을 구현하는 방법.", tags: ["Next.js", "SSR"] },
    
    
    
    
    // 추가 검색 결과 데이터 ...
];


const searchResultId = () => {
  const router = useRouter();
  const { query } = router.query; // URL의 쿼리 파라미터 중 'query' 값을 가져옵니다.

  const [results, setResults] = useState(searchResults); // 이 예에서는 정적 데이터를 사용하지만, 실제로는 API로부터 데이터를 받아옵니다.

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
      <section className="bg-gray-200 mt-4 p-4 rounded-lg h-30 flex items-center justify-between">
          <div className="flex flex-col justify-around h-full">
            <h2 className="text-2xl font-bold">#검색한내용#</h2>

            <p className="font-light">
              N개의 결과를 찾았습니다.
            </p>
          </div>

        
        </section>
    <h1 className="text-2xl font-bold mb-4">검색 결과: {query}</h1>
    <section className="mt-6 mb-6">
          <NavigationMenu defaultValue="0" value="0">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/conference/1" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-black text-white"
                    )}
                  >
                    전체 (13)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/conference/1/frontend" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    프론트엔드 (5)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/conference/1/backend" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    백엔드 (7)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/conference/1/devops" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    DevOps (1)
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          </section>
                
    <div className="grid grid-cols-1 gap-4">
    
      {results.length > 0 ? (
        results.map(result => (
          <div key={result.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{result.title}</h2>
            <p>{result.description}</p>
            <div className="flex gap-2 mt-2">
              {result.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-sm p-1 rounded">{tag}</span>
              ))}
            </div>
            <section className="mt-6">
            
            <NavigationMenu defaultValue="0" value="0">
          <NavigationMenuList>
            <NavigationMenuItem>
 
               
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
               #유튜브 썸네일이나 컨퍼런스 이름#
                </NavigationMenuLink>
                    
                
              
</NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        </section>
          </div>
        
        ))
      ) : (
        <p className="col-span-3">검색 결과가 없습니다.</p>
      )}
    </div>
  </main>

    </>
  );
};

export default searchResultId;
