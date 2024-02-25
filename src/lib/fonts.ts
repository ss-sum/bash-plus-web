import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../../public/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../public/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-pretendard",
});

export const renaissance = localFont({
  src: "../../public/fonts/Og-Renaissance.woff2",
});

export const cafe24Ssurround = localFont({
  src: "../../public/fonts/Cafe24Ssurround-v2.0.woff2",
});

export const cafe24Oneprettynight = localFont({
  src: "../../public/fonts/Cafe24Oneprettynight-v2.0.woff2",
});

export const cafe24Moyamoya = localFont({
  src: "../../public/fonts/Cafe24Moyamoya-Face-v1.0.woff2",
});
