import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import Applicants from "../../components/applicant/applicant";

const PostApplicants = () => {
  // dummy request
  const result = {
    id: 0,
    title: "Title for the research opportunity ",
    description: "string",
    start_date: "2023-08-25",
    end_date: "2023-08-25",
    created_at: "2023-08-25T18:13:53.234Z",
    created_by: "string",
    opportunity_type: "string",
    domains: [
      {
        id: 0,
        name: "string",
      },
    ],
    skills: [
      {
        id: 0,
        name: "string",
      },
    ],
  };

  //hooks
  const navigate = useNavigate();

  const parsedDate = new Date("2023-08-25T18:13:53.234Z");
  const formattedDate = format(parsedDate, "yyyy-MM-dd");
  const handleWithdrawClick = () => {
    navigate("../"); // add the withdraw code here
  };

  return (
    <div className="lg:m-4 lg:p-6 m-2 p-2 border border-secondary lg:w-[70vw] rounded-lg shadow-md bg-accent flex flex-col lg:flex-row justify-center">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold w-4/5">{result.title}</h2>

        <div className="px-2">
          <p className="text-lg mt-2 flex justify-start items-center">
            <div>
              <b>Created At :</b> {formattedDate}
            </div>
          </p>
          <p className="text-lg mt-2 flex justify-start items-center">
            <div>
              <b>Applicants :</b>
            </div>
          </p>
          <div className="flex flex-col w-full gap-5">
            <Applicants name="Jane Smith" profileId="67890" />
            <Applicants name="John Doe" profileId="12345" />
            <Applicants name="Jane Smith" profileId="67890" />
            <Applicants name="John Doe" profileId="12345" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostApplicants;
