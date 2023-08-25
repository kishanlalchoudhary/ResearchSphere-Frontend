import MultiSelectInput from "../multiSelectInput/multiSelectInput"

const OpportunityForm = () =>{
    return(
        <div className="flex justify-center items-center lg:p-10 py-10">
            <div className="card bg-base-100 shadow-xl border-2 w-5/6">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Create Opportunity</h2>
                    <div className="form-control w-full">
                        <div className='text-lg font-bold mt-5 my-2'>Title</div>
                        <input type="text" className="input input-bordered w-full" />
                        <div className="flex lg:flex-row flex-col mt-5 lg:space-x-6">
                            <div className="flex-1 ">
                                <div className='text-lg font-bold my-2'>Start Date</div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className="flex-1">
                                <div className='text-lg font-bold my-2'>End Date</div>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='text-lg font-bold mt-7 my-2'>Description</div>
                        <textarea className="textarea textarea-bordered" rows="3"></textarea>
                        <div className="flex lg:flex-row flex-col mt-5 lg:space-x-6">
                            <div className="flex-1 ">
                                
                                <div className='text-lg font-bold my-2'>Domains</div>
                                <MultiSelectInput/>
                            </div>
                            <div className="flex-1 ">
                                <div className='text-lg font-bold my-2'>Skills</div>
                                <MultiSelectInput/>
                            </div>
                        </div>
                        <button className='btn bg-blue-500 text-slate-100 mt-7'>Create</button>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default OpportunityForm