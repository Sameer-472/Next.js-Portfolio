import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import Loader from "@/components/loader";
// import { Navbar } from "@/components/navbar";
import ModalProvider from "@/components/providers/modalProvider";
import "animate.css/animate.compat.css"
import Navbar from "@/components/navbar";

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
        className={cn("inter.className", "font-sans text-foreground max-w-[1000px] mx-auto pt-12 flex flex-col min-h-screen antialiased")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Loader>

            {/* <ScrollProgress /> */}
            <Navbar />
            <main className="flex-grow">
              <div className="max-w-[1000px] px-4 py-12">
                {children}
              </div>
            </main>
            {/* <Footer /> */}

            <div className='mb-32 md:mb-16'></div>
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
