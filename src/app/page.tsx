import Clients from "../components/sections/Clients";
import { ContactMe } from "../components/sections/ContactMe";
import Education from "../components/sections/Education";
import Experience from "../components/sections/Experience";
import Expertise from "../components/sections/Expertise";
import { Introduction } from "../components/Introduction";
import Profile from "../components/sections/Profile";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <section id="profile">
        <Profile />
      </section>
      <section id="introduction">
        <Introduction />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="clients">
        <Clients />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
    </div>
  );
}
