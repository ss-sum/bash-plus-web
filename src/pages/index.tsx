import { Inter } from "next/font/google";
import Header from "@/components/common/Header";
import { pretendard } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />

      <main className={pretendard.className}>
        <section className="container">
          <h1 className={inter.className}>Hello, World!</h1>
        </section>
      </main>
    </>
  );
}
