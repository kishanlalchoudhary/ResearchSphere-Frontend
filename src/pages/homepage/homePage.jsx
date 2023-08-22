import { useState } from 'react'
import HeroPic from '../../assets/HomePage/homepage.png'
import adv1 from '../../assets/HomePage/adv.png'
import st1 from '../../assets/HomePage/stepone.png'
import st2 from '../../assets/HomePage/steptwo.png'
import st3 from '../../assets/HomePage/stepthree.png'
function HomePage() {

    return (
   <>
   {/* page hero --------------------------------------------------------------------------------------- */}
        <div className="hero min-h-full bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse">

            {/* hero image */}
            <div className="lg:py-20 px-20">
                <img src={HeroPic} className="lg:max-w-md min-w-xs rounded-lg" />
            </div>

            {/* company slogan */}
                <div className='pr-40'>
                    <h1 className="text-4xl lg:text-6xl font-bold text-left pl-10 lg:pl-0">Empowering<br/>Curiosity,<br/>Igniting<br/>Discoveries</h1>
                    <p className="py-6 pl-10 text-xl lg:pl-0">Connect to research opportunities </p>
                    <button className="btn btn-primary text-accent ml-10 lg:ml-0">Get Started</button>
                </div>

            </div>
      </div>
      {/* page hero ends here--------------------------------------------------------------------------------------- */}

      {/* why join us cards ---------------------------------------------------------------------------------------*/}
      <div className='bg-secondary lg:px-20 p-10'>
        <h1 className="text-2xl text-center font-bold">Why Join Us ?</h1>
        <div className='flex flex-col lg:flex-row justify-around'>

            {/* card 1 */}
            <div className='pt-10 lg:pr-10'>
                <div className="card  lg:w-80 glass p-4">
                    <figure><img src={adv1} /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title text-center">Empowering Collaboration</h2>
                        <p className="text-center">We believe that great ideas are born when minds collaborate.</p>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className='pt-10 lg:pr-10'>
                <div className="card  lg:w-80 glass p-4">
                    <figure><img src={adv1} /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title text-center">Empowering Collaboration</h2>
                        <p className="text-center">We believe that great ideas are born when minds collaborate.</p>
                    </div>
                </div>
            </div>

            {/* card 3 */}
            <div className='pt-10 lg:pr-10'>
                <div className="card  lg:w-80 glass p-4">
                    <figure><img src={adv1} /></figure>
                    <div className="card-body flex flex-col items-center">
                        <h2 className="card-title text-center">Empowering Collaboration</h2>
                        <p className="text-center">We believe that great ideas are born when minds collaborate.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* why join us cards ends here --------------------------------------------------------------------------------------- */}
        {/* how to use cards ---------------------------------------------------------------------------------------*/}
        <div className='bg-accent lg:pl-20 pl-10 py-10'>
            <h1 className="text-2xl lg:text-4xl text-center font-bold">How to use the Platform ?  </h1>
        </div>

        {/* step 1 */}
        <div className="hero min-h-full bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">

                {/* step one image */}
                <div className="px-20 ">
                    <img src={st1} className="lg:max-w-md min-w-xs rounded-lg" />
                </div>

                    <div className='lg:pr-40 px-10'>
                        <h1 className="text-2xl lg:text-4xl font-bold">Connect to platform and build your profile</h1>
                        <p className="py-6">We are a US-based software company that has been around for the past 7 years and provides software servWe are a US-based software company that has been around for the past 7 years and provides software serv</p>
                    </div>

            </div>
       </div>

       {/* step 2 */}
       <div className="hero min-h-full bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row ">

                {/* step two image */}
                <div className="px-20">
                    <img src={st2} className="lg:max-w-md min-w-xs rounded-lg" />
                </div>

                    <div className='lg:pr-40 px-10'>
                        <h1 className="text-2xl lg:text-4xl font-bold">Explore the various opportunities </h1>
                        <p className="py-6">We are a US-based software company that has been around for the past 7 years and provides software servWe are a US-based software company that has been around for the past 7 years and provides software serv</p>
                    </div>

            </div>
       </div>
       {/* step 3 */}
       <div className="hero min-h-full bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">

                {/* step three image */}
                <div className="px-20">
                    <img src={st3} className="lg:max-w-md min-w-xs rounded-lg" />
                </div>

                    <div className='lg:pr-40 px-10'>
                        <h1 className="text-2xl lg:text-4xl font-bold">Join the Research opportunity</h1>
                        <p className="py-6">We are a US-based software company that has been around for the past 7 years and provides software servWe are a US-based software company that has been around for the past 7 years and provides software serv</p>
                    </div>

            </div>
       </div>
       {/* how to use cards ends here---------------------------------------------------------------------------------------*/}
    </>
    )
  }

  export default HomePage
