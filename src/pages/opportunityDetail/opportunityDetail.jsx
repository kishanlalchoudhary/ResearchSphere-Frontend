import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios";
import OpportunityLarge from "../../components/opportunityLarge/opportunityLarge";

const OpportunityDetail = () => {
  const { opportunityId } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  const getOpportunity = async () => {
    try {
      const response = await api.get(`/opportunities/all/${opportunityId}`);
      setOpportunity(response.data.data.opportunity);
      // toast.success(response.data.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
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
