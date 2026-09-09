import mediflowImage from "../assets/images/mediflow.png";
import chilaxImage from "../assets/images/chilax.png";
import kawutePropertiesImage from "../assets/images/kawuteProperties.png";
import chinovaImage from "../assets/images/chinova.png";

export const projects = [
  {
    id: 1,
    title: "Mediflow",
    description:
      "A real-time telemedicine platform that enables patients to consult with doctors via video calls, chat, and appointment scheduling, with a secure backend for managing medical records.",
    image: mediflowImage,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://Hamdan484.github.io/MEDIFLOW",
    repoUrl: "https://github.com/Hamdan484/MEDIFLOW",
  },
  {
    id: 2,
    title: "Chilax — Streaming Platform",
    description:
      "A streaming platform that allows users to watch movies and TV shows, create watchlists, and receive personalized recommendations based on their viewing history.",
    image: chilaxImage,
    tech: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    liveUrl: "https://hamdan484.github.io/Chilax/",
    repoUrl: "https://github.com/Hamdan484/Chilax",
  },
  {
    id: 3,
    title: "Kawute Properties — Real Estate Website",
    description:
      "A real estate website that allows users to browse and search for properties, view property details, and contact agents for inquiries.",
    image: kawutePropertiesImage,
    tech: ["React", "MongoDB", "Supabase", "Tailwind CSS"],
    liveUrl: "https://kawute-properties.vercel.app/",
    repoUrl: "https://github.com/Hamdan484/Kawute-Properties",
  },
  {
    id: 4,
    title: "Chinova",
    description:
      "A coffee shop website that allows users to browse and search for coffee products, view product details, and place orders online.",
    image: chinovaImage,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React", "Tailwind CSS"],
    liveUrl: "https://hamdan484.github.io/Chinova/",
    repoUrl: "https://github.com/Hamdan484/Chinova",
  },
];
