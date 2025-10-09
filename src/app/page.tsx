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
        <div className="relative z-10">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
