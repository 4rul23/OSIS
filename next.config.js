module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pengurus/bidang",
        destination: "/pengurus/bidang/1",
        permanent: false,
      },
      {
        source: "/pengurus/bidang/((?!10)[1-9]\\d+)",
        destination: "/pengurus/bidang/1",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/home",
        permanent: true,
      },
    ];
  },
};
