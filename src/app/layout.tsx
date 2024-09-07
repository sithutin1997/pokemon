import ApolloWrapper from "./apollo-wrapper";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from 'react'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ApolloWrapper>
          <Suspense>
            {children}
          </Suspense>
        </ApolloWrapper>
      </body>
    </html>
  );
}
