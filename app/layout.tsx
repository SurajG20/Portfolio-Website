import { ThemeProvider } from "@/components/theme-provider";
import { websiteMetadata } from "@/lib/data";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', 
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: websiteMetadata.title,
  description: websiteMetadata.description,
  keywords: "full stack developer, web development, React, Node.js",
  authors: [{ name: "Suraj Goswami" }],
  openGraph: {
    title: websiteMetadata.title,
    description: websiteMetadata.description,
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
