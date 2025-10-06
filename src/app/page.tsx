import Main from "./section/home";
import ProfileSidebar from "./components/ProfileSideBar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex  overflow-hidden">
      <div className="hidden min-h-[100dvh] lg:block">
        <ProfileSidebar />
      </div>

      {/* Mobile responsive main content */}
      <div className="flex-1 relative">
        {/* Background decoration */}
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-10 to-accent-10 rounded-full blur-3xl -translate-y-32 translate-x-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple/10 to-secondary/10 rounded-full blur-3xl translate-y-32 -translate-x-32 pointer-events-none" />
         */}
        <div className="relative z-10">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
