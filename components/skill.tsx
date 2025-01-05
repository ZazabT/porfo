import HoverEffect from "./ui/card-hover-effect";

const skills = [
  {
    title: "React",
    icon: "/assets/react.png", 
    description: "Build interactive UIs with React, a popular JavaScript library.",
    link: "https://react.dev/",
  },
  {
    title: "Next.js",
    icon: "/assets/nextjs.svg",
    description: "Build server-rendered and static web applications with Next.js.",
    link: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    icon: "/assets/tailwind.png",
    description: "Create stunning designs quickly with Tailwind CSS.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Flutter",
    icon: "/assets/flutter.png",
    description: "Build beautiful natively compiled apps for mobile, web, and desktop.",
    link: "https://flutter.dev/",
  },
  {
    title: "Node.js",
    icon: "/assets/Node JS Website.png",
    description: "Develop scalable backend systems using Node.js.",
    link: "https://nodejs.org/",
  },
  {
    title: "Laravel",
    icon: "/assets/laravel-framework.png",
    description: "Elegant PHP frameworks for web artisans.",
    link: "https://laravel.com/",
  },
  {
    title: "Django",
    icon: "/assets/django.png",
    description: "A high-level Python web framework for rapid development.",
    link: "https://www.djangoproject.com/",
  },
  {
    title: "MongoDB",
    icon: "/assets/mongo-db.png",
    description: "Store and retrieve unstructured data using MongoDB.",
    link: "https://www.mongodb.com/",
  },
  {
    title: "MySQL",
    icon: "/assets/mysql.png",
    description: "Manage relational databases efficiently with MySQL.",
    link: "https://www.mysql.com/",
  },
  {
    title: "Git",
    icon: "/assets/git.png",
    description: "Version control and collaborate effectively with Git.",
    link: "https://git-scm.com/",
  },
  {
    title: "REST API Design",
    icon: "/assets/Api.png",
    description: "Design and implement efficient RESTful APIs.",
    link: "#", // Add appropriate link if available
  },
  {
    title: "Firebase",
    icon: "/assets/firebase.png",
    description: "Firebase is a platform for building, managing, and scaling web and mobile applications.",
    link: "https://firebase.google.com/"
  }
  
];

const Skill = () => {
  return (
    <div>
      {/* Skills Section Header */}
      <header className="p-6 mt-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Skills</h2>
        <p className="text-lg mt-2 text-gray-600">
          A showcase of the tools, technologies, and expertise I bring to every project.
        </p>
      </header>

      {/* Pass skills array to HoverEffect */}
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skill;
