import { Tooltip } from "@material-tailwind/react";
import insta from "../assets/instagram.png";

const Data = [
  {
    link: "www.linkedin.com/in/ujjawal-shriwastav-985378247",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    tooltip: "Connect on LinkedIn",
  },
  {
    link: "https://github.com/Ujjwalsri03",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tooltip: "Connect on GitHub",
  },
  {
    link: "https://www.instagram.com/_ujjwal._03/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    tooltip: "Follow on Instagram",
  },
  {
    link: "mailto:Ujjawalshriwastav9771@gmail.com",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-mail-1299-1100772.png?f=webp&w=256",
    tooltip: "Email Me",
  },
];

const Social = () => {
  return (
<section className="fixed top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 text-white hidden lg:flex flex-col gap-4 z-20">

      {Data.map((item, index) => {
        return (
          <Tooltip
            key={index}
            color="black"
            placement="right"
            content={item.tooltip}
            className="bg-white text-black"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center"
            >
              <img src={item.icon} alt={item.tooltip} loading="lazy" className="p-2 text-white bg-white rounded-full" />
            </a>
          </Tooltip>
        );
      })}
    </section>
  );
};

export default Social;
