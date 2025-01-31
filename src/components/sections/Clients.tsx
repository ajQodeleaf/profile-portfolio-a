"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Section } from "../sections/Section";
import { clientsData } from "../../lib/constants";

const Clients = () => {
  const [isVisible, setIsVisible] = useState({ deqode: false, petachain: false, tokamak: false });

  const deqodeRef = useRef(null);
  const petachainRef = useRef(null);
  const tokamakRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (deqodeRef.current) observer.observe(deqodeRef.current);
    if (petachainRef.current) observer.observe(petachainRef.current);
    if (tokamakRef.current) observer.observe(tokamakRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Section title="CLIENTS" bgColor="white" borderColor="#f1f1f1">
      <div className="w-full flex items-center justify-center py-8">
        <div className="flex justify-between items-center w-full max-w-5xl px-24">
          <div
            ref={deqodeRef}
            id="deqode"
            className={`flex items-center justify-center w-36 h-20 ${isVisible.deqode ? 'animate-rotate' : ''}`}
          >
            <Image
              src={clientsData.deqode.src}
              alt={clientsData.deqode.alt}
              width={clientsData.deqode.width}
              height={clientsData.deqode.height}
              className={`object-contain ${isVisible.deqode ? 'animate-fadeIn' : ''}`}
            />
          </div>
          <div
            ref={petachainRef}
            id="petachain"
            className={`flex items-center justify-center w-40 h-24 ${isVisible.petachain ? 'animate-rotate' : ''}`}
          >
            <Image
              src={clientsData.petachain.src}
              alt={clientsData.petachain.alt}
              width={clientsData.petachain.width}
              height={clientsData.petachain.height}
              className={`object-contain ${isVisible.petachain ? 'animate-fadeIn' : ''}`}
            />
          </div>
          <div
            ref={tokamakRef}
            id="tokamak"
            className={`flex items-center justify-center w-32 h-20 ${isVisible.tokamak ? 'animate-rotate' : ''}`}
          >
            <Image
              src={clientsData.tokamak.src}
              alt={clientsData.tokamak.alt}
              width={clientsData.tokamak.width}
              height={clientsData.tokamak.height}
              className={`object-contain ${isVisible.tokamak ? 'animate-fadeIn' : ''}`}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
