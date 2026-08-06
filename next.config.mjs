/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      // Home (301)
      {
        source: "/animation-service",
        destination: "/",
        permanent: true,
      },
      {
        source: "/website-design-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b2b-portal-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/b2c-portal-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cms-website-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ecommerce-website-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/responsive-website-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/digital-marketing-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seo-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/social-media-marketing-services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mobile-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/android-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/augmented-reality-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cross-platform-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ios-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/game-app-development",
        destination: "/",
        permanent: true,
      },
      {
        source: "/react-native-app-development",
        destination: "/",
        permanent: true,
      },

      // Logo Animation (301)
      {
        source: "/logo-design-services",
        destination: "/logo-animation-services",
        permanent: true,
      },

      // Logo Animation (302)
      {
        source: "/3d-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/abstract-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/emblem-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/mascot-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },
      {
        source: "/wordmark-logo-design",
        destination: "/logo-animation-services",
        permanent: false,
      },

      // Animation Studio Pages (302)
      // {
      //   source: "/animation-studio-austin",
      //   destination: "/",
      //   permanent: false,
      // },
      {
        source: "/animation-studio-boston",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-california",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-chicago",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-dallas",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-denver",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-dover",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-houston",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-los-angeles",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-nyc",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-san-francisco",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-seattle",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-toronto",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-dubai",
        destination: "/",
        permanent: false,
      },
      {
        source: "/animation-studio-uk",
        destination: "/",
        permanent: false,
      },

      // Contact (302)
      {
        source: "/refund-form",
        destination: "/contact-us",
        permanent: false,
      },
      {
        source: "/refund-form/",
        destination: "/contact-us",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;