"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Object Detection using YOLO on NVIDIA Jetson Nano",
    description: "Key Features of the Project are - rained YOLO to detect multiple objects.Deployed trained YOLO model on Jetson to detect object using camera module and got NVIDIA AI Specialist certification for the projec",
    image: "/images/projects/project1.png",
    tag: ["Personal Projects"],
    gitUrl: "https://github.com/ParasAtal/Jetson-Nano-YOLO-Object-Detection",
    previewUrl: "https://github.com/ParasAtal/Jetson-Nano-YOLO-Object-Detection",
  },
  {
    id: 2,
    title: "Image Compressor using PCA",
    description: " Used Principle Component Analysis algorithm to develop an ML model to compress the size of an Image. Model has a high accuracy and the image does not get distorted",
    image: "/images/projects/imageCompressor.png",
    tag: ["Personal Projects"],
    gitUrl: "https://github.com/ParasAtal/MACHINE-LEARNING-ALGORITHMS",
    previewUrl: "https://github.com/ParasAtal/MACHINE-LEARNING-ALGORITHMS",
  },
  {
    id: 3,
    title: "Drone Image Processing",
    description: "Trained YOLO V5 and V7 models to identify plastic waste with an accuracy of over 90 percent.The Project is under a Professor and deployment and testing of the drone is conducted.The team consists of a mix of 2nd  3rd and 4th year students ",
    image: "/images/projects/droneImage.jpeg",
    tag: ["Personal Projects"],
    gitUrl: "https://github.com/ParasAtal",
    previewUrl: "https://github.com/ParasAtal",
  },
  {
    id: 4,
    title: "Random OTP Generator",
    description: "An Application that generates random 4/5/6 digit OTPs based on the users requirement.",
    image: "/images/projects/otpGenerator.png",
    tag: ["Personal Projects"],
    gitUrl: "https://github.com/ParasAtal",
    previewUrl: "https://github.com/ParasAtal",
  },
  {
    id: 5,
    title: "Portfolio Website using React",
    description: " Build this Personal Portfolio Website using HTML,CSS and React",
    image: "/images/projects/portfolioWebsite.png",
    tag: ["Personal Projects"],
    gitUrl: "https://github.com/ParasAtal",
    previewUrl: "https://github.com/ParasAtal",
  },
  {
    id: 6,
    title: "Performance based Scholarship based on 2nd Year's GPA",
    description: "A LinkedIn post to share my Performance Based Scolarship Award for my 2nd years CGPA.(3rd sem-9.83 GPA,4th sem-10.00 GPA)",
    image: "/images/projects/Scholarship.png",
    tag: ["LinkedIn"],
    gitUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_growth-placements-college-activity-7127863299546742784-kkHd?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_growth-placements-college-activity-7127863299546742784-kkHd?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 7,
    title: "Leetcoding Tips and Tricks",
    description: "A LinkedIn post highlighting my methods and tricks i use to effectively use Leetcode.",
    image: "/images/projects/Leetcode.png",
    tag: ["LinkedIn"],
    gitUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_codingtips-leetcodeapproach-chatgpt-activity-7114853433718816769-a5P2?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_codingtips-leetcodeapproach-chatgpt-activity-7114853433718816769-a5P2?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 8,
    title: "Data Structures and Algorithms Resources",
    description: "A linkedIn post to share the best free resources to learn data Structures and Algorithm concept",
    image: "/images/projects/DSA.png",
    tag: ["LinkedIn"],
    gitUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_dsa-roadmap-youtube-activity-7119200001716588544-ZcHk?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_dsa-roadmap-youtube-activity-7119200001716588544-ZcHk?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 9,
    title: "Team CROPCRAFTERS shines at SIH'23 Internal Hackathon",
    description: "A LinkedIn post to share the Smat India Hackathon 2023 internal hackathon run at SRM University.",
    image: "/images/projects/SmartIndia.png",
    tag: ["LinkedIn"],
    gitUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_sih2023-smartindiahackathon-teamachievement-activity-7127485721682063360-qUgC?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_sih2023-smartindiahackathon-teamachievement-activity-7127485721682063360-qUgC?utm_source=share&utm_medium=member_desktop",
  },

  {
    id: 10,
    title: "How Does an AI ChatBot Work?",
    description: "A LinkedIn post to highlight the step by step working of AI Chatbots.",
    image: "/images/projects/AIchatbot.png",
    tag: ["LinkedIn"],
    gitUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_ai-llm-openai-activity-7139116454217523200-ZaAd?utm_source=share&utm_medium=member_desktop",
    previewUrl: "https://www.linkedin.com/posts/paras-atal-4a7121238_ai-llm-openai-activity-7139116454217523200-ZaAd?utm_source=share&utm_medium=member_desktop",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Personal Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Personal Projects"
          isSelected={tag === "Personal Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="LinkedIn"
          isSelected={tag === "LinkedIn"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;