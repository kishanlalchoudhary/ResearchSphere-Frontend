// Imports
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useParams } from "react-router-dom";

// Api
import api from "../../api/axios";

const ProfileDetails = () => {
  // Hooks
  const { userId } = useParams();
  // console.log(userId);

  // States
  const [profile, setProfile] = useState({});

  // Get Profile Data
  const getProfileData = async () => {
    try {
      const response = await api.get(`/profile/${userId}`);
      // console.log(response.data);
      // toast.success("Profile Fetched Successfully", {
      //   theme: "colored",
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
      setProfile(response.data);
    } catch (err) {
      // console.log(err.message);
      toast.err(err.message, {
        theme: "colored",
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="lg:flex lg:items-center lg:justify-center ">
      <div className="my-10 mx-5 p-4 lg:p-6 border border-secondary rounded-lg shadow-md bg-accent flex flex-col w-6/6 lg:w-3/6 ">
        <div className="flex justify-between sm:flex-row flex-col">
          <h2 className="text-2xl font-semibold">{profile.user_name}</h2>
          <div className="flex gap-4 mt-5 sm:mt-0">
            {profile.domains &&
              profile.domains?.map((domain, index) => (
                <h3
                  key={index}
                  className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
                >
                  {domain.name}
                </h3>
              ))}
          </div>
        </div>

        <div className="px-1">
          <div className="text-lg my-5 flex flex-wrap justify-between gap-2 items-start">
            <div>
              <b>Contact No : </b>
              {profile.contact_no}
            </div>
            <div>
              <b>Contact Email : </b>
              {profile.contact_email}
            </div>
            <div>
              <b>Role : </b>
              {profile.role}
            </div>
          </div>
        </div>

        <div className="sm:mb-6 px-1 text-lg text-justify">
          <b>
            About : <br />
          </b>
          <p className="px-1">{profile.about}</p>
        </div>

        <div className="flex flex-wrap justify-start items-center text-lg gap-4 my-5 sm:mt-0 px-1">
          <b>Skills : </b>
          {profile.skills &&
            profile.skills?.map((skill, index) => (
              <h3
                key={index}
                className="text-md rounded-lg border border-primary px-2 py-1 font-semibold text-primary"
              >
                {skill?.name}
              </h3>
            ))}
        </div>
        <Link to={-1}>
          <button className="bg-primary text-white font-semibold px-4 py-3 rounded-lg w-full">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
