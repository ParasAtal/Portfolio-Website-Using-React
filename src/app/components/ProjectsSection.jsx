"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digi X EduHub Ecommerce Website using MERN Stack",
    description: "Some key features of this project are:- User can create account as STUDENT or INSTRUCTIOR, INSTRUCTOR can create courses and see his/her overall analytics., STUDENT Can buy courses, watch the content in them., STUDENT can review the courses., Payment integration is there through RAZORPAY.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 2,
    title: "Obstacle Detecting and Avoding Car Project",
    description: "I was also worked on obstacle detecing and Avoding car project in this project I was used ultrasonic sensor. The car automatic change our direction when some obstacle comming front of the car.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/mrnavi16/obstacledetectingandavoidingcar",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 3,
    title: "Virtual Painter using Machine Learning",
    description: "In this project I was used python library like pandas, numpy, opencv. Its project fucntionality is its virtual draw on the screen not need any marker and any touchpad device by moving our finger front on the web cam its draw on the display screen.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/mrnavi16/Computer-Vision-Virtual-Painter",
    previewUrl: "https://github.com/mrnavi16/Computer-Vision-Virtual-Painter",
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "This is my portfolio website by through this website you can connect with me and you also watch my Tech journey. In this project we are using HTML, CSS, JAVASCRIPT, REACT.JS, NODE.JS.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 5,
    title: "Razorpay Website Clone",
    description: "Secure Payment Processing, User-Friendly interface, Responsive Design, Seamless integration, Animations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
  {
    id: 6,
    title: "Weather-App",
    description: "A Weather forcasting Website that takes Location from the users and tells the weather of that location. It is also able to find the weather forcast of any location thats given by the user",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mrnavi16",
    previewUrl: "https://github.com/mrnavi16",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
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
