import React from "react";

// components
import Navbar from "../../Components/Home/Navbar";
import Sidebar from "../../Components/Overview/Sidebar";
import AllComponents from "../../Components/Overview/SidebarContent/Content/AllComponents";
import MobileNavbar from "../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../Components/Overview/Sidebar/MobileSidebar.jsx";

const AllComponentsPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={3} />
        </div>

        <div className="w-full min-h-screen 1024px:p-12">
            <MobileSidebar startContent={3}/>
          <AllComponents />
        </div>
      </div>
    </>
  );
};

export default AllComponentsPage;
