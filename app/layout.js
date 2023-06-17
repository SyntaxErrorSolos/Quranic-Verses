import "./globals.css";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700", "100"] });

export const metadata = {
  title: "Quranic Verse",
  description: "Quranic Verse upon reload.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
