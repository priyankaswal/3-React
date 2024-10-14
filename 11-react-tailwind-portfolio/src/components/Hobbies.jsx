import Section from "./Section";
import { Heart } from "lucide-react";
import List from "./List";

const Hobbies = () => {
  const hobbies = [
    "Hiking",
    "Playing Volleyball",
    "Book Reading",
    "Playing Chess",
  ];
  return (
    <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
      <List items={hobbies} />
    </Section>
  );
};

export default Hobbies;
