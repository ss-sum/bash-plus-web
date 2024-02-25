"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { interests } from "@/constants/interests";

const FormSchema = z.object({
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "최소 1개 이상의 관심 분야를 선택해주세요.",
  }),
});

export function CheckboxReactHookFormMultiple() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      interests: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="container max-w-3xl">
          <FormField
            control={form.control}
            name="interests"
            render={() => (
              <>
                <FormItem className="grid grid-cols-2 gap-2">
                  {interests.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="interests"
                      render={({ field }) => {
                        return (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 !mt-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <div className="space-y-2 leading-none">
                              <FormLabel className="font-semibold">
                                {item.label}
                              </FormLabel>
                              <FormDescription className="leading-tight">
                                {item.description}
                              </FormDescription>
                            </div>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </FormItem>
                <FormMessage className="text-center mt-4" />
              </>
            )}
          />
        </div>
        <div className="flex max-w-xl mx-auto gap-2">
          <Button variant="outline" className="w-full">
            다음에 설정하기
          </Button>
          <Button type="submit" className="w-full">
            선택 완료
          </Button>
        </div>
      </form>
    </Form>
  );
}
