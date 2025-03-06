import React from "react";
import { Link } from "react-scroll";
import { motion , AnimatePresence} from "framer-motion";
import { useState, useEffect } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import PropTypes from "prop-types";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import screenshot1 from "./images/EVMSimg/Screenshot (103).png"
import screenshot2 from "./images/EVMSimg/Screenshot (104).png"
import screenshot3 from './images/EVMSimg/Screenshot (105).png'
import screenshot4 from './images/EVMSimg/Screenshot (106).png'
import Screenshot1 from './images/cartimg/Screenshot (107).png'
import Screenshot2 from './images/cartimg/Screenshot (109).png'
import Screenshot3 from './images/cartimg/Screenshot (108).png'
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaCloud,
  FaUserTie,
  FaCode,
  FaGit,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiTailwindcss } from "react-icons/si";
import resume from "./resume/Muthu Kumar resume.pdf"


const Home = () => {
  // Add floating particles animation
  const [result, setResult] = React.useState("");
    const [showPopup, setShowPopup] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "particle absolute bg-white/20 rounded-full animate-float";
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.2; // Random opacity
      document.querySelector(".particles").appendChild(particle);
    };

    for (let i = 0; i < 50; i++) {
      createParticle();
    }
  }, []);

  const box = {
    width: 190,
    height: 190,
    border: "2px solid #1e40af", // Darker blue border
    backgroundColor: "#1e3a8a", // Dark blue background
    borderRadius: 20,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const skills = [
    { name: "JavaScript", icon: <FaJs size={50} /> },
    { name: "MongoDB", icon: <FaDatabase size={45} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} /> },
    { name: "React.js", icon: <FaReact size={50} /> },
    { name: "Git", icon: <FaGit size={50} /> },
    { name: "HTML", icon: <FaHtml5 size={50} /> },
    { name: "CSS", icon: <FaCss3 size={50} /> },
    { name: "GitHub", icon: <FaGithub size={50} /> },
    { name: "Node.js", icon: <FaNodeJs size={50} /> },
    { name: "Redux", icon: <SiRedux size={50} /> },
    { name: "Express.js", icon: <SiExpress size={50} /> },
  ];
  const resumeUrl = resume;

  const text = "Adaptable and detail-oriented IT graduate with hands-on experience in Full Stack Development through academic projects, internships, and self-driven learning. Proficient in modern web development tools like JavaScript, React, Node.js, and express js with a strong grasp of RESTful APIs, databases (MongoDB), and version control (Git). Passionate about building clean, responsive, and scalable applications. Collaborative team player with problem-solving skills, a commitment to writing well-documented code, and a growth mindset for mastering cloud technologies (AWS) and microservices. Eager to contribute to innovative projects while embracing continuous learning and best practices in Agile environments.";
  const letters = text.split("");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Animat = ({
    desc = "Project description",
    techStacks = ["React", "Tailwind"],
    images = ["/images/vlcsnap-2021-01-08-14h10m32s915.jpg"],
    data = [{ title: "Features", features: ["Feature 1", "Feature 2"] }],
    codeUrl = "https://github.com/muthu-kumar-developer/Add-cart-project-in-Router",
    demoUrl = "https://add-cart-project-in-router.vercel.app/",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hide, setHide] = useState(false);

    const nextImage = (e) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => setHide(true), 500);
        return () => clearTimeout(timer);
      }
      setHide(false);
    }, [isOpen]);

   
    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute left-14 h-60 cursor-pointer w-[540px] top-[720px] ${
            isOpen
              ? "fixed z-50 h-[90vh] top-4 left-4 right-4 md:top-20 md:left-[20vw] md:right-[20vw] lg:left-[25vw] lg:right-[25vw]"
              : "w-[100vw] md:w-[45vw] lg:w-[30vw]"
          }`}
          layout
        >
          <div
            className={
              !isOpen
                ? "relative overflow-hidden"
                : "relative h-[23vh] lg:h-[51vh] overflow-hidden"
            }
          >
          <motion.img
  key={currentImageIndex}
  src={images[currentImageIndex]}
  alt={`Project screenshot ${currentImageIndex + 1}`}
  className={`w-full object-cover h-[242px] rounded-lg ${
    isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
  }`}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * currentImageIndex }} 
/>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 right-2 flex space-x-2 z-20"
              >
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </motion.div>
            )}

            <motion.div
              className={`absolute inset-0 flex justify-between ${
                isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
              }`}
            >
              {hide && (
                <>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={prevImage}
                    className="bg-gradient-to-r from-black/40 hover:from-black/70 w-14 h-full flex-center"
                  >
                    <AiOutlineLeft size={25} className="text-white" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={nextImage}
                    className="bg-gradient-to-l from-black/40 hover:from-black/70 w-14 h-full flex-center"
                  >
                    <AiOutlineRight size={25} className="text-white" />
                  </motion.button>
                </>
              )}
            </motion.div>

            <motion.span
              className={
                !isOpen
                  ? "absolute bottom-0 left-0 text-white bg-black w-full backdrop-blur-lg"
                  : "absolute -bottom-8 left-4 z-30"
              }
            >
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="font-bold text-sm md:text-2xl uppercase"
              >
               
              </motion.h1>
            </motion.span>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-slate-800 mt-8 rounded-lg overflow-hidden"
            >
              <div className="bg-black p-4 text-white">
               
                <h2 className="text-xl font-semibold mb-2">Project Description</h2>
                <p className="mb-6">{desc}</p>

                {data.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <ul className="list-disc pl-6">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {techStacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </>
    );
  };

  const Animat2 = ({
    desc = "Project description",
    techStacks = ["React", "Tailwind"],
    images = ["/images/vlcsnap-2021-01-08-14h10m32s915.jpg"],
    data = [{ title: "Features", features: ["Feature 1", "Feature 2"] }],
    codeUrl = "https://github.com/muthu-kumar-developer/Event-management-system-project--frontend",
    demoUrl = "https://event-management-system-project-frontend.vercel.app/",
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hide, setHide] = useState(false);

    const nextImage = (e) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
      e?.stopPropagation();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => setHide(true), 500);
        return () => clearTimeout(timer);
      }
      setHide(false);
    }, [isOpen]);

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 "
            onClick={() => setIsOpen(false)}
          />
        )}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute left-14 w-[570px] cursor-pointer h-[240px] top-[225px] box2 ${
            isOpen
              ? "fixed z-50 h-[90vh] top-4 left-4 right-4 md:top-20 md:left-[20vw] md:right-[20vw] lg:left-[25vw] lg:right-[25vw]"
              : "w-[100vw] md:w-[45vw] lg:w-[30vw]"
          }`}
          layout
        >
          <div
            className={
              !isOpen
                ? "relative overflow-hidden"
                : "relative h-[23vh] lg:h-[51vh] overflow-hidden"
            }
          >
        <motion.img
  key={currentImageIndex}
  src={images[currentImageIndex]}
  alt={`Project screenshot ${currentImageIndex + 1}`}
  className={`w-full object-cover h-[242px] rounded-lg ${
    isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
  }`}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
    delay: 0.2 * currentImageIndex, // Optional delay
  }}
