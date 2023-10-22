// Images
import sumit from "../../assets/team/sumitshevtaker.jpg";
import sunay from "../../assets/team/sunaybhoyar.jpeg";
import kishanlal from "../../assets/team/kishanlalchoudhary.jpeg";
import abhishek from "../../assets/team/abhishekbhosale.jpg";

const AboutUs = () => {
  return (
    <>
      <h2 className="flex justify-center text-4xl pt-2 font-bold text-primary my-4 w-6/6 xl:w-5/6 mx-auto">
        About Us
      </h2>
      <div className="flex flex-col items-center pb-4 w-6/6 xl:w-5/6 mx-auto px-7 md:px-10">
        <p className="text-center">
          Welcome to ResearchSphere, an innovative initiative dedicated to
          fostering collaboration within the academic community. Our platform is
          designed to connect students and professors, enabling them to embark
          on exciting collaborative research opportunities.
        </p>
        <h3 className="text-2xl font-semibold text-primary my-3">Our Mission</h3>
        <p className="text-center">
          At ResearchSphere, our mission is to empower both students and
          professors to unlock their full potential in the world of academia. We
          believe in the power of knowledge, research, and innovation, and we
          strive to make these pursuits accessible to everyone.
        </p>
        <h3 className="text-2xl font-semibold text-primary my-3">Our Vision</h3>
        <p className="text-center">
          Our vision is to establish ResearchSphere as the go-to platform for
          academic collaboration and research exploration. We aim to create a
          dynamic ecosystem that encourages intellectual growth, knowledge
          sharing, and innovation.
        </p>
      </div>
      <h2 className="flex justify-center text-4xl font-bold text-primary mt-4 w-6/6 xl:w-5/6 mx-auto">
        Meet The Team
      </h2>
      <div className="lg:gap-xl-12 grid gap-x-6 sm:grid-cols-2 md:grid-cols-4 text-center mt-10 mb-8 w-full xl:w-5/6 mx-auto">
        <div className="mb-12 lg:mb-0 transform transition duration-500 hover:scale-110">
          <img
            className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[225px] md:w-[150px]"
            src={sumit}
            alt="avatar"
          />
          <h5 className="mb-4 text-2xl md:text-lg font-bold">
            Prof. Sumit Shevtaker
          </h5>
          <p className="mb-6 text-xl md:text-base">Mentor</p>
          <ul className="mx-auto flex list-inside justify-center">
            <a
              href="https://www.linkedin.com/in/sumit-shevtekar-19b54415/"
              className="px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
            <a href="https://www.sumitsshevtekar.com/" className="px-2">
              <svg
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
                viewBox="0 0 24 24"
                fill="#5F91FC"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="style=fill">
                  <g id="web">
                    <g id="Vector">
                      <path d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z" />
                      <path d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z" />
                      <path d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z" />
                      <path d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z" />
                      <path d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z" />
                      <path d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z" />
                      <path d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z" />
                      <path d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z" />
                      <path d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z" />
                      <path d="M1.6103 13.323C1.64665 13.3277 1.67628 13.3327 1.68611 13.3349C1.69472 13.337 1.70821 13.3406 1.7131 13.3419L1.72391 13.345L1.72973 13.3468L1.73585 13.3487L1.74098 13.3503C1.7381 13.3494 1.67976 13.3348 1.6103 13.323Z" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </ul>
        </div>
        <div className="mb-12 lg:mb-0 transform transition duration-500 hover:scale-110">
          <img
            className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[225px] md:w-[150px]"
            src={sunay}
            alt="avatar"
          />
          <h5 className="mb-4 text-2xl md:text-lg font-bold">Sunay Bhoyar</h5>
          <p className="mb-6 text-xl md:text-base">
            Frontend / UI &amp; UX Developer
          </p>
          <ul className="mx-auto flex list-inside justify-center">
            <a href="https://www.linkedin.com/in/sunaybhoyar/" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
            <a href="https://github.com/SunayBhoyar" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </ul>
        </div>
        <div className="mb-12 lg:mb-0 transform transition duration-500 hover:scale-110">
          <img
            className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[225px] md:w-[150px]"
            src={kishanlal}
            alt="avatar"
          />
          <h5 className="mb-4 text-2xl md:text-lg font-bold">
            Kishanlal Choudhary
          </h5>
          <p className="mb-6 text-xl md:text-base">Frontend Developer</p>
          <ul className="mx-auto flex list-inside justify-center">
            <a
              href="https://www.linkedin.com/in/kishanlal-choudhary-a94154217/"
              className="px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
            <a href="https://github.com/kishanlalchoudhary" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </ul>
        </div>
        <div className="mb-12 lg:mb-0 transform transition duration-500 hover:scale-110">
          <img
            className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[225px] md:w-[150px]"
            src={abhishek}
            alt="avatar"
          />
          <h5 className="mb-4 text-2xl md:text-lg font-bold">
            Abhishek Bhosale
          </h5>
          <p className="mb-6 text-xl md:text-base">Full Stack Developer</p>
          <ul className="mx-auto flex list-inside justify-center">
            <a
              href="https://www.linkedin.com/in/abhishek-bhosale-423abb1ba/"
              className="px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
            <a href="https://github.com/AbhishekBhosale46" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-4 lg:w-4 text-primary dark:text-primary-400"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
