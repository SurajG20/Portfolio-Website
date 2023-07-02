import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" w-full pt-[6em] pb-[4em] bg-gray-1000 text-zinc-300 flex flex-col justify-center items-center gap-8  ">
      <ul className=" text-xl flex ">
        <li>
          <a href="https://www.linkedin.com/in/suraj-goswami01" target="_blank">
            <span class="">
              <FaLinkedin className="h-8 w-8 fill-white" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/SurajG20" target="_blank">
            <span class="">
              <FaGithub className="h-8 w-8 fill-white" />
            </span>
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            <span class="">
              <FaFilePdf className="h-8 w-8 fill-white" />
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:Surajgoswami3000@gmail.com" target="_blank">
            <span class="">
              <FaEnvelope className="h-8 w-8 fill-white" />
            </span>
          </a>
        </li>
      </ul>
      <ul class="flex ">
        <li className="text-xl font-bold">© Suraj Goswami</li>
        <li className="text-xl font-bold">2023</li>
      </ul>
    </footer>
  );
};
export default Footer;