/>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-2 right-2 flex space-x-2 z-20"
              >
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </motion.div>
            )}

            <motion.div
              className={`absolute inset-0 flex justify-between ${
                isOpen ? "h-[23vh] lg:h-[51vh]" : "h-[30vh]"
              }`}
            >
              {hide && (
                <>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={prevImage}
                    className="bg-gradient-to-r from-black/40 hover:from-black/70 w-14 h-full flex-center"
                  >
                    <AiOutlineLeft size={25} className="text-white" />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={nextImage}
                    className="bg-gradient-to-l from-black/40 hover:from-black/70 w-14 h-full flex-center"
                  >
                    <AiOutlineRight size={25} className="text-white" />
                  </motion.button>
                </>
              )}
            </motion.div>

            <motion.span
              className={
                !isOpen
                  ? "absolute bottom-0 left-0 text-white bg-black w-full backdrop-blur-lg"
                  : "absolute -bottom-8 left-4 z-30"
              }
            >
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="font-bold text-sm md:text-2xl uppercase"
              >
               
              </motion.h1>
            </motion.span>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-slate-800 mt-8 rounded-lg overflow-hidden"
            >
              <div className="bg-black p-4 text-white">
               
                <h2 className="text-xl font-semibold mb-2">Project Description</h2>
                <p className="mb-6">{desc}</p>

                {data.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                    <ul className="list-disc pl-6">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {techStacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </>
    );
  };

  
  Animat.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    techStacks: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    codeUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  };
  Animat2.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    techStacks: PropTypes.arrayOf(PropTypes.string),
    images: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    codeUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "d9d383bf-0c46-4b35-8382-ea0b99c97e80");

    // Add your email address to receive submissions
    formData.append("email", "muthukumar.tech20@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setIsSubmitting(false);
    if (data.success) {
      setResult("Thank you! I'll get back to you soon.");
      setShowPopup(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setShowPopup(true);
    }
  };




  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-blue-900 to-indigo-900 text-white font-poppins animate-gradient">
      {/* Floating Particles */}
      <div className="particles absolute inset-0 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md flex items-center px-8 z-10">
        <h1 className="text-2xl font-bold">Muthukumar | Full Stack Developer</h1>
      </nav>

      {/* Main Content */}
      <div className="relative">
        {/* Home Section */}
        <section
  id="home"
  className="min-h-screen flex flex-col justify-center animate-fade-in pl-36"
>
  {/* Name and Introduction */}
  <div className="flex">
    <h2 className="font-bold text-7xl mb-3">Hi, I'm </h2>
    <h2 className="text-purple-700 text-7xl font-bold pl-5">Muthukumar</h2>
  </div>
  <p className="text-3xl max-w-2xl mb-12">
    I'm a full-stack developer passionate about building amazing web experiences.
  </p>

  {/* Social Icons */}
  <div className="flex space-x-6 mb-12">
    {/* GitHub Icon */}
    <a
      href="https://github.com/muthu-kumar-developer"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center p-4 bg-gray-800 text-white rounded-full transition duration-300 hover:bg-gray-900 hover:scale-110 hover:rotate-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8" // Increased icon size
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.547 1.377.203 2.394.1 2.647.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.688-4.565 4.93.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
    </a>

    {/* LinkedIn Icon */}
    <a
      href="https://linkedin.com/in/muthu-kumar-developer"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center p-4 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-700 hover:scale-110 hover:-rotate-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8" // Increased icon size
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
        />
      </svg>
    </a>
  </div>

  {/* Resume Button */}
  <div className="flex">
    <a
      href={resumeUrl}
      download="Muthukumar_Resume.pdf"
      className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-sm  text-white font-semibold rounded-lg transition duration-300 hover:from-blue-700 hover:to-purple-700 group overflow-hidden"
    >
      {/* Glowing Effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300" />

      {/* Text */}
      <span className="mr-3 relative z-10 text-lg">Resume</span>

      {/* Custom Animated Download Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 relative z-10 transform transition duration-300 group-hover:rotate-180 group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Download Arrow */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
        {/* Circle with Pulse Animation */}
        <path
          className="animate-pulse"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        />
      </svg>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-50 transition duration-300 animate-shimmer" />
    </a>
  </div>
</section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col px-4 animate-fade-in pl-28"
        >
          <div className="mt-10 grid gap-5">
            <p className="text-2xl text-gray-400">INTRODUCTION :-</p>
            <p className="text-6xl font-bold">Overview :-</p>
            <p className="mt-5 text-xl text-gray-300">
             <motion.div
                  className="text-lgleading-relaxed max-w-6xl mx-auto whitespace-normal" 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={childVariants}
                      className="inline-block" 
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                  {/* Blinking Cursor */}
                  <motion.span
                    className="inline-block h-6 w-1 ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                </motion.div>
            </p>
          </div>

          <div className="flex flex-wrap gap-20 justify-center mt-28">
            {/* Full Stack Developer Icon */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              style={box}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <FaCode className="text-white text-7xl" />
                <p className="mt-4 text-lg font-semibold text-white">Full Stack Developer</p>
              </div>
            </motion.div>

            {/* Freelancer Icon */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              style={box}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <FaUserTie className="text-white text-7xl" />
                <p className="mt-4 text-lg font-semibold text-white">Freelancer</p>
              </div>
            </motion.div>

            {/* Database Management Icon */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              style={box}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <FaDatabase className="text-white text-7xl" />
                <p className="mt-4 text-lg font-semibold text-white">Database Management</p>
              </div>
            </motion.div>

            {/* API Development Icon */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.9 }}
              style={box}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <FaCloud className="text-white text-7xl" />
                <p className="mt-4 text-lg font-semibold text-white">API Development</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative flex flex-col p-4 pt-44" id="skills">
          <div className="font-bold text-4xl uppercase flex gap-3 flex-col justify-center items-center">
            <h1>Skills</h1>
            <div className="w-20 h-1 bg-blue-500 rounded-full"></div>

            <motion.div className="relative flex flex-col justify-center items-center overflow-hidden h-20">
              <div className="border w-24 rotate-90 opacity-30"></div>
              <motion.div
                className="border w-4 rotate-90 absolute -bottom-3"
                initial={{ y: -120, rotate: 90 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-3 text-base place-items-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4 cursor-pointer bg-white/10 backdrop-blur-sm rounded-lg border w-36 h-32 group relative transition duration-300 hover:brightness-125"
              >
                <div className="text-blue-400">{skill.icon}</div>
                <h2 className="mt-2 text-lg font-semibold text-white">{skill.name}</h2>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex flex-col px-4 animate-fade-in pt-44"
        >
          <h2 className=" max-w-2xl text-xl text-gray-300 font-bold ">what i have  done far</h2>
          <p className="text-6xl font-bold">
            Projects :-
          </p>
          <p className="text-xl text-gray-300 pt-10 w-[850px]">
            Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described, reflecting my ability to solve complex problems, work with different technologies, and manage projects effectively :-
          </p>
          <div className="flex p-4 justify-center relative">
            <div className="flex flex-col">
              {/* Vertical Line */}
              <div className="flex justify-center w-[237px] h-11">
                <div className=" bg-white rounded-full w-8 h-8 absolute top-56"></div>

                {/* <div className="border border-white absolute left-14 h-60 w-[440px] top-56"></div> */}
               <Animat
                desc="Modern e-commerce website with cart functionality and user dashboards"
                techStacks={["React", "Tailwindcss"]}
                images={[
                  Screenshot1,Screenshot2,Screenshot3
                ]}
                data={[ 
                  {
                    title: "Features",
                    features: [
                      "Product catalog with filters",
                      "Shopping cart system",
                      "User authentication",  
                      "Order tracking"
                    ]
                  }
                ]}
                codeUrl = "https://github.com/muthu-kumar-developer/Add-cart-project-in-Router"
                demoUrl = "https://add-cart-project-in-router.vercel.app/"
              /> 
               <Animat2
                desc="Built a scalable event management and ticketing system with secure ticketing, user dashboards, and admin tools."
                techStacks={["React", "Node.js", "MongoDB","Tailwindcss","Express.js"]}
                images={[
                  screenshot1,
screenshot2, screenshot3, screenshot4
                ]}
                data={[ 
                  {
                    title: "Features",
                    features: [
                      "Advanced product catalog with filters for seamless browsing and discovery",
  "Efficient shopping cart system for easy item management and checkout",
  "Secure user authentication for account protection and personalized experiences",
  "Real-time order tracking with status updates and delivery notifications"
                    ]
                  }
                ]}
                codeUrl = "https://github.com/muthu-kumar-developer/Event-management-system-project--frontend"
                demoUrl = "https://event-management-system-project-frontend.vercel.app/"
              />
                   <motion.div
  className="absolute top-48 right-0 pl-20 w-[700px]"
  initial={{ opacity: 0, x: 100 }} // Start from the right (x: 100)
  whileInView={{ opacity: 1, x: 0 }} // Animate when in view
  transition={{ type: "spring", stiffness: 100, damping: 10 }} // Spring animation
  viewport={{ once: true }} // Only animate once
>
  {/* Heading */}
  <motion.p
    className="text-3xl pb-8 font-bold"
    initial={{ opacity: 0, x: 50 }} // Slide in from the right
    whileInView={{ opacity: 1, x: 0 }} // Animate when in view
    transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 10 }} // Spring animation
    viewport={{ once: true }} // Only animate once
  >
    Event Management and Ticketing System Development
  </motion.p>

  {/* List */}
  <motion.ul
    className="list-disc list-inside space-y-2 pl-5 grid gap-4"
    initial={{ opacity: 0, x: 50 }} // Slide in from the right
    whileInView={{ opacity: 1, x: 0 }} // Animate when in view
    transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 10 }} // Spring animation
    viewport={{ once: true }} // Only animate once
  >
    {[
      "Designed and implemented an event management platform supporting 100+ events.",
      "Built a secure ticketing system with 2 ticket types, increasing sales by 25%.",
      "Developed user registration and dashboards for 500+ users with 99.9% uptime.",
      "Created personalized dashboards, improving user engagement by 40%.",
      "Designed an admin dashboard, reducing manual workload by 50%.",
    ].map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate when in view
        transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 100, damping: 10 }} // Spring animation
        viewport={{ once: true }} // Only animate once
      >
        {item}
      </motion.li>
    ))}
  </motion.ul>
