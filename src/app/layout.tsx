import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
import { Providers } from "@/context/providers";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steph & Max Wedding",
  description: "Join us in celebrating our special day - October 18, 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <div className="infinity-watermark">∞</div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
