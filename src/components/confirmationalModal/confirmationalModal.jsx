import { Link } from "react-router-dom";
import AppliedModal from "../appliedModal/appliedModal";

const ConfirmationalModal = () => {
  return (
    <div className="my-6 bg-accent flex flex-col justify-center items-center max-w-md">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
      </button>
      <h2 className="text-2xl font-semibold w-full text-center ">
        Are You sure you want to apply to the opportunity ?{" "}
      </h2>
      <button
        onClick={() => window.my_modal_3.showModal()}
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
        We will send you portfolio to the professor , you can check the result
        from{" "}
        <Link to="/my-applications">
          <u>My Application</u>
        </Link>{" "}
        .
      </p>
    </div>
  );
};

export default ConfirmationalModal;
