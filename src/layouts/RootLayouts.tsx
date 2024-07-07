import { Outlet } from 'react-router-dom';

import Navbar from '@/components/shared/Navbar';

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
