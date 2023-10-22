// Imports
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

// Componenst
import MultiSelectInput from "../multiSelectInput/multiSelectInput";

// Apis
import api from "../../api/axios.js";

const Profile = ({ userName }) => {
  // States
  const [formData, setFormData] = useState({
    id: null,
    role: "Student",
    user_name: userName,
    about: "",
    contact_no: 0,
    contact_email: "",
    domains: null,
    skills: null,
  });

  const [domains, setDomains] = useState(null);
  const [skills, setSkills] = useState(null);
  const [flag, setFlag] = useState(false);

  // Get Post Data, Domains and Skills
  const getProfileData = async () => {
    try {
      // const user = await api.get(`/auth/users/`);
      const profile = await api.get(`/profile/me/`);
      const domainData = await api.get("/domains/");
      const skillData = await api.get("/skills/");
      // console.log(domainData.data, skillData.data, profile.data);
      setDomains(domainData.data);
      setSkills(skillData.data);
      // console.log(profile.data);
      if (profile.data.length != 0) {
        setFormData((prev) => ({
          ...prev,
          id: profile.data[0].id,
          role: profile.data[0].role,
          about: profile.data[0].about,
          contact_no: profile.data[0].contact_no,
          contact_email: profile.data[0].contact_email,
          domains: profile.data[0].domains,
          skills: profile.data[0].skills,
        }));
        setFlag(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  // Input value Change Handler
  const handleChange = (e) => {
    console.log(e);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
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
      if (flag) {
        const response = await api.put(`/profile/me/${formData.id}/`, formData);
        // console.log(response.data);
        toast.success("Profile Updated Successfully", {
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        const response = await api.post(`/profile/me/`, formData);
        // console.log(response.data);
        toast.success("Profile Created Successfully", {
          theme: "colored",
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
      getProfileData();
    } catch (err) {
      console.log(err);
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
            {flag ? "Edit Profile" : "Create Profile"}
          </h2>
          <div className="form-control w-full">
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Full Name</div>
                <input
                  type="text"
                  name="user_name"
                  value={userName}
                  disabled
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">Role</div>
                <select
                  className="select select-bordered w-full"
                  onChange={handleChange}
                  value={formData.role}
                  name="role"
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
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold my-2">Contact Email</div>
                <input
                  type="text"
                  name="contact_email"
                  value={formData.contact_email}
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
              value={formData.about}
              rows="2"
            ></textarea>
            <div className="flex lg:flex-row flex-col mt-2 lg:space-x-6">
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Domains</div>
                <MultiSelectInput
                  data={domains ? domains : []}
                  dataHandler={domainsHandler}
                  selectedData={formData.domains ? formData.domains : []}
                />
              </div>
              <div className="flex-1 ">
                <div className="text-lg font-bold my-2">Skills</div>
                <MultiSelectInput
                  data={skills ? skills : []}
                  dataHandler={skillsHandler}
                  selectedData={formData.skills ? formData.skills : []}
                />
              </div>
            </div>
            <button
              className="btn bg-blue-500 text-slate-100 mt-7"
              onClick={handleSubmit}
            >
              {flag ? "Save" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Profile;
