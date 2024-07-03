import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

function RootLayouts() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayouts;
