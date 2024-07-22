// Imports
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Apis
import api from "../../api/axios";

// Components
import OpportunityLarge from "../../components/opportunityLarge/opportunityLarge";

const OpportunityDetail = () => {
  // Hooks
  const { opportunityId } = useParams();

  // States
  const [opportunity, setOpportunity] = useState(null);

  // get Opportunity Details
  const getOpportunity = async () => {
    try {
      const response = await api.get(`/opportunities/all/${opportunityId}`);
      // toast.success(response.data.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setOpportunity(response.data.data.opportunity);
    } catch (err) {
      toast.error(err.response.data.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getOpportunity();
  }, []);

  return (
    <div className="h-[90vh]">
      {opportunity && <OpportunityLarge opportunity={opportunity} />}
      <ToastContainer />
    </div>
  );
};

export default OpportunityDetail;
