import { Outlet } from "react-router-dom";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

function RootLayouts() {
  return (
    <>
      <Navbar />
      <div className="pt-[160px] bg-[#F9FAFF]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayouts;
