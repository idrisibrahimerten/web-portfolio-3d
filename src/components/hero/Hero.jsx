import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense, useState, useEffect } from "react";

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

// Animasyonlu kod bloğu komponenti
const CodeAnimation = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines = [
    "const developer = {",
    "  name: 'İdris İbrahim ERTEN',",
    "  role: 'Software Developer',",
    "  skills: ['Python', 'Node.js', 'React', 'API'],",
    "};",
    "",
    "function createAmazingProjects() {",
    "  return developer.skills.map(skill => {",
    "    return `${skill} + creativity = success`;",
    "  });",
    "}",
    "",
    "// Ready to build something great?",
    "createAmazingProjects();",
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setDisplayedCode(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 30);
        
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setDisplayedCode(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200);
        
        return () => clearTimeout(timer);
      }
    } else {
      // Kod tamamlandıktan sonra tekrar başla
      const timer = setTimeout(() => {
        setDisplayedCode("");
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, codeLines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.8, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="code-animation"
      style={{
        position: 'absolute',
        top: '20%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '600px',
        background: 'rgba(0, 0, 0, 0.9)',
        borderRadius: '15px',
        padding: '30px',
        fontFamily: 'monospace',
        fontSize: '14px',
        color: '#00ff41',
        overflow: 'hidden',
        zIndex: 0,
        border: '2px solid rgba(0, 255, 65, 0.5)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 30px rgba(0, 255, 65, 0.2)',
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '10px',
        borderBottom: '1px solid rgba(0, 255, 65, 0.3)',
        paddingBottom: '10px'
      }}>
        <div style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: '#ff5f57',
          marginRight: '8px' 
        }}></div>
        <div style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: '#ffbd2e',
          marginRight: '8px' 
        }}></div>
        <div style={{ 
          width: '12px', 
          height: '12px', 
          borderRadius: '50%', 
          backgroundColor: '#28ca42',
          marginRight: '15px' 
        }}></div>
        <span style={{ color: '#666', fontSize: '10px' }}>developer.js</span>
      </div>
      <pre style={{ 
        margin: 0, 
        whiteSpace: 'pre-wrap',
        lineHeight: '1.4'
      }}>
        {displayedCode}
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ 
            color: '#00ff41',
            backgroundColor: '#00ff41',
            width: '2px',
            display: 'inline-block'
          }}
        >
          |
        </motion.span>
      </pre>
    </motion.div>
  );
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
          <span>I'm İdris İbrahim <br /> ERTEN!</span>
        </motion.h1>
        {/* AWARDS / ACHIEVEMENTS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>
            Award-Winning Software Developer
          </motion.h2>
          <motion.p variants={awardVariants}>
            Versatile Software Developer with a track record in Digital
            transformation.
          </motion.p>
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
            <img src="/github.png" alt="GitHub" />
          </motion.a>
          <motion.a variants={followVariants} href="https://linkedin.com/in/idrisibrahimerten" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">CONNECT WITH ME</div>
          </motion.div>
        </motion.div>
        <Speech />
        {/* CERTIFICATE / ACHIEVEMENTS */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        >
          <img src="/certificate.png" alt="Certificate Icon" />
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
              <circle cx="100" cy="100" r="90" fill="var(--contact-button-color, #4DD0E1)" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">HIRE NOW •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  LET'S DISCUSS YOUR PROJECT •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
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
        {/* Animasyonlu kod bloğu - Shape yerine */}
        <CodeAnimation />
        <div className="hImg">
          <img src="/hero.png" alt="İdris İbrahim Erten" style={{ position: 'relative', zIndex: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;