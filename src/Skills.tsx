import SkillCard from "./components/SkillCard";
import jsImage from "./assets/js.webp";
import tsImage from "./assets/ts.png";
import javaImage from "./assets/java.jpeg";
import pyImage from "./assets/py.png";
import tailwindImage from "./assets/tailwind.png";
import reactImage from "./assets/react.png";
import nextImage from "./assets/next.png";
import viteImage from "./assets/Vite.png";

const Skills = () => {
  return (
    <section
      className="container flex flex-col mt-40 py-20 gap-20 h-screen"
      id="skill"
    >
      <h1>
        My Top Skills &<br />
        Technologies
      </h1>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-10">
        <SkillCard img={jsImage} name="JavaScript" />
        <SkillCard img={tsImage} name="TypeScript" />
        <SkillCard img={javaImage} name="Java" />
        <SkillCard img={pyImage} name="Python" />
        <SkillCard img={reactImage} name="React" />
        <SkillCard img={tailwindImage} name="Tailwind CSS" />
        <SkillCard img={nextImage} name="Next" />
        <SkillCard img={viteImage} name="Vite" />
      </div>
    </section>
  );
};

export default Skills;
