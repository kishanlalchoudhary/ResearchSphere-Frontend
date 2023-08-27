import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Application = () => {
  // dummy request
  const result = {
    id: 0,
    status: "pending",
    created_at: "2023-08-25T04:44:49.269Z",
    applicant: 0,
    opportunity: {
      id: 0,
      title: "Title for the research opportunity ",
      description:
        "We are a US-based software company that has been around for the past 7 years and provides software services for niche markets. Our company is already highly successful, profitable, and operating fast-paced in our development roadmap as we continue to gain market share. The company stability is extremely strong as we already have an established client base and sound financials. Currently, we have 6-7 members based in India and work exclusively remotely using platforms, such as Slack, GoogleMeet, and other technologies.",
      start_date: "2023-08-23",
      end_date: "2023-08-23",
      created_at: "2023-08-23T21:07:14.000Z",
      created_by: "string",
      opportunity_type: "string",
      domains: [
        {
          id: 0,
          name: "Domain1",
        },
        {
          id: 1,
          name: "Domain2",
        },

        {
          id: 0,
          name: "Domain1",
        },
      ],
      skills: [
        {
          id: 0,
          name: "string",
        },
      ],
    },
  };

  //hooks
  const navigate = useNavigate();

  //functions
  let textColorClass = "";

  if (result.status === "pending") {
    textColorClass = "text-primary";
  } else if (result.status === "approved") {
    textColorClass = "text-success";
  } else if (result.status === "rejected") {
    textColorClass = "text-error";
  }
  console.log(textColorClass);
  const parsedDate = new Date(result.created_at);
  const formattedDate = format(parsedDate, "yyyy-MM-dd");
  const handleWithdrawClick = () => {
    navigate("../"); // add the withdraw code here
  };

  return (
    <>
    {/* <div className="lg:m-4 lg:p-6 m-2 p-2 border border-secondary lg:w-[70vw] rounded-lg shadow-md bg-accent flex flex-col lg:flex-row justify-center">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold w-4/5">
          {result.opportunity.title}
        </h2>

        <div className="px-2">
          <p className="text-lg mt-2 flex justify-start items-center">
            <div>
              <b>Applied At :</b> {formattedDate}
            </div>
          </p>
          <button
            onClick={handleWithdrawClick}
            className="hidden lg:flex bg-accent hover:bg-red-600 text-red-600 border hover:text-accent  border-red-600  font-semibold px-4 py-2 rounded-lg mt-4 lg:mt-0"
          >
            Withdraw
          </button>
        </div>
      </div>
      <div className="flex lg:w-1/5 text-lg lg:text-xl text-center justify-between flex-row lg:flex-col px-2 ">
        <b>Status :</b>{" "}
        <p className={`text-xl ${textColorClass}`}>{result.status}</p>
        <div className="flex justify-center items-center">
          <button
            onClick={handleWithdrawClick}
            className="lg:hidden bg-accent hover:bg-red-600 text-red-600 border hover:text-accent  border-red-600  font-semibold px-4 py-2 rounded-lg mt-4 lg:mt-0"
          >
            Withdraw
          </button>
        </div>
      </div>
    </div> */}
    
    {/* FOR LG */}
    <div className="hidden lg:flex card lg:w-[70vw] rounded-lg bg-white shadow-md my-5">
      <div className="card-body p-4 px-6">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Title for opportunity goes here</h2>
          <div className={`text-2xl ${textColorClass}`}>Pending</div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-lg"><b>Applied at : </b>{formattedDate}</div>
          <button className="px-5 h-7 hover:bg-red-600 text-red-600 border hover:text-accent rounded-lg text-lg border-red-600">Withdraw</button> 
        </div>
      </div>
    </div>

    {/* FOR MOBILE */}
    <div className="lg:hidden card lg:w-[70vw] rounded-lg bg-white shadow-md my-5">
      <div className="card-body p-5">
        <div className="flex justify-center mb-4">
          <h2 className="text-2xl font-semibold">Opportunity title goes here </h2>
        </div>
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="w-1/2 text-lg">
            <span class="material-symbols-outlined align-middle mr-2">
              schedule
            </span>
            {formattedDate}
          </div> 
          <div className={`w-1/2 text-end text-xl ${textColorClass}`}>Pending</div>
        </div>
        <div className="flex justify-center">
          <button className="px-5 h-8 w-full hover:bg-red-600 text-red-600 border hover:text-accent rounded-lg text-lg border-red-600">Withdraw</button> 
        </div>
      </div>
    </div>




    </>

  );
};

export default Application;
