import Section from "./Section";
import { User } from "lucide-react";

function AboutMe() {
  return (
    <Section icon={<User />} sectionTitle="About Me">
      <p>
        I'm a passionate full-stack developer with a strong foundation in
        building web applications. As a fresher, I am eager to apply my skills
        in creating efficient, scalable, and user-friendly solutions to solve
        real-world challenges.
      </p>
    </Section>
  );
}

export default AboutMe;
