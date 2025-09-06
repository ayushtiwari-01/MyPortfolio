import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Import icons from react-icons
import {
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaAws,
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiExpress, SiSupabase, SiMongodb, SiTailwindcss, SiMui, SiTensorflow, SiKeras, SiPandas, SiNumpy, SiVercel,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbApi, TbBrandBootstrap, TbBrandVscode } from "react-icons/tb";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava className="h-10 w-10 text-red-500" /> },
        { name: "Python", icon: <FaPython className="h-10 w-10 text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <FaJs className="h-10 w-10 text-yellow-500" /> },
        { name: "C", icon: <SiC className="h-10 w-10 text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="h-10 w-10 text-blue-700" /> },
      ],
    },
    web: {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: <FaReact className="h-10 w-10 text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="h-10 w-10 text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="h-10 w-10" /> },
        { name: "REST APIs", icon: <TbApi className="h-10 w-10 text-green-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-10 w-10 text-green-600" /> },
        { name: "SQL", icon: <GrMysql className="h-10 w-10 text-blue-500" /> },
        { name: "Supabase", icon: <SiSupabase className="h-10 w-10 text-green-500" /> },
      ],
    },
    ui: {
      title: "UI / Styling",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="h-10 w-10 text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="h-10 w-10 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-10 w-10 text-cyan-500" /> },
        { name: "Material UI", icon: <SiMui className="h-10 w-10 text-blue-600" /> },
        { name: "Bootstrap", icon: <TbBrandBootstrap className="h-10 w-10 text-purple-600" /> },
      ],
    },
    ml: {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="h-10 w-10 text-orange-500" /> },
        { name: "Keras", icon: <SiKeras className="h-10 w-10 text-red-600" /> },
        { name: "Pandas", icon: <SiPandas className="h-10 w-10 text-indigo-500" /> },
        { name: "NumPy", icon: <SiNumpy className="h-10 w-10 text-blue-400" /> },
      ],
    },
    devops: {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="h-10 w-10 text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="h-10 w-10" /> },
        { name: "CI/CD", icon: <FaGithub className="h-10 w-10" /> },
        { name: "Postman", icon: <TbApi className="h-10 w-10 text-orange-500" /> },
      ],
    },
    cloud: {
      title: "Cloud & Deployment",
      skills: [
        { name: "AWS", icon: <FaAws className="h-10 w-10 text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="h-10 w-10" /> },
        { name: "Render", icon: <TbBrandVscode className="h-10 w-10 text-cyan-400" /> },
      ],
    },
    cs: {
      title: "Core CS",
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaReact className="h-10 w-10" /> },
        { name: "Object-Oriented Programming", icon: <FaJava className="h-10 w-10" /> },
        { name: "Computer Networks", icon: <TbApi className="h-10 w-10" /> },
        { name: "DBMS", icon: <GrMysql className="h-10 w-10" /> },
      ],
    },
  };

  const categories = Object.keys(skillCategories);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20 bg-skill-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-5 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-glow"
                  : "bg-card/50 backdrop-blur-sm text-muted-foreground hover:bg-card hover:text-foreground shadow-sm"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            <h3 className="col-span-full text-2xl font-semibold text-foreground mb-4 text-center">
              {skillCategories[activeCategory].title}
            </h3>
            {skillCategories[activeCategory].skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="group relative flex flex-col items-center justify-center p-6 h-full bg-card/50 backdrop-blur-sm transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary hover:shadow-glow hover:scale-105">
                  <div className="mb-4">{skill.icon}</div>
                  <span className="font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </span>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;