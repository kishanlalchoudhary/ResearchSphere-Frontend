// Imports
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Apis
import api from "../../api/axios";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Input value Change Handler
  const handleChange = (e) => {
    // console.log(e.target.name);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const response = await api.post(`/feedback/`, formData);
      // console.log(response.data);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Submitted Successfully", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center px-6 lg:px-0 pt-2 pb-6">
      <h2 className="flex text-4xl font-bold text-primary my-4">Feedback</h2>
      <div className="card bg-accent shadow-md w-full lg:w-3/6 rounded-lg">
        <div className="card-body p-5">
          <div className="form-control w-full">
            <div className="text-lg font-bold my-2">Name</div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <div className="text-lg font-bold mt-4 mb-2">Email</div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <div className="text-lg font-bold mt-4 mb-2">
              Suggestion / Feedback
            </div>
            <textarea
              className="textarea textarea-bordered"
              name="message"
              onChange={handleChange}
              value={formData.message}
              rows="3"
            ></textarea>
            <button
              className="btn bg-blue-500 text-slate-100 mt-7"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Feedback;
