import { Outlet } from "react-router-dom";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

function RootLayouts() {
  return (
    <>
      <Navbar />
      <section className="pt-[160px] bg-[#F9FAFF]">
        <Breadcrumbs />
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default RootLayouts;
