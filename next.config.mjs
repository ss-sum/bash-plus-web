/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects: async () => {
    return [
      {
        source: "/mypage",
        destination: "/mypage/edit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
