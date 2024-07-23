import List from "../list/list.jsx";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import moment from "moment";
import api from "../../api/axios.js";

const OpportunityEdit = () => {
  const { postId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: new Date().toISOString().split("T")[0],
    startDate: new Date().toISOString().split("T")[0],
    endDate: "",
    domains: [],
    skills: [],
  });

  const getData = async () => {
    try {
      const response = await api.get(`/opportunities/my/${postId}`);
      const post = response.data?.data?.opportunity;
      setFormData((prev) => ({
        ...prev,
        title: post?.title,
        description: post?.description,
        startDate: moment(post?.startDate).format("YYYY-MM-DD"),
        endDate: moment(post?.endDate).format("YYYY-MM-DD"),
        domains: post?.domains,
        skills: post?.skills,
      }));
    } catch (err) {
      console.log(err);
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/opportunities/my/${postId}`, formData);
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
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
    <div className="flex justify-center px-4 py-8">
      <div className="card bg-accent shadow-md w-full lg:w-3/6 rounded-lg">
        <div className="card-body p-5">
          <h2 className="card-title justify-center text-2xl lgtext-3xl font-bold">
            Edit Opportunity
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
                  onChange={handleChange}
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
              Save
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OpportunityEdit;
