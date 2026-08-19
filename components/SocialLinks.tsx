

import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  // FaInstagram,
  // FaTelegram,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";


const linksData = [
  { 
    icon: <FaGithub />, 
    href: "http://github.com/rashedujjaman-dev",
    hoverClass: "hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white" 
  },
  { 
    icon: <FaLinkedin />, 
    href: "https://www.linkedin.com/in/rashedujjaman-dev",
    hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]" 
  },
  { 
    icon: <FaX />, 
    href: "https://x.com/rashedjaman_dev",
    hoverClass: "hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white" 
  },

  // { icon: <FaInstagram />, href: "https://www.instagram.com/rashedjamanraj" },
  
  { 
    icon: <FaWhatsapp />, 
    href: "https://wa.me/rashedujjaman.dev",
    hoverClass: "hover:text-[#25D366] hover:border-[#25D366]" 
  }, 
  { 
    icon: <FaFacebook />, 
    href: "http://facebook.com/rasedujjaman.dev",
    hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]" 
  },

  // {icon: <FaTelegram />, href: "https://t.me/rashedjamanraj"}, 
];

const SocialLinks = ({ className, iconStyle }: { className?: string; iconStyle?: string }) => {
  return (
    <div className={twMerge("text-xl text-slate-400 not-dark:text-slate-600 flex items-center gap-2", className)}>
      {linksData?.map((item, index) => (
        <Link
          key={index}
          href={item?.href}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "border border-slate-500 inline-flex p-2 rounded-full duration-300 cursor-pointer",
            item.hoverClass,
            iconStyle
          )}
        >
          {item?.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;