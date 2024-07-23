import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../api/axios";
import AppliedModal from "../appliedModal/appliedModal";
import { toast } from "react-toastify";

const ConfirmationalModal = ({ opportunityId }) => {
  const applyHandler = async () => {
    try {
      const response = await api.post(`/opportunities/all/${opportunityId}/apply`);
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      window.my_modal_3.showModal();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="my-6 bg-accent flex flex-col justify-center items-center max-w-md">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <h2 className="text-2xl font-semibold w-full text-center ">
        Are You sure you want to apply to the opportunity ?{" "}
      </h2>
      <button
        onClick={applyHandler}
        className="m-6 bg-primary text-white px-10 py-2 rounded-lg text-2xl"
      >
        Apply for it
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box bg-accent">
          <AppliedModal />
        </form>
      </dialog>
      <p className="text-sm">
        We will forward your application to them, you can check the status
        on&nbsp;
        <Link to="/my-applications">
          <u className="text-primary">My Application</u>
        </Link>{" "}
        page.
      </p>
    </div>
  );
};

ConfirmationalModal.propTypes = {
  opportunityId: PropTypes.number.isRequired,
};

export default ConfirmationalModal;
