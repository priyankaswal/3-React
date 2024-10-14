import Section from "./Section";
import { Globe, SofaIcon } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Linkedin />,
      title: "Linkedin",
      url: "https://www.linkedin.com/feed/",
    },
    { icon: <Github />, title: "Github", url: "https://github.com//" },
  ];
  return (
    <div className="pb-5">
      <Section icon={<Globe />} sectionTitle="Contact & Social Media">
        <p className=" text-gray-700 mb-4">
          Email: aswalpriyank0@gamil.com <br />
          Phone: 9084618239
        </p>
        {socialLinks.map((social) => (
          <SocialMedia
            key={social.url}
            icon={social.icon}
            title={social.title}
            url={social.url}
          />
        ))}
      </Section>
    </div>
  );
};

export default Contact;
