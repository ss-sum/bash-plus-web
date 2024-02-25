import Header from "@/components/common/Header";
import {
  CheckboxFormButton,
  CheckboxReactHookFormMultiple,
  CheckboxReactHookFormSingle,
} from "@/components/interest/FormGroup";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { pretendard } from "@/lib/fonts";
import Link from "next/link";

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
          <CheckboxReactHookFormMultiple />
        </section>
      </main>
    </>
  );
};

export default Interest;
