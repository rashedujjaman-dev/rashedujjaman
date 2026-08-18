import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const linksData = [
  { icon: <FaGithub />, href: "http://github.com/rashedujjaman-dev" },
  
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rashedujjaman-dev" },
  { icon: <FaX />, href: "https://x.com/rashedjaman_dev" },
  // { icon: <FaInstagram />, href: "https://www.instagram.com/rashedjamanraj" },
  {icon: <FaWhatsapp />, href: "https://wa.me/rashedujjaman.dev"}, 
  { icon: <FaFacebook />, href: "http://facebook.com./rasedujjaman.dev" },
  // {icon: <FaTelegram />, href: "https://t.me/rashedjamanraj"}, 
];

const SocialLinks = ({className, iconStyle} : {className?:string, iconStyle?:string}) => {
  return (
    <div className=" text-xl text-slate-400 not-dark:text-slate-600 flex items-center gap-2">
      {linksData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="blank"
          className={twMerge(" border border-slate-500 inline-flex p-2 rounded-full hover:text-sky-500 hover:border-sky-500 duration-300 cursor-pointer", iconStyle)}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;