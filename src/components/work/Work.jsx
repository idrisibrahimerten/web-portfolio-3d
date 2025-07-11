import React, { useState } from "react";
import "./work.css";

const workData = [
{
  date: "2024 – Present",
  title: "Software Developer",
  company: "Voltura Solar",
  location: "Bodrum, Türkiye",
  description: [
    "Joined Voltura Solar, a rapidly growing tech company in Bodrum providing advanced solar energy products and software solutions, as a dual-role Project Manager and Software Developer. Took part in leading-edge projects that combine AI-driven energy monitoring, cloud-based dashboards, and mobile applications.",
    "Managed full-cycle software development of AI-powered solar panel monitoring platforms for web and mobile, leveraging Python (FastAPI), Node.js, React, and Next.js.",
    "Directed project planning and documentation using MS Project, defining milestones, sprint timelines, task dependencies, and Gantt charts for internal and client-facing projects.",
    "Led team workflows in JIRA, overseeing sprint planning, backlog grooming, progress tracking, and QA coordination across multidisciplinary teams.",
    "Developed and maintained scalable RESTful APIs to ingest data from smart solar panels and IoT sensors; applied MQTT protocol for low-latency telemetry.",
    "Coordinated frontend/backend integration for real-time dashboards, energy analytics tools, and admin portals with responsive design using Tailwind CSS.",
    "Supported technical pre-sales and demo processes, translating business requirements into technical briefs and prototypes for prospective clients.",
    "Managed Git-based CI/CD pipelines, performed code reviews, and enforced development standards using Docker, GitHub Actions, and Nginx.",
    "Facilitated cross-functional collaboration between software teams, R&D, and hardware engineers to ensure data accuracy, device compatibility, and scalability."
  ],
},

{
  date: "10.2023 – 12.2024",
  title: "Software Developer (Freelance)",
  company: "ACK Investment",
  location: "Remote",
  description: [
    "Spearheaded the end-to-end development of Whaleswap AI, an AI-powered crypto copy trading platform, upon invitation from a U.S.-based investment firm. Delivered a production-ready, secure and scalable system covering backend, frontend, DevOps, and AI integrations.",
    "Designed and developed the full platform architecture using Python (Flask, FastAPI) for backend API services, Node.js for supporting bot services, and Next.js + Tailwind CSS for a responsive user interface.",
    "Established and managed cloud infrastructure on AWS, including server provisioning, Nginx configuration, and domain routing for both the platform and Telegram bots.",
    "Integrated APIs from Binance, Bybit, and Hyperliquid to stream real-time market data, execute trade orders, and enable secure copy-trading operations.",
    "Developed WebSocket-based modules for real-time trade updates, user tracking, and performance analytics.",
    "Engineered OpenAI-based analysis modules, allowing users to follow specific traders and receive AI-generated insights with trade suggestions.",
    "Integrated Stripe API for subscription and secure payment flows, defining custom plans and automated billing cycles.",
    "Automated data pipelines using Celery, Redis, and background job scheduling to ensure high-performance analytics and signal generation.",
    "Designed and deployed Telegram bots with Node.js and Telegraf.js, providing real-time portfolio updates, trader analytics, and auto-trade triggers.",
    "Utilized Git, GitHub Actions, and Docker for version control, CI/CD pipelines, and containerized deployments.",
    "Documented the full 1-year development lifecycle using MS Project, including milestones, sprints, and progress reports for stakeholder visibility."
  ],
},

  {
  date: "01.2022 – 12.2024",
  title: "Software Developer Team Lead",
  company: "RDC+ Digital Agency",
  location: "Remote",
  description: [
    "Promoted to Software Development Team Lead within the same development team, initially leading 6 and later 20 developers across multiple web, AI, and automation projects.",
    "Led full-stack development using Django, Flask, Node.js, Next.js, React, and TypeScript for scalable, responsive web platforms.",
    "Developed and maintained RESTful APIs, database schemas, and back-end services with PostgreSQL, MongoDB, and Redis.",
    "Played a central role in the design and frontend implementation of a digital marketing tool, connecting previously built APIs via Node.js.",
    "Designed and deployed vehicle and license plate recognition systems for an electric car manufacturer using OpenCV, YOLO, and TensorFlow, integrating AI models with Flask APIs.",
    "Delivered a custom e-commerce website for one of Turkey's largest bridal brands, managing the entire project lifecycle including database architecture, server setup, and deployment.",
    "Developed a color recognition system for digital marketing optimization, improving campaign targeting via automated visual content classification.",
    "Managed and contributed to the automation system of a major manufacturing facility, building real-time dashboards and admin interfaces.",
    "Implemented CI/CD pipelines, Git version control, and containerization with Docker for continuous integration and deployment.",
    "Facilitated code reviews, conducted team mentoring, and led Agile/Scrum ceremonies to ensure technical excellence and delivery performance."
  ],
},

{
  date: "10.2021 – 12.2021",
  title: "Software Developer",
  company: "RDC+ Digital Agency",
  location: "Remote",
  description: [
    "Worked at a tech and digital marketing firm serving major brands like PlayStation and McDonald’s.",
    "Focused on web scraping and data extraction using Python, Selenium, and BeautifulSoup.",
    "Developed automated data collection tools and custom APIs to support marketing analytics platforms.",
    "Gained experience with workflow tools like Jira and MS Project, and improved version control practices through active GitHub usage.",
    "Delivered ready-to-integrate solutions for real-time marketing systems.",
    "Promoted to full-time Software Developer after completing the internship, leading AI-powered marketing solutions with TensorFlow and NLP to build emotion-detection models across five sensory categories.",
    "Converted ML models into production-ready Django APIs and deployed them on cloud servers for both internal and external use.",
    "Built a computer-vision system for real-time brand recognition from videos and images, implementing base64 encoding/decoding pipelines and inference APIs.",
    "Ensured scalability and continuous delivery by deploying services on AWS and Azure, configuring virtual machines, managing Docker containers, and maintaining cloud infrastructure."
  ],
},

{
  date: "05.2021 - 07.2021",
  title: "Software Developer Intern",
  company: "Billp (Tallinn, Estonia)",
  location: "Remote",
  description: [
    "Completed a 3-month international internship focused on Python and Node.js development for embedded systems.",
    "Developed firmware and built RESTful API services for electronic boards.",
    "Integrated multiple hardware components via MQTT protocol, enabling real-time communication through a centralized IoT platform.",
    "Gained hands-on experience in device communication, API design, and web-hardware integration."
  ],
},


];

