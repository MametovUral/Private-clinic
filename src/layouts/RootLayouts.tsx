import { Outlet, useMatches, useParams } from "react-router-dom";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Match } from "@/types";

function RootLayouts() {
  const matches = useMatches() as Match[];
  return (
    <>
      <Navbar />
      <section className="pt-[168px] pb-24 bg-[#F9FAFF]">
        <div className="container ">
          {matches.every((item) => item.handle) && <Breadcrumbs />}
        </div>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default RootLayouts;
