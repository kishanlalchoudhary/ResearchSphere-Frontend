import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Post = () => {
  
    // dummy request
    const result =
        {
          "id": 0,
          "title": "Title for the research opportunity ",
          "description": "string",
          "start_date": "2023-08-25",
          "end_date": "2023-08-25",
          "created_at": "2023-08-25T18:13:53.234Z",
          "created_by": "string",
          "opportunity_type": "string",
          "domains": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "skills": [
            {
              "id": 0,
              "name": "string"
            }
          ]
        }


    //hooks
    const navigate = useNavigate();

    const parsedDate = new Date("2023-08-25T18:13:53.234Z");
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
    const handleWithdrawClick = () => {
        navigate("../");                      // add the withdraw code here
    };
    

    return (
      <div className="lg:m-4 lg:p-6 m-2 p-2 border border-secondary lg:w-[70vw] rounded-lg shadow-md bg-accent flex flex-col lg:flex-row justify-center">
        <div className='flex flex-col w-full'>
          <h2 className="text-2xl font-semibold w-4/5">{result.title}</h2>
          
          <div className='px-2'>
            <p className="text-lg mt-2 flex justify-start items-center">
              <div>
                <b>Created At :</b> {formattedDate}
              </div>
            </p>
            <div className='flex flex-row w-full justify-around items-center'>
            <button
              onClick={handleWithdrawClick}
              className="flex bg-accent hover:bg-primary text-primary border hover:text-accent  border-primary  font-semibold px-4 py-2 rounded-lg mt-4 lg:mt-0"
            >
              Applicants
            </button>
            <button
              onClick={handleWithdrawClick}
              className="flex w-lg bg-accent hover:bg-primary text-primary border hover:text-accent  border-primary  font-semibold px-8 py-2 rounded-lg mt-4 lg:mt-0"
            >
              Edit
            </button>
            <button
              onClick={handleWithdrawClick}
              className="flex w-lg bg-accent hover:bg-red-600 text-red-600 border hover:text-accent  border-red-600  font-semibold px-6 py-2 rounded-lg mt-4 lg:mt-0"
            >
              Delete
            </button>
            </div>
            
          </div>
        </div>
        
      </div>
    );
    
};

export default Post;
