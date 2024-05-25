import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SearchForm from "@/components/SearchForm";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media App",
  description: "A Social media app that works like X",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex justify-between max-w-8xl mx-auto ">
          <div className=" hidden sm:inline border-r h-screen flex-1 w-full"> <Sidebar/> </div>
          <div className=" flex-1  w-full">
            {children}
          </div>
          <div className="border-l h-screen px-5 py-5 flex-1 w-full">
            <SearchForm/>
            <News/>
          </div>
        </div>

        </body>
     
    </html>

    </SessionWrapper>
  );
}
