import Filter from "../../components/filter/filter";
import api from "../../api/axios";
import { useEffect } from "react";
import OpportunitySmall from "../../components/opportunitySmall/opportunitySmall";
import PostOpportunity from "../../components/postOpportunity/postOpportunity";

const Explore = () => {
  useEffect(() => {
    api
      .get("/myapplications/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[90vh] max-w-7xl mx-auto lg:gap-10 gap-0 lg:pt-10 py-0">
      <div className="lg:w-3/12">
        <Filter />
        <PostOpportunity />
      </div>
      <div className="lg:w-8/12 overflow-y-auto scrollbar-none flex flex-col gap-7 lg:py-0 py-7">
        <OpportunitySmall />
        <OpportunitySmall />
        <OpportunitySmall />
        <OpportunitySmall />
      </div>
    </div>
  );
};
export default Explore;