</motion.div>
              </div>
              <div className="flex justify-center w-[237px] h-11">
                <div className=" bg-white rounded-full w-8 h-8 absolute top-[700px]"></div>

             

               <motion.div
      className="absolute top-[700px] right-0 pl-20 w-[700px]"
      initial={{ opacity: 0, x: 100 }} // Start from the right (x: 100)
      whileInView={{ opacity: 1, x: 0 }} // Animate when in view
      transition={{ duration: 0.5 }}   // Animation duration
      viewport={{ once: true }}      
    >
      {/* Heading */}
      <motion.p
        className="text-3xl pb-8 font-bold"
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ delay: 0.2, duration: 0.5 }} 
        viewport={{ once: true }} 
      >
        E-Commerce Cart Optimization and User Experience
      </motion.p>

      {/* List */}
      <motion.ul
        className="list-disc list-inside space-y-2 pl-4 grid gap-4"
        initial={{ opacity: 0, x: 50 }} // Slide in from the right
        whileInView={{ opacity: 1, x: 0 }} // Animate when in view
        transition={{ delay: 0.4, duration: 0.5 }} // Slight delay for staggered effect
        viewport={{ once: true }} // Only animate once
      >
        {[
          "Added single-click 'Add to Cart,' cutting time by 30%, boosting additions by 20%.",
          "Enabled real-time cart updates, raising engagement by 15%, reducing abandonment by 10%.",
          "Built reusable components, slashing errors by 30%, improving satisfaction by 25%.",
          "Improved design with hover effects and interactivity, increasing sessions by 10%, clicks by 15%.",
          "Optimized for mobile, ensuring seamless shopping and higher retention.",
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 50 }} // Slide in from the right
            whileInView={{ opacity: 1, x: 0 }} // Animate when in view
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }} // Staggered delay
            viewport={{ once: true }} // Only animate once
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
              </div>
              <div className="flex justify-center">


                <div className="border-r-2 border-gray-300 h-[960px]"></div>
              </div>
          
            </div>
          </div>
        </section> 

      {/* Contact Section */}
     <div className="font-bold text-4xl uppercase flex gap-3 flex-col justify-center mt-36 items-center">
            <h1>Contact</h1>
            <div className="w-32 h-1 bg-blue-500 rounded-full"></div>

            <motion.div className="relative flex flex-col justify-center items-center overflow-hidden h-20">
              <div className="border w-24 rotate-90 opacity-30"></div>
              <motion.div
                className="border w-4 rotate-90 absolute -bottom-3"
                initial={{ y: -120, rotate: 90 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </div>
      <section
        id="contact"
        className="min-h-screen flex justify-between items-center mb-12 text-center px-4 "
      >
        
        <div>
        <h2 className="text-6xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl max-w-2xl mb-8">
        I’d love to connect with you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out. I’m always open to new opportunities and conversations.
        </p>
        </div>
       
    
       <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto p-4 bg-white h-[460px] rounded-lg border-black"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 pt-5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-black"
                  placeholder="Your Name"
                />
              </div>
      
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your Email"
                />
              </div>
      
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
      
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
      
            {/* Pop-up Notification */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-4 right-4 bg-white text-black rounded-lg shadow-lg p-4 flex items-center gap-2 z-50"
                >
                  <MdOutlineMarkEmailRead className="text-green-500 text-xl" />
                  <span className="text-sm">{result}</span>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-gray-500 text-xl pb-1 hover:text-red-500"
                  >
                    &times;
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
      
       



      </section>
    </div>

    {/* Bottom Navigation */}
    <div className="fixed bottom-4 left-1/2 cursor-pointer transform -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-lg flex gap-4 p-2 z-50">
      <Link
        to="home"
        smooth={true}
        offset={-100}
        duration={500}
        className="px-4 py-2 text-white font-bold hover:bg-blue-700/80 cursor-pointer rounded-lg transition-all"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        offset={-100}
        duration={500}
        className="px-4 py-2 text-white font-bold hover:bg-blue-700/80 cursor-pointer rounded-lg transition-all"
      >
        About
      </Link>
      <Link
        to="projects"
        smooth={true}
        offset={-100}
        duration={500}
        className="px-4 py-2 text-white font-bold hover:bg-blue-700/80 rounded-lg transition-all"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        offset={-100}
        duration={500}
        className="px-4 py-2 text-white font-bold hover:bg-blue-700/80 rounded-lg transition-all"
      >
        Contact
      </Link>
     
    </div>
  </div>
);
}
export default Home;
// Add prop type validation
Home.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  techStacks: PropTypes.arrayOf(PropTypes.string),
  images: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  codeUrl: PropTypes.string,
  demoUrl: PropTypes.string
};

