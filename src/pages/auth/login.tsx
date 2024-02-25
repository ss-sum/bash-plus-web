import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { pretendard } from "@/lib/fonts";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Header hideLogin />

      <main
        className={clsx(pretendard.className, "flex flex-col max-w-xl mx-auto")}
      >
        <h2 className="mt-16 text-center text-xl font-semibold">
          소셜 계정으로 로그인
        </h2>

        <div className="mt-12 max-w-80 w-full mx-auto">
          <Link href="/landing/interest">
            <Button className="gap-2 w-full mb-2">
              <IconBrandGoogle />
              <span>Google로 로그인</span>
            </Button>
          </Link>

          <Button className="gap-2 w-full">
            <IconBrandGithub />
            <span>GitHub로 로그인</span>
          </Button>
        </div>
      </main>
    </>
  );
};

export default Login;
