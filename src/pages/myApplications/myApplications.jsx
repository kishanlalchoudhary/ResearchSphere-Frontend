import React from "react";
import Navbar from "../../components/navbar/navbar";
import Application from "../../components/applications/applications";

const MyApplications = () => {
  return (
    <div className="relative">
        <div className="top-0 left-0 right-0 sticky h-[10vh]">
            <Navbar/>
        </div>
        <div className="flex flex-col h-[90vh] items-center">
            <h2 className="flex text-3xl">My Applications</h2>
            <Application/>
            <Application/>
            <Application/>
            <Application/> 
            <Application/>
            <Application/>
            <Application/>
            <Application/>
        </div>
        
    </div>
  );
};
export default MyApplications;
