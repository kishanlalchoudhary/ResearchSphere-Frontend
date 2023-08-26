import MultiSelectInput from "../multiSelectInput/multiSelectInput";
import api from "../../api/axios.js";
import { useEffect, useState } from "react";

const OpportunityForm = () => {
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

  const getData = async () => {
    try {
      const domainData = await api.get("/domains/");
      const skillData = await api.get("/skills/");
      console.log(domainData.data, skillData.data);
      setDomains(domainData.data);
      setSkills(skillData.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

  const domainsHandler = (data) => {
    setFormData((prev) => ({
      ...prev,
      domains: data.map((domain) => {
        return { name: domain.value };
      }),
    }));
  };

  const skillsHandler = (data) => {
    setFormData((prev) => ({
      ...prev,
      skills: data.map((skill) => {
        return { name: skill.value };
      }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await api.post(`/opportunities/me/`, formData);
      console.log("From backend");
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="card bg-white shadow-xl border-2 w-full lg:w-3/6">
        <div className="card-body p-5">
          <h2 className="card-title justify-center text-2xl lgtext-3xl font-bold">
            Create Opportunity
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
                />
              </div>
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Skills</div>
                <MultiSelectInput
                  data={skills ? skills : []}
                  dataHandler={skillsHandler}
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
    </div>
  );
};
export default OpportunityForm;
