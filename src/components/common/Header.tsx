import { pretendard } from "@/lib/fonts";
import clsx from "clsx";
import { Button } from "../ui/button";
import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { isMacOS } from "@toss/utils";
import SearchCommand from "./SearchCommand";

type HeaderProps = {
  hideSearch?: boolean;
  hideLogin?: boolean;
};

const Header = (
  { hideSearch, hideLogin }: HeaderProps = {
    hideSearch: false,
    hideLogin: false,
  }
) => {
  const [open, setOpen] = useState(false);
  const [ctrlKey, setCtrlKey] = useState("");

  useEffect(() => {
    // set ctrl key
    setCtrlKey(isMacOS() ? "⌘" : "Ctrl");

    // add event listener
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="h-14 border-b">
      <div className="container flex items-center justify-between h-full">
        <h1 className={clsx(pretendard.className, "font-bold text-2xl")}>
          <Link href="/">bash.plus</Link>
        </h1>

        <div className="flex gap-2">
          {!hideSearch && (
            <Button
              variant={"outline"}
              className="w-[220px] px-3 text-left font-normal justify-between"
              onClick={() => setOpen(true)}
            >
              <span className="text-gray-500">검색어를 입력해주세요</span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">{ctrlKey}</span>K
              </kbd>
            </Button>
          )}

          {!hideLogin && (
            <Link href="/auth/login">
              <Button>로그인</Button>
            </Link>
          )}
        </div>
      </div>

      <SearchCommand open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
