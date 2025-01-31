"use client";

import { useEffect, useState, useRef } from "react";
import { SocialLinks } from "./SocialLinks";
import { profileData } from "../lib/constants";

export const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="h-screen w-full flex flex-col justify-start items-center space-y-6"
      style={{ backgroundColor: "#f1f1f1" }}
    >
      <div
        className={`h-16 w-[77.5%] flex justify-center items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px]"
          }`}
        style={{ backgroundColor: "#182153" }}
      >
        <SocialLinks variant="solid" />
      </div>

      <div
        className={`text-center w-[548px] pt-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20px]"
          }`}
      >
        <h1
          className="font-avenirLight mb-4"
          style={{ fontSize: "25px", lineHeight: "1.4em" }}
        >
          Hello, I&apos;m Aryan
        </h1>
        <p
          className="font-avenirLight"
          style={{ fontSize: "18px", lineHeight: "1.4em", color: "#182153" }}
        >
          {profileData.introduction}
        </p>
      </div>
    </div>
  );
};
