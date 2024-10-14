import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
    <Section icon={<BookOpen />} sectionTitle="Education">
      <Graduation
        title="Bachelor's in Computer Science"
        school="Doon University"
        year="2021-2024"
      />
      <Graduation
        title="Intermediate(Class 12)"
        school="Colonel's Academy"
        year="2020-2021"
      />
      <Graduation
        title="High School(Class 10)"
        school="Colonel's Academy"
        year="2018-2019"
      />
    </Section>
  );
};

export default Education;
