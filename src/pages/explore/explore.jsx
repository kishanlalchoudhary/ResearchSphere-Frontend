import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios";
import OpportunitySmall from "../../components/opportunitySmall/opportunitySmall";
import Filter from "../../components/filter/filter";
import PostOpportunity from "../../components/postOpportunity/postOpportunity";

const Explore = () => {
  const [opportunityList, setOpportunityList] = useState([]);

  const getOpportunityList = async () => {
    try {
      const response = await api.get("/opportunities/all");
      setOpportunityList(response.data?.data?.opportunities);
      // toast.success(response.data.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    } catch (err) {
      toast.err(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getOpportunityList();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[90vh] max-w-7xl mx-auto lg:gap-10 gap-0 lg:pt-10 py-0">
      <div className="lg:w-3/12 flex flex-col gap-10">
        {/* <Filter /> */}
        <PostOpportunity />
      </div>
      <div className="lg:w-8/12 overflow-y-auto scrollbar-none flex flex-col gap-7 lg:py-0 py-7">
        {opportunityList.map((opportunity) => (
          <OpportunitySmall key={opportunity._id} opportunity={opportunity} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
export default Explore;
