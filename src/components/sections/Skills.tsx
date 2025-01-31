"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "../sections/Section";
import { skills } from "../../lib/constants";
import { cn } from "../../lib/utils";

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;

        if (scrollPos >= sectionTop - window.innerHeight && scrollPos < sectionTop + sectionHeight) {
          setOffsetY((scrollPos - sectionTop) * 0.1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Section title="SKILLS" bgColor="#182153" headingTextColor="white">
      <div ref={sectionRef} className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: "url('/skills.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${Math.min(offsetY, 30)}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        <div className="absolute inset-0 bg-[rgb(24,33,83)] opacity-80"></div>

        <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={cn(
                "h-20 flex items-center justify-center bg-white/10 rounded-none text-sm tracking-wide opacity-0 translate-y-10 transition-all duration-700 ease-in-out",
                isVisible ? "opacity-100 translate-y-0" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
