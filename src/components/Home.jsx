import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col px-8 xl:pl-24">
      <div class="xl:min-h-[80vh] flex flex-col gap-12  xl:mb-0 xl:mt-24 xl:pr-96 z-10 px-12 bg-[#131516] text-[#A6ADBB]">
        <h2 class="mt-2 mb-0 font-bold lg:text-5xl text-3xl">Hello!</h2>
        <h2 class="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
          I'm <span class="font-bold">Suraj Goswami</span>
        </h2>
        <h2 class="mt-2 mb-0 font-bold lg:text-5xl text-3xl">
          A front-end developer, passionate about web development and eager to
          learn, focused on creating engaging and user-friendly interfaces,
          while striving for scalability.
        </h2>
        <div class="flex gap-2 items-center">
          <h4 class="my-0 lg:text-lg text-base font-normal">Get in touch</h4>
          <div class="flex gap-2  ">
            <a
              href="mailto:surajgoswami3000@gmail.com"
              aria-label="Email Suraj Goswami"
              target="_blank"
            >
              <svg
                className="h-8 w-8 text-gray-500 hover:text-gray-900 transition-colors fill-current"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="MailIcon"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/SurajG20"
              aria-label="Suraj Goswami's GitHub"
              target="_blank"
            >
              <svg
                className="h-8 w-8 text-gray-500 hover:text-gray-900 transition-colors fill-current"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="GitHubIcon"
              >
                <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/suraj-goswami01"
              aria-label="Suraj Goswami's LinkedIn"
              target="_blank"
            >
              <svg
                className="h-8 w-8 text-gray-500 hover:text-gray-900 transition-colors fill-current"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LinkedInIcon"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div name="home" className="w-full h-screen bg-gray-1000 ">
    //   <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
    //     <p className="text-zinc-100 text-2xl ">Hi, My name is</p>
    //     <p className="text-5xl sm:text-7xl font-bold text-zinc-100 mt-2">
    //       Suraj Goswami
    //     </p>
    //     <p className="text-2xl sm:text-4xl mt-2  font-medium text-gray-300">
    //       Frontend Developer, Engineering student.
    //     </p>
    //     <div className="mt-6 flex gap-6">
    //       <a href="https://github.com/SurajG20" target="blank">
    //         <IoLogoGithub className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    //       </a>
    //       <a href="https://www.linkedin.com/in/suraj-goswami01" target="blank">
    //         <IoLogoLinkedin className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    //       </a>
    //       <a href="mailto:Surajgosami3000@gmail.com" target="blank">
    //         <IoMail className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    //       </a>
    //     </div>
    //     <div>
    //       <button className="text-gray-500 group border-2 border-b-gray-500 px-4 py-2 my-10 flex items-center hover:bg-zinc-800 hover:text-white hover:border-white">
    //         View Work
    //       </button>
    //       <Link to="work" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
