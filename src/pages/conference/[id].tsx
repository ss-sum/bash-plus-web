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

const ConferenceId = () => {
  return (
    <>
      <Header />

      <main className="container">
        <section className="bg-gray-200 mt-4 p-4 rounded-lg h-40 flex items-center justify-between">
          <div className="flex flex-col justify-around h-full">
            <h2 className="text-2xl font-bold">TOSS SLASH 23</h2>

            <p className="font-light">
              TOSS SLASH 23은 TOSS에서 준비한 개발자 컨퍼런스입니다.
            </p>
          </div>

          <div className="flex flex-col h-full justify-center max-w-48">
            <div className="flex gap-1 flex-wrap justify-end">
              <Badge variant="secondary" className="bg-white">
                # 빅테크
              </Badge>
              <Badge variant="secondary" className="bg-white">
                # 프론트엔드
              </Badge>
              <Badge variant="secondary" className="bg-white">
                # 백엔드
              </Badge>
              <Badge variant="secondary" className="bg-white">
                # DevOps
              </Badge>
            </div>
          </div>
        </section>

        <section className="mt-6">
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

        <section className="mt-4">
          <div className="grid grid-cols-5 gap-4">
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
            <VideoBasic />
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
      </main>
    </>
  );
};

export default ConferenceId;
