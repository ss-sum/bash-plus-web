import { cafe24Moyamoya } from "@/lib/fonts";
import clsx from "clsx";
import { Button } from "../ui/button";
import Link from "next/link";

type HeaderProps = {
  hideLogin?: boolean;
};

const Header = (
  { hideLogin }: HeaderProps = {
    hideLogin: false,
  }
) => {
  return (
    <header className="flex h-14 items-center px-2 justify-between border-b">
      <h1 className={clsx(cafe24Moyamoya.className, "text-3xl")}>
        <Link href="/">bash.plus</Link>
      </h1>

      <div>
        {!hideLogin && (
          <Link href="/auth/login">
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
