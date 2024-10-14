import Section from "./Section";
import { Award } from "lucide-react";
import List from "./List";

const Extracurricular = () => {
  const curricularItems = [
    "Member of the University Chess Club and the University Volleyball Team.",
    "Served as a School Captain/Vice-Captain, demonstrating strong leadership and organizational skills."
  ];
  return (
    <Section
      icon={<Award />}
      sectionTitle="Extracurricular Activities"
    >
      <List items={curricularItems} />
    </Section>
  );
};

export default Extracurricular;
