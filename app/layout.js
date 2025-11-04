import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import Loader from "@/components/loader";
import { Navbar } from "@/components/navbar";
import ModalProvider from "@/components/providers/modalProvider";
import "animate.css/animate.compat.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sameer Khan",
  description: "Sameer Khan personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("inter.className", "bg-[#18181B] dark:bg-gradient-to-b dark:[#18181B]")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Loader>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            {children}
            {/* <ModalProvider /> */}
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
