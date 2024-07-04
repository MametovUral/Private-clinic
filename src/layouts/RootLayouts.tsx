import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

function RootLayouts() {
  return (
    <>
      <Navbar />
      <div className="pt-[160px] bg-[#F9FAFF]">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayouts;
