import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech"; // Assuming you will update the content within the Speech component
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hello There,
          <br />
          <span>I'm İdris İbrahim <br /> ERTEN!</span> {/* Name updated */}
        </motion.h1>
        {/* AWARDS / ACHIEVEMENTS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>
            Award-Winning Full Stack Developer
          </motion.h2> {/* Title updated based on CV */}
          <motion.p variants={awardVariants}>
            Delivering award-winning web & mobile solutions for 4+ years.
            Versatile Full-Stack Developer with a track record in Digital
            transformation.
          </motion.p> {/* Description updated based on CV */}


        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* FOLLOW / CONNECT */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="https://github.com/idrisibrahimerten" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" /> {/* GitHub icon */}
          </motion.a>
          {/* Replace with your actual LinkedIn profile URL */}
          <motion.a variants={followVariants} href="https://linkedin.com/in/idrisibrahimerten" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" /> {/* LinkedIn icon */}
          </motion.a>
          {/* Add other professional platform icons if needed, e.g., Medium, Stack Overflow */}
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">CONNECT WITH ME</div> {/* Text updated */}
          </motion.div>
        </motion.div>
        {/* BUBBLE - Ensure the Speech component content is updated by you */}
        {/* Example Speech content: "Developing scalable and effective software solutions that add value for clients." */}
        <Speech />
        {/* CERTIFICATE / ACHIEVEMENTS */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="Certificate Icon" /> {/* Generic certificate icon or icon for your most prominent certificate */}
          TDG "Coder in Action" 1st Place
          <br />
          AWS Certified
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              {/* This fill color will be overridden by the CSS in hero.css */}
              <circle cx="100" cy="100" r="90" fill="var(--contact-button-color, #4DD0E1)" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">HIRE NOW •</textPath> {/* Text updated */}
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  LET'S DISCUSS YOUR PROJECT •
                </textPath> {/* Text updated */}
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black" // Arrow color can be black or a dark color from your palette
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/hero.png" alt="İdris İbrahim Erten" /> {/* Meaningful alt text */}
        </div>
      </div>
    </div>
  );
};

export default Hero;