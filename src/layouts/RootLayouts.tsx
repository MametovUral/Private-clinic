import { Outlet, useMatches } from "react-router-dom";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Match } from "@/types";

function RootLayouts() {
  const matches = useMatches() as Match[];

  return (
    <section className=" flex flex-col  justify-between  bg-[#F9FAFF]">
      <Navbar />
      <section className="pt-[168px] pb-24 ">
        <div className="container ">
          {matches.every((item) => item.handle) && <Breadcrumbs />}
        </div>
        <Outlet />
      </section>
      <Footer />
    </section>
  );
}

export default RootLayouts;