const Work = () => {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="work-root">
      <h2 className="work-title">Work Experience</h2>
      <div className="work-underline" />

      <div
        className="timeline-horizontal-new"
        style={{
          margin: "120px 10% 30px 0",
          transformOrigin: "top right"
        }}
      >
        <div className="timeline-line-new" />

        {workData.map((item, idx) => {
          const isTop = idx % 2 === 0;
          const positionPerc = (idx + 1) / (workData.length + 1) * 100;
          const cardPos = {
            '--card-left': `calc(${positionPerc}%)`,
            left: `var(--card-left)`
          };
          const showItems = item.description.slice(0, 3);
          const hasMore = item.description.length > 3;

          return (
            <div
              key={idx}
              className={`timeline-card-new ${isTop ? "top" : "bottom"}`}
              style={cardPos}
            >
              <span className={`timeline-dot-new ${isTop ? "top" : "bottom"}`} />
              <div className="timeline-date-new">{item.date}</div>
              <div className="timeline-job-title-new">{item.title}</div>
              <div className="timeline-company-new">
                {item.company}{" "}
                <span className="timeline-location-new">{item.location}</span>
              </div>

              <ul className="timeline-desc-new">
                {showItems.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
                {hasMore && (
                  <li>
                    <span
                      className="read-more-button"
                      onClick={() => setOpenItem(idx)}
                    >
                      Read more
                    </span>
                  </li>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      {openItem !== null && (
        <div className="modal-overlay" onClick={() => setOpenItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpenItem(null)}>
              ×
            </button>
            <h3 className="timeline-job-title-new">
              {workData[openItem].title}
            </h3>
            <p className="timeline-company-new">
              {workData[openItem].company} — <span className="timeline-location-new">{workData[openItem].location}</span>
            </p>
            <ul className="timeline-desc-new">
              {workData[openItem].description.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;