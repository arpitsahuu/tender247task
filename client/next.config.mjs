/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "plus.unsplash.com","unsplash.com"], // Add any external domains you're using for images
      },
      experimental: {
        serverActions: true,
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
          };
        }
        return config;
      },
};

export default nextConfig;
