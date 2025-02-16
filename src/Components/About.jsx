import React from "react";
import { useState, useEffect } from "react";
import PPng from "../assets/myimg2.png"; 
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Tooltip } from "@material-tailwind/react";
import Skills from "./Skills/Skills";

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



const About = () => {


  const texts = ["Front-end Developer", "React Developer"];
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = texts[wordIndex];

    // Typing effect
    if (charIndex <= fullText.length) {
      const typingSpeed = 100; // Speed at which each character is typed
      const timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Delay before switching to the next text
      const delay = 2000; // 2 seconds delay
      const timer = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % texts.length);
        setCharIndex(0);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [charIndex, wordIndex]);

  return (
    <div className="text-white">
      <div className="flex flex-col md:flex-row items-center justify-evenly h-screen w-full">
        <div className="mb-8 md:mb-0 mt-10">
          <img
            src={PPng} loading="lazy"
            alt="Ujjawal"
            className="rounded-t-full rounded-b-full w-48 h-72 md:w-64 md:h-96 object-cover object-center shadow-lg"
          />
        </div>

        <div className="container flex text-white text-center justify-center items-center w-full md:w-1/2 h-full flex-col">
          <div className="text-center">
            <h1 className="text-white text-2xl md:text-5xl font-sans font-semibold">
              About Me
            </h1>
          </div>
          <div className="text-blue-900 text-3xl md:text-5xl font-bold my-4 md:my-8 text-center">
            <h2>{currentText}</h2>
          </div>
          <div className="text-base font-medium relative text-black w-10/12 md:w-3/4">
            <p>
            I’m a React Developer skilled in creating fluid, interactive user experiences. I design dynamic, high-performance web applications with React, driven by a passion for problem-solving and ongoing development.</p>
          </div>
          <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white">
            <Link to="/projects">
              <Button
                variant="gradient"
                color="light-blue"
                className="flex gap-2 items-center mb-2 md:mb-0"
              >
                <FaReact className="text-lg" />
                Projects
              </Button>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1JcqLGPjNx-7hsiO3Jf4JB6QA4Xg1wHyN/view?usp=drive_link"
              target="_blank"
            >
              <Button
                variant="gradient"
                color="light-blue"
                className="flex gap-2 items-center"
              >
                <MdOutlineDocumentScanner className="text-white text-lg" />
                Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center gap-8 my-10">
        {Data.map((item, index) => (
          <Tooltip
            key={index}
            color="black"
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
        ))}
      </div>
      <Skills />
    </div>
  );
};

export default About;
