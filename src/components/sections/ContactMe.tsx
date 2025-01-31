"use client";

import { useEffect, useRef, useState } from "react";
import InputField from "../InputField";
import { SocialLinks } from "../SocialLinks";
import { TextareaWithLabel } from "../TextAreaWithLabel";
import { Section } from "../sections/Section";  
import { Button } from "../ui/button";
import { profileData } from "../../lib/constants";

export function ContactMe() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
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
    <Section title="CONTACT ME" bgColor="#f1f1f1" borderColor="white">
      <div className="flex w-full h-full">
        <div className="w-1/2 border-r border-white p-8">
          <form className="space-y-4 pt-16">
            <InputField label="Name" placeholder="Enter your name" />
            <InputField label="Email" type="email" placeholder="Enter your email" />
            <InputField label="Password" type="password" placeholder="Enter your password" />
            <TextareaWithLabel />
            <div className="w-full pr-12 pl-24 flex justify-center pt-4">
              <Button className="w-full text-sm font-avenirLight" style={{ backgroundColor: "#182153" }}>
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div
          ref={sectionRef}
          className={`w-1/2 pl-16 pt-24 text-[#182153] border-l border-white ${
            isInView ? "animate-slide-up" : ""
          }`}
        >
          <div>
            <h1 className="font-avenirHeavy text-[30px] leading-[1.4em]">{profileData.name}</h1>
            <p className="font-avenirLight text-[14px] leading-[1.4em]">{profileData.title}</p>
          </div>
          <div className="pt-8">
            <h1 className="font-avenirHeavy text-[14px] leading-[1.4em] tracking-wider">Phone:</h1>
            <p className="font-avenirLight text-[14px] leading-[1.4em]">{profileData.phone}</p>
          </div>
          <div className="pt-8 mb-24">
            <h1 className="font-avenirHeavy text-[14px] leading-[1.4em] tracking-wider">Email:</h1>
            <p className="font-avenirLight text-[14px] leading-[1.4em]">{profileData.email}</p>
          </div>
          <div className="h-[2px] w-32 mb-4" style={{ backgroundColor: "#dadade" }}></div>
          <div className="flex items-center space-x-12">
            <SocialLinks variant="solid" iconColor="black" />
          </div>
        </div>
      </div>
    </Section>
  );
}
