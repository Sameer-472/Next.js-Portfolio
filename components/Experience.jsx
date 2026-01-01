"use client";

import Image from "next/image";
import React from "react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Mid level Frontend Developer",
      company: "ME Digital Group.",
      link: "https://www.linkedin.com/company/medigitalgroup/",
      logo: "/assets/me-digital.jpg",
      duration: "2025 - Present",
      points: [
        "Refactor existing GSP (Groovy Server Pages) templates to align with Tailwind utility classes for maintainable and scalable UI components",
        "Implemented internationalization (i18n) features across the application to support multiple regions, including Riyadh (Saudi Arabia) and Dubai (UAE)",
        "Created new Groovy controllers to define and manage application routes, ensuring smooth integration of RESTful APIs within the Grails framework.",
      ],
      skills: ["React", "Redux", "JavaScript", "Antd", "Tailwind", "Grails"],
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Transviti Pvt. Ltd.",
      link: "https://www.linkedin.com/company/transviti/",
      logo: "/assets/transviti_logo.jpg",
      duration: "2023 - 2025",
      points: [
        "Developed & managed a variety of projects including enterprise solutions.",
        "Built a dynamic dashboard based on the latest plots and charts using g2plots.",
        "Guided interns in frontend development best practices.",
      ],
      skills: ["React", "Redux", "JavaScript", "Antd"],
    },
    {
      type: "work",
      title: "Web3 Frontend Developer",
      company: "SoftSync Dev",
      logo: "/assets/softsync_logo.jpg",
      duration: "Jun 2023 - Aug 2023",
      points: [
        "Integrated Openzeppelin libraries for enhanced security.",
        "Achieved 30% faster contract testing with Hardhat.",
        "Developed and deployed secure Ethereum-based smart contracts.",
        "Implemented blockchain integrations using Ether.js.",
      ],
      skills: ["React", "Remix", "Solidity", "Openzeppelin", "Hardhat"],
    },
    {
      type: "work",
      title: "MERN Stack Trainer",
      company: "Saylani Mass IT Training Programming",
      logo: "/assets/smit_logo.jpg",
      duration: "Feb 2023 - May 2023",
      points: [
        "Provided guidance and support to students throughout the training program.",
        "Developed course content for MERN stack training programs.",
        "Conducted workshops and training sessions.",
      ],
      skills: ["React", "Node.js", "HTML", "CSS"],
    },
  ];

  const educations = [
    {
      type: "education",
      title: "Bachelor of Information Technology",
      company: "University of Sindh",
      link: "https://www.usindh.edu.pk/",
      duration: "2018 - 2022",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQF67TqDSX7QuA/company-logo_200_200/company-logo_200_200/0/1630650677266/university_of_sindh_logo?e=1767225600&v=beta&t=SrKfwnNMQM3TXSy0NJgxjyQZs573kwS77f_xLBHKja4",
      points: [
        "Graduated with a focus on software development and emerging technologies.",
      ],
      skills: ["Information Technology", "Software Engineering"],
    },
  ];
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-foreground text-tracking-tight">
        Work Experience
      </h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Logo / Icon Column */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-border overflow-hidden relative">
                <img
                  src={exp?.logo}
                  alt={`${exp?.company} logo`}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1 mt-1">
                <div className="flex flex-col">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-muted-foreground text-sm">
                    {exp.title}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-3xl font-bold mb-8 text-foreground text-tracking-tight">
        Education
      </h2>
      <div className="space-y-10">
        {educations.map((edu, index) => (
          <div key={index} className="flex gap-4 group">
            {/* Logo / Icon Column */}
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center border border-border overflow-hidden relative">
                <img
                  src={edu?.logo}
                  alt={`${edu?.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1 mt-1">
                <div className="flex flex-col">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {edu.company}
                  </a>
                  <span className="text-muted-foreground text-sm">
                    {edu.title}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {edu.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
