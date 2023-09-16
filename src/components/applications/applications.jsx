import api from "../../api/axios";

const Application = ({ application }) => {
  let textColorClass = "";

  if (application.status == "Pending") {
    textColorClass = "text-primary";
  } else if (application.status == "Accepted") {
    textColorClass = "text-success";
  } else if (application.status == "Rejected") {
    textColorClass = "text-error";
  }

  const handleWithdraw = async (app_id) => {
    try {
      const response = await api.post(`/myapplications/${app_id}/withdraw`);
      console.log(response.data.detail);
      window.location.reload(false);
    } catch (err) {
      console.log(err.response.data.detail);
    }
  };

  return (
    <>
      {/* FOR LG */}
      <div className="hidden md:flex card w-full rounded-lg bg-white shadow-md my-4">
        <div className="card-body p-4 px-6">
          <div className="flex flex-row items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">
              {application.opportunity_title}
            </h2>
            <div className={`text-2xl ${textColorClass} font-semibold`}>
              {application.status}
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-lg">
              <b>Applied at : </b>
              {application.created_at.slice(0, 10)}
            </div>
            <button
              className="px-5 py-1 hover:bg-red-600 text-red-600 border hover:text-accent rounded-lg text-lg border-red-600 font-semibold"
              onClick={() => handleWithdraw(application.id)}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}
      <div className="md:hidden card w-full rounded-lg bg-white shadow-md my-5">
        <div className="card-body p-5">
          <div className="flex mb-4">
            <h2 className="text-2xl font-semibold">
              {application.opportunity_title}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between mb-4">
            <div className="w-1/2 text-lg">
              <span class="material-symbols-outlined align-middle mr-2">
                schedule
              </span>
              {application.created_at.slice(0, 10)}
            </div>
            <div
              className={`w-1/2 text-end text-xl font-semibold ${textColorClass}`}
            >
              {application.status}
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-5 py-1 font-semibold w-full hover:bg-red-600 text-red-600 border hover:text-accent rounded-lg text-lg border-red-600">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
