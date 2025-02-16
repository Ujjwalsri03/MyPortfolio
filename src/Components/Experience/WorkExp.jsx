import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

import geekster from "../../assets/geektser.png";

const WorkExp = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0 hover:scale-105 duration-200">
              <a href="https://www.innomatics.in/" target="_blank" rel="noopener noreferrer">
                <Avatar size="lg" src={geekster} alt="Geekster Logo" />
              </a>
            </TimelineIcon>
            <div className="flex flex-col text-blue-900">
              <Typography variant="h5" className="font-bold">
                Geekster
              </Typography>
              <Typography className="font-bold text-gray-900 my-2">
                Full Stack Web Developer Trainee <br /> Jan 2024 - Dec 2024
              </Typography>
            </div>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <ul className="list-disc font-sans ml-5 text-black text-base">
              <li>Worked on various projects using the MERN stack.</li>
              <li>Developed applications using web frameworks.</li>
            </ul>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkExp;
