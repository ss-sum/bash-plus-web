import { mypageNavs } from "@/constants/mypage-nav";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

type SidenavProps = {
  current: string;
};

const Sidenav: FC<SidenavProps> = ({ current }) => {
  const isActiveDiv = (path: string[]) =>
    path.includes(current) ? "bg-gray-100" : "hover:bg-gray-100";

  const isActiveSpan = (path: string[]) =>
    path.includes(current) ? "font-bold" : "font-normal";

  return (
    <nav className="flex flex-col gap-1 w-60">
      {mypageNavs.map((nav) => (
        <Link key={nav.paths[0]} href={nav.paths[0]}>
          <div
            className={clsx(
              "flex flex-col gap-4 px-4 py-3 rounded-md",
              isActiveDiv(nav.paths)
            )}
          >
            <span className={clsx("text-sm", isActiveSpan(nav.paths))}>
              {nav.label}
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Sidenav;
