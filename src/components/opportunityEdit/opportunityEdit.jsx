// Imports
import MultiSelectInput from "../multiSelectInput/multiSelectInput";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

// Apis
import api from "../../api/axios.js";

const OpportunityEdit = () => {
  // Hooks
  const { postId } = useParams();
  // console.log(postId);

  // States
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    domains: [],
    skills: [],
  });
  const [domains, setDomains] = useState(null);
  const [skills, setSkills] = useState(null);

  // Get Post Data, Domains and Skills
  const getData = async () => {
    try {
      const post = await api.get(`/opportunities/me/${postId}/`);
      const domainData = await api.get("/domains/");
      const skillData = await api.get("/skills/");
      // console.log(domainData.data, skillData.data, post.data);
      setFormData((prev) => ({
        ...prev,
        title: post.data.title,
        description: post.data.description,
        start_date: post.data.start_date,
        end_date: post.data.end_date,
        domains: post.data.domains,
        skills: post.data.skills,
      }));
      setDomains(domainData.data);
      setSkills(skillData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Input value Change Handler
  const handleChange = (e) => {
    // console.log(e.target.name);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  // Setting Selected Domains
  const domainsHandler = (data) => {
    setFormData((prev) => ({
      ...prev,
      domains: data.map((domain) => {
        return {
          name: domain.value.charAt(0).toUpperCase() + domain.value.slice(1),
        };
      }),
    }));
  };

  // Setting Selected Skills
  const skillsHandler = (data) => {
    setFormData((prev) => ({
      ...prev,
      skills: data.map((skill) => {
        return {
          name: skill.value.charAt(0).toUpperCase() + skill.value.slice(1),
        };
      }),
    }));
  };

  // Post Edit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      const response = await api.put(`/opportunities/me/${postId}/`, formData);
      // console.log(response.data);
      toast.success("Opportunity Updated Successfully", {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      Object.keys(err.response.data).forEach((key) =>
        // console.log(
        // key[0].toUpperCase() +
        //   key.substring(1) +
        //   " : " +
        //   err.response.data[key][0]
        // )
        toast.error(
          key[0].toUpperCase() +
            key.substring(1) +
            " : " +
            err.response.data[key][0],
          {
            theme: "colored",
            closeOnClick: true,
            pauseOnHover: true,
          }
        )
      );
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
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Start Date</div>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  placeholder="Type here"
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">End Date</div>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
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
              value={formData.description}
              rows="2"
            ></textarea>
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Domains</div>
                <MultiSelectInput
                  data={domains ? domains : []}
                  dataHandler={domainsHandler}
                  selectedData={formData.domains}
                />
              </div>
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Skills</div>
                <MultiSelectInput
                  data={skills ? skills : []}
                  dataHandler={skillsHandler}
                  selectedData={formData.skills}
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
