import api from "../../api/axios";
import { useEffect } from "react";

const Explore = () => {
  useEffect(() => {
    api
      .get("/myapplications/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="h-[70vh]">this is Explore</div>
    </>
  );
};
export default Explore;
