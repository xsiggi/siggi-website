import JobCard from "@/components/cards/JobCard";
import { desc } from "framer-motion/client";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Festi",
    year: "Jun. 2024 - Present",
    description: "I am working on the frontend team at Festi.",
  },
  {
    title: "Computer science with a minor in business Bachelor degree",
    company: "Reykavik University",
    year: "Aug. 2021 - May 2024",
    description: "I studied computer science at Reykavik University.",
  },
  {
    title: "Full stack internship",
    company: "Festi",
    year: "Jan. 2024 - May 2024",
    description: "I worked as a full stack intern at Festi.",
  },
  {
    title: "Final project",
    company: "Dohop",
    year: "Jan. 2024 - May 2024",
    description: "I worked on the final project at Dohop.",
  },
  {
    title: "Website specialist",
    company: "Ekran",
    year: "Des. 2023 - May 2024",
    description: "I worked as a website specialist at Ekran.",
  },
  {
    title: "Studied abroad: Brisbane",
    company: "Queensland University of Technology",
    year: "Feb. 2023 - Jun. 2023",
    description: "I studied abroad in Brisbane.",
  },
  {
    title: "Summer job as a customer service representative",
    company: "Arion Bank",
    year: "Summer 2021 & summer 2022",
    description: "I worked at Arion Bank during the summers.",
  },
  {
    title: "First semester scholarship",
    company: "Reykjavik University",
    year: "Aug. 2021 - Des. 2021",
    description: "I got a scholarship for my first semester.",
  },
  {
    title: "Secondary school degree",
    company: "Commercial college of Iceland",
    year: "Aug. 2018 - May. 2021",
    description: "I graduated from the Commercial college of Iceland.",
  },
];

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-10 space-y-8">
      <h1 className="text-3xl text-white font-bold">My career</h1>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
