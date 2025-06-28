import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/yourusername",
    icon: <FaGithub size={18} />,
    label: "GitHub",
  },
  {
    href: "https://facebook.com/yourusername",
    icon: <FaFacebookF size={18} />,
    label: "Facebook",
  },
  {
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/yourusername",
    icon: <FaTwitter size={18} />,
    label: "Twitter",
  },
];

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center gap-5 fixed left-6 top-1/3 z-40">
      {/* Icons */}
      {socialLinks.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-white hover:text-gray-400 transition-colors duration-200"
        >
          {icon}
        </a>
      ))}

      {/* Divider */}
      <div className="w-px h-16 bg-white opacity-70 mt-2"></div>

      {/* Label */}
      <span className="text-xs text-white tracking-wider rotate-90 mt-2 font-medium">
        Follow Me
      </span>
    </div>
  );
};

export default SocialSidebar;
