'use client';

import React from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    // Load tsparticles instance and plugins
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#1a1a1a", // Updated background color for a better look
      },
    },
    particles: {
      color: {
        value: ["#ffffff", "#ff6347", "#00bfff"], // Multicolor particles
      },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      size: {
        value: { min: 1, max: 6 }, // Increased max size for better variation
      },
      number: {
        value: 80, // Increased particle count
      },
      opacity: {
        value: 0.6, // Softer particle opacity
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Repels particles on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Adds particles on click
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-[-1]" // Positioning for background use
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticleBackground;
