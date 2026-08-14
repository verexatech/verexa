/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-avatar",
      "@radix-ui/react-checkbox",
      "@radix-ui/react-collapsible",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-label",
      "@radix-ui/react-popover",
      "@radix-ui/react-progress",
      "@radix-ui/react-radio-group",
      "@radix-ui/react-scroll-area",
      "@radix-ui/react-select",
      "@radix-ui/react-separator",
      "@radix-ui/react-slot",
      "@radix-ui/react-switch",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-tooltip",
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/web-design-and-development",
        destination: "/services/custom-business-software#web-applications",
        permanent: true,
      },
      {
        source: "/services/mobile-app-development",
        destination: "/services/custom-business-software#mobile-applications",
        permanent: true,
      },
      {
        source: "/services/it-and-tech-support",
        destination: "/services/managed-technology",
        permanent: true,
      },
      {
        source: "/services/graphic-designing",
        destination: "/services/custom-business-software#product-design",
        permanent: true,
      },
    ];
  },
}

export default nextConfig
