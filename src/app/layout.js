import { Inter, Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import GlobalPopup from "../components/Common/GlobalPopup";
import CanonicalLink from "../components/Common/CanonicalLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.pixelstudiosinc.com'),
  title: "3D Animation Company",
  description: "Award-Winning Digital Agency",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "kdjDZPVMKUUfm3R6KLFAz5GmXLBX2xSPaokpF6YzdF0",
  },
};

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <CanonicalLink />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKLN5GJS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <GlobalPopup />

        <Script
          id="google-gtag-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-XL99K59785"
          strategy="beforeInteractive"
        />
        <Script id="google-gtag-config" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XL99K59785');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KKLN5GJS');
          `}
        </Script>
        <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e3f979f5-27f6-46fa-8a12-378d2c7089aa" strategy="afterInteractive" />
        <Script id="zopim-init" strategy="afterInteractive">
          {`
            window.$zopim || function (a, d) {
                var b = $zopim = function (a) {
                        b._.push(a)
                    },
                    c = b.s = a.createElement(d);
                a = a.getElementsByTagName(d)[0];
                b.set = function (a) {
                    b.set._.push(a)
                };
                b._ = [];
                b.set._ = [];
                c.async = !0;
                c.setAttribute("charset", "utf-8");
                c.src = "";
                b.t = +new Date;
                c.type = "text/javascript";
                a.parentNode.insertBefore(c, a)
            }
            (document, "script");

            $zopim(function () {
                function a(a) {
                    if (1 <= a && $zopim.livechat && $zopim.livechat.window) {
                        $zopim.livechat.window.show();
                    }
                }
                if ($zopim.livechat) {
                    $zopim.livechat.setOnUnreadMsgs(a);
                }
            });

            window.toggleChat = function() {
                if (window.$zopim && window.$zopim.livechat && window.$zopim.livechat.window) {
                    window.$zopim.livechat.window.toggle();
                } else if (window.zE) {
                    try {
                        window.zE('webWidget', 'toggle');
                    } catch(err) {
                        console.error(err);
                    }
                }
            };
          `}
        </Script>
      </body>
    </html>
  );
}
