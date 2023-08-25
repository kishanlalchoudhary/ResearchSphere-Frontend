import React from "react";
import ConfirmationalModal from "../../components/confirmationalModal/confirmationalModal";
import Filter from "../../components/filter/filter";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import OpportunityLarge from "../../components/opportunityLarge/opportunityLarge";
import OpportunitySmall from "../../components/opportunitySmall/opportunitySmall";
import PostOpportunity from "../../components/postOpportunity/postOpportunity";

const Explore = () => {
  return (
    <div className="relative">
      <div className="top-0 left-0 right-0 sticky h-[10vh]">
        <Navbar/>
      </div>
      <div className="flex flex-col lg:flex-row h-[90vh] ">
        <div className="lg:w-3/12 bg-base">
          <div className="sticky top-0">
            <Filter />
            <PostOpportunity/>
          </div>
        </div>
        <div className="lg:w-9/12 overflow-y-auto bg-base">
          <OpportunitySmall />
          <OpportunitySmall />
          <OpportunitySmall />
          <OpportunitySmall />
        </div>
      </div>
      {/* <OpportunitySmall/> */}
      {/* <OpportunityLarge/> */}
      {/* <ConfirmationalModal/> */}
      {/* <Footer /> */}
    </div>
  );
};
export default Explore;
