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
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: `${process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"} | ${
      process.env.NEXT_PUBLIC_SITE_NAME_EN || "Tech Studio"
    }`,
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"}`,
  },
  description:
    "愛知を拠点に活動するフリーランスエンジニア。Webシステム開発、業務改善、DX支援など、技術でビジネスの課題を解決します。",
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"} | ${
      process.env.NEXT_PUBLIC_SITE_NAME_EN || "Tech Studio"
    }`,
    description:
      "愛知を拠点に活動するフリーランスエンジニア。Webシステム開発、業務改善、DX支援など、技術でビジネスの課題を解決します。",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房",
    locale: "ja_JP",
    type: "website",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITE_NAME_JA || "テック工房"} | ${
      process.env.NEXT_PUBLIC_SITE_NAME_EN || "Tech Studio"
    }`,
    description:
      "愛知を拠点に活動するフリーランスエンジニア。Webシステム開発、業務改善、DX支援など、技術でビジネスの課題を解決します。",
    site: process.env.NEXT_PUBLIC_TWITTER_SITE,
    creator: process.env.NEXT_PUBLIC_TWITTER_CREATOR,
    images: "/og-image.png",
  },
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
        className={`${notoSansJp.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isMaintenance ? <MaintenanceTemplate /> : children}
      </body>
    </html>
  );
}
