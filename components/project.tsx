"use client";
import LayoutGrid from "./ui/projectCard";
import Flutter from "../assets/flutter.png";
import Laravel from "../assets/laravel-framework.png";
import Nodejs from "../assets/Node JS Website.png";
import ReactImage from "../assets/react.png";
import Django from "../assets/django.png";
import Firebase from "../assets/firebase.png";
import GeminaAI from "../assets/google.png";
import Image from "next/image";

export function Project() {
  return (
    <section id="project" className="h-screen py-20">
      {/* Header Section */}
      <header className="p-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">My Featured Projects</h2>
        <p className="text-lg mt-2 text-gray-600">
          Explore some of our best works and innovative solutions that bring your vision to life
        </p>
      </header>
      <LayoutGrid cards={cards} />
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <h3 className="font-bold md:text-3xl text-2xl text-white">E-commerce Website</h3>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our e-commerce platform is designed to provide a user-friendly, intuitive shopping experience. With a wide selection of products, we aim to bring convenience and quality to every purchase.
      </p>
      <div className="mt-4">
        <h4 className="text-base font-semibold text-white">Technologies Used:</h4>
        <div className="flex gap-2 items-center mt-2">
          <Image src={ReactImage} alt="React" className="h-8 w-8" />
          <Image src={Django} alt="Django" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <h3 className="font-bold md:text-3xl text-2xl text-white">Recipe Website</h3>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A platform to explore and share recipes. With a user-friendly interface and advanced search capabilities, it caters to both novice and experienced cooks.
      </p>
      <div className="mt-4">
        <h4 className="text-base font-semibold text-white">Technologies Used:</h4>
        <div className="flex gap-2 items-center mt-2">
          <Image src={ReactImage} alt="React" className="h-8 w-8" />
          <Image src={Nodejs} alt="Node.js" className="h-8 w-8" />
          
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <h3 className="font-bold md:text-3xl text-2xl text-white">Voice Assistance</h3>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A next-generation voice assistant built for convenience and efficiency. It integrates with smart devices, understands natural language, and learns from user interactions for an enhanced experience.
      </p>
      <div className="mt-4">
        <h4 className="text-base font-semibold text-white">Technologies Used:</h4>
        <div className="flex gap-2 items-center mt-2">
          <Image src={Flutter} alt="Flutter" className="h-8 w-8" />
          <Image src={Firebase} alt="Firebase" className="h-8 w-8" />
          <Image src={GeminaAI} alt="Gemina AI" className="h-8 w-8" />
        
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <h3 className="font-bold md:text-3xl text-2xl text-white">Airbnb Clone</h3>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A feature-rich clone of Airbnb that provides seamless property listing, booking, and user interaction. Designed for scalability and performance.
      </p>
      <div className="mt-4">
        <h4 className="text-base font-semibold text-white">Technologies Used:</h4>
        <div className="flex gap-2 items-center mt-2">
          <Image src={ReactImage} alt="React" className="h-8 w-8" />
          <Image src={Laravel} alt="Laravel" className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "E-commerce",
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "https://images.pexels.com/photos/5632396/pexels-photo-5632396.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Recipe Website",
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "https://images.pexels.com/photos/8804979/pexels-photo-8804979.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Voice Assistance",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "https://images.pexels.com/photos/5083215/pexels-photo-5083215.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Airbnb Clone",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default Project;
