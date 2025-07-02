import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";

export const ProfileInfo = {
  profileName: "Shahadot Hossain Sakib",
  photo: "/public/images/sakibbdcse.png",
  designation: "Full Stack Developer",
  country: "Bangladesh",
  experience: "5 years",
  call: "+8801766195363",
  email: "sakibbd.cse@gmail.com",
  socialMedia: [
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "www.linkedin.com/in/sakib6619/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/sakibbdcse",
    },
    {
      name: "Hackerrank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/profile/sakibbdcse",
    },
  ],
};
