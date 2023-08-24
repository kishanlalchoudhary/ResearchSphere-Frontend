import React from "react";
import ConfirmationalModal from "../../components/confirmationalModal/confirmationalModal";
import Filter from "../../components/filter/filter";
import Navbar from "../../components/navbar/navbar";
import OpportunityLarge from "../../components/opportunityLarge/opportunityLarge";

const IndiOpportunity = () => {
  return (
    <div className="relative">
      <div className="top-0 left-0 right-0 sticky h-[10vh]">
        <Navbar/>
      </div>
      <div className="h-[90h]">
        <OpportunityLarge/>
      </div>
    </div>
  );
};
export default IndiOpportunity;
