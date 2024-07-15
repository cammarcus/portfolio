import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";

const jost = Jost({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Cameron Marcus Portfolio",
  description: "Cameron Marcus Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} text-neutral-800 bg-neutral-100`}>
        <div>
          {children}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
