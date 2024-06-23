import type { Metadata } from "next";
import { Mulish } from "next/font/google";
//styles
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/css/style.css";

//components
import Header from "@/components/Header";
import ButtonToggle from "@/components/elements/ButtonToggle";
import { ThemeProvider } from "@/components/ThemeProvider";
import ActiveContextSectionProvider from "@/context/ActiveContextSection";
import { Toaster } from "react-hot-toast";
import Loading from "./loading";
import { themeDefault } from "@/data/Header";
const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lunity",
  description: "Illuminating the Future of Web Development",
};

export default function RootLayout({children,}: { children: React.ReactNode;}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mulish.className}  >
        <ThemeProvider attribute="class" defaultTheme={themeDefault.mode}>
            <Loading/>
            <ButtonToggle />
            <ActiveContextSectionProvider>
              <Header />
              {children}
              <Toaster position="bottom-center" />
            </ActiveContextSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}