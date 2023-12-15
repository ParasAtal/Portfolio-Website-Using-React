"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <li>Computer Vision</li>
        <li>LangChainJS</li>
        <li>Flutter</li>
        <li>HTML, CSS, JavaScript</li>
        <li>React</li>
        <li>DSA</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p>2019</p>10th(ICSE Board)-Carmel School, Jorhat, Assam(91.6%)
        </li>
        <li>
          <p>2021</p>12th(CBSE Board)-Bhagat Public School, Kota, Rajasthan(81.6%)
        </li>
        <li>
          <p>2021-2025</p>BTech in CSE from SRM University, Chennai(CGPA-9.78)
        </li>
      </ul>
    ),
  },
  {
    title: "Internships",
    id: "internships",
    content: (
      <ul className="list-disc pl-2">
        <li>
          In-House Project under Professor at SRM
        </li>
        <li>
          Research Intern- SAMSUNG PRISM
        </li>
        <li>
          Upcoming SDE Intern- BNY MELLON (2024 Summer Internship)
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NVIDIA Jetson AI Specialist</li>
        <li>NPTEL-Machine Learning</li>
        <li>NPTEL-Soft Skills Development</li>
        <li>JNCAA Getting Started with Cloud</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>Department Topper -4th Sem(10.00 GPA)</li>
        <li>Performance Based Scholarship Awardee</li>
        <li>Best Delegation at Christ MUN23</li>
        <li>1502 Contest Rating on Leetcode</li>
        <li>AIR 73-Coding Ninjas Founders Invitation Online Challenge</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="About Me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a budding Software Engineer passionate about crafting interactive applications.
            Proficient in HTML, CSS, JavaScript, React, and Python, with experience in C++, LangChainJS, Machine Learning, Computer Vision, and DSA.
            Love handling problem solving questions and have solved over 500+ DSA problems on various Platforms including Leetcode,GFG,Hackkerank.
            Skilled in Git and GitHub for collaborative development.
            Quick learner, team player, and excited to contribute to innovative projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("internships")}
              active={tab === "internships"}
            >
              {" "}
              Internships{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("achievements")}
              active={tab === "achievements"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
