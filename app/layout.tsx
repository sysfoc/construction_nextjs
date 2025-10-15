import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

import AdminLayout from "./components/AdminLayout";

const exo = Exo({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

export const metadata: Metadata = {
  title: "Construction Site",
  description: "Explore our construction site project showcasing design and quality.",
  icons: { icon: "/favicon-32x32.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${exo.className} antialiased max-w-[1920px] mx-auto`}>
        <AdminLayout>{children}</AdminLayout>
      </body>
    </html>
  );
}
