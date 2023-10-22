// Imports
import { Link } from "react-router-dom";

// Images
// import HeroPic from "../../assets/HomePage/homepage.png";
import adv1 from "../../assets/HomePage/adv.png";
import st1 from "../../assets/HomePage/stepone.png";
import st2 from "../../assets/HomePage/steptwo.png";
import st3 from "../../assets/HomePage/stepthree.png";
import amico from "../../assets/HomePage/amico.svg";

const HomePage = () => {
  return (
    <>
      {/* page here */}
      <div className="hero min-h-full bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse py-10 lg:py-0">
          {/* hero image */}
          <div className="lg:py-20 lg:px-30 sm:px-0 px-10">
            <img
              src={amico}
              className="lg:max-w-md min-w-xs xl:ms-10 rounded-lg"
            />
          </div>

          {/* company slogan */}
          <div className="lg:pr-40 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold lg:text-left">
              Empowering
              <br />
              Curiosity,
              <br />
              Igniting
              <br />
              Discoveries
            </h1>
            <p className="py-6 text-xl lg:pl-0 lg:text-left">
              Connect to research opportunities{" "}
            </p>
            <Link to="/explore">
              <button className="btn btn-primary text-accent lg:ml-0">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* page hero ends here */}

      {/* why join us cards */}
      <div className="bg-secondary lg:px-20 py-10 px-7">
        <h1 className="text-3xl lg:text-5xl text-center font-bold">
          Why Join Us ?
        </h1>
        <div className="flex flex-col lg:flex-row justify-around">
          {/* card 1 */}
          <div className="pt-10 lg:pr-10">
            <div className="card  lg:w-80 glass p-4">
              <figure>
                <img src={adv1} />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">
                  Empowering Collaboration
                </h2>
                <p className="text-center">
                  We believe that great ideas are born when minds collaborate.
                </p>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="pt-10 lg:pr-10">
            <div className="card  lg:w-80 glass p-4">
              <figure>
                <img src={adv1} />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">
                  Empowering Collaboration
                </h2>
                <p className="text-center">
                  We believe that great ideas are born when minds collaborate.
                </p>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="pt-10 lg:pr-10">
            <div className="card  lg:w-80 glass p-4">
              <figure>
                <img src={adv1} />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">
                  Empowering Collaboration
                </h2>
                <p className="text-center">
                  We believe that great ideas are born when minds collaborate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why join us cards ends here */}
      {/* how to use cards */}
      <div className="lg:pl-20 px-auto py-10">
        <h1 className="text-3xl lg:text-5xl text-center font-bold">
          How to use the Platform ?{" "}
        </h1>
      </div>

      {/* step 1 */}
      <div className="hero min-h-full bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {/* step one image */}
          <div className="lg:px-20 px-10">
            <img src={st1} className="lg:max-w-md min-w-xs rounded-lg" />
          </div>

          <div className="2xl:pr-40 sm:px-10">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Connect to platform and build your profile
            </h1>
            <p className="py-6 break-words text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eveniet corrupti quis, possimus id ducimus cupiditate non dolor
              itaque alias optio fuga dolorem assumenda, ipsam unde odit!
              Tempore nulla cumque, iusto adipisci nihil facere! Blanditiis
              numquam impedit repellendus iure quibusdam?
            </p>
          </div>
        </div>
      </div>

      {/* step 2 */}
      <div className="hero min-h-full bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row ">
          {/* step two image */}
          <div className="lg:px-20 px-10">
            <img src={st2} className="lg:max-w-md min-w-xs rounded-lg" />
          </div>

          <div className="xl:pr-40 sm:px-10">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Explore the various opportunities{" "}
            </h1>
            <p className="py-6 break-words text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eveniet corrupti quis, possimus id ducimus cupiditate non dolor
              itaque alias optio fuga dolorem assumenda, ipsam unde odit!
              Tempore nulla cumque, iusto adipisci nihil facere! Blanditiis
              numquam impedit repellendus iure quibusdam?
            </p>
          </div>
        </div>
      </div>

      {/* step 3 */}
      <div className="hero min-h-full bg-base-100 mb-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          {/* step three image */}
          <div className="lg:px-20 px-10">
            <img src={st3} className="lg:max-w-md min-w-xs rounded-lg" />
          </div>

          <div className="lg:pr-40 sm:px-10">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Join the Research opportunity
            </h1>
            <p className="py-6 break-words text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              eveniet corrupti quis, possimus id ducimus cupiditate non dolor
              itaque alias optio fuga dolorem assumenda, ipsam unde odit!
              Tempore nulla cumque, iusto adipisci nihil facere! Blanditiis
              numquam impedit repellendus iure quibusdam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
