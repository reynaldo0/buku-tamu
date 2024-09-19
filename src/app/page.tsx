// Home.tsx atau file lain di dalam proyek Anda
import { TamuButton } from "@/components/buttons";
import { FlipWords } from "@/components/flip-words";
import React from "react";

const words = [
  "Let's take a look at our team biography!",
  "Get to know the inspiring team behind our site!",
  "Meet the creative team behind this art project!"
];

const Home: React.FC = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center sm:bg-top md:bg-center"
      style={{
        backgroundImage: `url(/bg.jpeg)`,
      }}
    >
      <div className="absolute inset-0 bg-blue-950 opacity-75"></div>
      <div className="absolute bottom-0 left-0 w-full h-60 via-white/20 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        {/* Teks dengan FlipWords */} 
        <div className="mt-1">
          <h1 className="text-4xl md:text-6xl font-bold md:mx-40">
            <FlipWords className="text-center" words={words} />
          </h1>
        </div>
          <div className="mt-96 absolute">
            <TamuButton />
          </div>
      </div>
    </div>
  );
};

export default Home;
