import type { Metadata } from "next";
import { Noto_Sans_JP, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MaintenanceTemplate } from "@/components/templates/MaintenanceTemplate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"} | ${
    process.env.NEXT_PUBLIC_SITE_NAME_EN || "Tech Studio"
  }`,
  description: "Webシステム開発・DX支援",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenance = process.env.NEXT_PUBLIC_IS_MAINTENANCE === "true";

  return (
    <html lang="ja">
      <body
        className={`${notoSansJp.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isMaintenance ? <MaintenanceTemplate /> : children}
      </body>
    </html>
  );
}
