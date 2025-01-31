"use client";

import { useEffect, useRef } from "react";
import { Section } from "../sections/Section";
import { educationData } from "../../lib/constants";

const Education = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll<HTMLElement>(".experience-item");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <Section title="EDUCATION" bgColor="white" borderColor="#f1f1f1">
      <div ref={sectionRef} className="w-full h-auto flex flex-col p-20 relative">
        {educationData.map(({ startMonth, startYear, endMonth, endYear, course, institute, grade }, index) => {
          return (
            <div key={index} className="experience-item relative flex w-full h-max opacity-0">
              <div className="experience-left w-1/2 relative flex flex-col justify-start items-end pr-16 text-[#182153]">
                <h2 className="text-sm font-avenirHeavy">
                  {startMonth} {startYear} - {endMonth ? `${endMonth} ${endYear}` : "Present"}
                </h2>
                <p className="text-sm font-avenirLight pt-2">{course}</p>
              </div>

              <div className="relative w-1.5 h-full">
                <div className="experience-line absolute left-1.5 top-0 w-[1.5px] h-full bg-gray-200"></div>
                <div className="experience-blob absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#182153]"></div>
              </div>

              <div className="experience-right w-1/2 relative flex flex-col items-start pl-16 text-[#182153]">
                <h3 className="text-sm font-avenirLight pb-3">{institute.toUpperCase()}</h3>
                <ul className="list-disc list-inside text-sm font-avenirLight">
                <li key={grade}>{grade}</li>
                </ul>
                <p className="h-6"></p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Education;
