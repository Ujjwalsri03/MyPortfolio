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
// import university from "./assets/university.png";

import ptu from "../../assets/ptu.png"
import bseb from "../../assets/bseb.jpeg"
import up from "../../assets/up2.png"


const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src={ptu}
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              I.K Gujral Punjab technical university
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="white" className="font-semibold text-black">
            Bachelor of Technology (B-tech) , Computer Science 
            <br /> 2021 - 2025 <br /> CGPA : 8.8
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src={up}
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
             Board of High School and Intermediate Education, Uttar Pradesh
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
              Mahatma Gandhi Intermediate College, Gorakhpur(U.P.)<br /> 12th: Percentage : 79.2 %
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src={bseb}
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
            Bihar School Examination Board
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
          <Typography color="white" className="font-semibold text-black">
            Baba Bal Nath High School, Chittakhal(Bihar)<br /> 10th: Percentage : 78.2 %
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
