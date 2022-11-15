import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-10 lg:px-32">
        <div className="col-span-12 lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 lg:col-span-9 rounded-2xl">
          <Navbar />
          <AnimatePresence>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
