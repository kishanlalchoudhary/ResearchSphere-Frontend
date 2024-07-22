// Imports
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// Apis
import api from "../../api/axios.js";
import List from "../list/list.jsx";

const OpportunityForm = () => {
  // States
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    domains: [],
    skills: [],
  });

  // Input value Change Handler
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Opportunity Creation Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/opportunities/my`, formData);
      setFormData({
        title: "",
        description: "",
        startDate: new Date().toISOString().split("T")[0],
        endDate: new Date().toISOString().split("T")[0],
        domains: [],
        skills: [],
      });
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  const addDomain = (domain) => {
    setFormData((prev) => ({
      ...prev,
      domains: [...prev.domains, domain],
    }));
  };

  const addSkill = (skill) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const deleteDomain = (index) => {
    setFormData((prev) => ({
      ...prev,
      domains: prev.domains.filter((_, i) => i !== index),
    }));
  };

  const deleteSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="card bg-accent shadow-md w-full lg:w-3/6 rounded-lg">
        <div className="card-body p-5">
          <h2 className="card-title justify-center text-2xl lgtext-3xl font-bold">
            Create Opportunity
          </h2>
          <div className="form-control w-full">
            <div className="text-lg font-bold my-2">Title</div>
            <input
              type="text"
              name="title"
              value={formData?.title}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Start Date</div>
                <input
                  type="date"
                  name="startDate"
                  value={formData?.startDate}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Type here"
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">End Date</div>
                <input
                  type="date"
                  name="endDate"
                  value={formData?.endDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleChange}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="text-lg font-bold mt-4 my-2">Description</div>
            <textarea
              className="textarea textarea-bordered"
              name="description"
              onChange={handleChange}
              value={formData?.description}
              rows="2"
            ></textarea>
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Domains</div>
                <List
                  list={formData?.domains}
                  addDataHandler={addDomain}
                  deleteDataHandler={deleteDomain}
                />
              </div>
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Skills</div>
                <List
                  list={formData?.skills}
                  addDataHandler={addSkill}
                  deleteDataHandler={deleteSkill}
                />
              </div>
            </div>
            <button
              className="btn bg-blue-500 text-slate-100 mt-7"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};
export default OpportunityForm;
