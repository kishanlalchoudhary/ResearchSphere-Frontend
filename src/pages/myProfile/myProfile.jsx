// Imports
import { useEffect, useState } from "react";

// Components
import Profile from "../../components/profile/profile";

// Apis
import api from "../../api/axios.js";

const MyProfile = () => {
  // States
  const [userName, setUserName] = useState("");

  // Get User Data
  const getUserData = async () => {
    try {
      const user = await api.get(`/auth/users`);
      setUserName(user.data[0].name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <Profile userName={userName} />;
};

export default MyProfile;
