"use client";

import dynamic from "next/dynamic";
import React from "react";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

interface TypewriterHeadingProps {
  words: string[];
  className?: string;
}

export default function TypewriterHeading({
  words,
  className = "",
}: TypewriterHeadingProps) {
  return (
    <h1
      className={
        "flex items-center justify-center text-4xl main-heading  bg-gradient-to-r " +
        "from-[#7f00ff] via-[#7f00ff] to-[#7f00ff] bg-clip-text text-transparent " +
        className
      }
      aria-label={words.join(" | ")}
    >
      {/* Typewriter text */}
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursor: "", // disable built-in cursor
        }}
      />

      {/* Custom cursor (always rendered) */}
      <span className="custom-cursor">|</span>

   <style jsx>{`
  .custom-cursor {
    display: inline-block;
    margin-left: 2px;
    font-weight: 600;
    font-size: inherit;
    line-height: 1;
    color: #7f00ff;
    animation: blink 1s step-start infinite;
    vertical-align: middle; /* align with text */
    transform: translateY(-2px); /* nudge upwards */
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`}</style>

    </h1>
  );
}
