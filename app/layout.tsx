import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/User/Header";
import Footer from "./components/User/Footer";

const exo = Exo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Construction Site",
  description:
    "Explore our construction site project showcasing modern design, quality materials, and efficient building solutions.",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${exo.className} antialiased max-w-[1920px] mx-auto`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
