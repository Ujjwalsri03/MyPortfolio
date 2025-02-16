import { useState, useEffect } from "react";
import Mypic from "../assets/Ujjawal.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Hero = () => {
  
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
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-6 xl:mx-0">
        <p className="text-2xl font-bold text-black">Hey,</p>
        <p className="text-3xl md:text-5xl font-bold relative text-white">
          I'm
          <span className="text-blue-800 ml-4 uppercase">Ujjawal Shriwastav</span>
        </p>
        <p className="text-xl font-bold relative uppercase text-black">
          {currentText}
        </p>
        <p className="text-base font-medium w-10/12 md:w-2/3 relative text-black">
        Passionate about React, I specialize in creating dynamic and responsive user interfaces. With a focus on React’s component-based architecture, I build efficient, scalable web applications that deliver engaging user experiences.
        </p>
        <div className="flex flex-row justify-center md:justify-normal gap-4 md:gap-6 mt-5 text-white">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex gap-2 items-center"
            >
              <FaUserTie className="text-lg" />
              About Me
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
      <div>
        <img
          src={Mypic}
          loading="lazy"
          alt="Abhinandan"
          className="rounded-full w-52 h-52 md:w-72 md:h-72 object-cover object-center shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
