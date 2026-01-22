import { Urbanist, Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Header2 from "./Components/Header/Header2";
import Footer from "./Components/Footer/Footer";


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    default: "RC Techbox - Smart School ERP Solution",
    template: "%s | RC Techbox - Smart School ERP Solution",
  },
  description:
    "RC Techbox offers a complete School ERP system to simplify administration, manage academics, streamline communication, and enhance student learning experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta name="author" content="Themeservices" />

  {/* ✅ Google Search Console Verification */}
  <meta
    name="google-site-verification"
    content="eqlzrJSkLpD6_YS_fbv_DbXMo-cQzmrSJKRQQ5izDh0"
  />

  <link rel="icon" href="/favicon.ico" sizes="any" />
</head>


      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {/* ✅ Global Header */}
        <Header2 />

        {/* Page Content */}
        {children}

        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917892104196"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
