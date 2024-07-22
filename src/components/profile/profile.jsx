import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api/axios.js";
import List from "../list/list.jsx";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
    about: "",
    contactNo: 0,
    domains: [],
    skills: [],
  });

  const getProfileData = async () => {
    try {
      const response = await api.get(`/profile/my`);
      setFormData(response.data?.data?.profile);
      // toast.success(response.data?.message, {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    } catch (err) {
      toast.error(err.response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/profile/my`, formData);
      toast.success(response.data?.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
      getProfileData();
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
            Edit Profile
          </h2>
          <div className="form-control w-full">
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Full Name</div>
                <input
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">Profession</div>
                <select
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  value={formData?.profession}
                  name="profession"
                >
                  <option>Student</option>
                  <option>Professor</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Contact No</div>
                <input
                  type="text"
                  name="contactNo"
                  value={formData?.contactNo}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">Email</div>
                <input
                  type="text"
                  name="email"
                  disabled
                  value={formData?.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="text-lg font-bold mt-4 my-2">About</div>
            <textarea
              className="textarea textarea-bordered"
              name="about"
              onChange={handleChange}
              value={formData?.about}
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

export default Profile;
