import React from "react";

interface IndiaFutureAILogoProps {
  className?: string;
  size?: number;
}

export const IndiaFutureAILogo: React.FC<IndiaFutureAILogoProps> = ({
  className = "w-5 h-5",
  size
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-label="IndiaFutureAI Logo"
    >
      <defs>
        {/* I Gradient: Orange to Violet */}
        <linearGradient id="if-grad-i" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF5500" />
          <stop offset="35%" stopColor="#FF3366" />
          <stop offset="70%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#7000FF" />
        </linearGradient>

        {/* F Gradient: Orange to Purple to Electric Blue */}
        <linearGradient id="if-grad-f" x1="0%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FF5500" />
          <stop offset="30%" stopColor="#FF4500" />
          <stop offset="60%" stopColor="#9933FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>

      {/* Stylized 'I' Pillar */}
      <rect
        x="16"
        y="16"
        width="11"
        height="64"
        rx="5.5"
        fill="url(#if-grad-i)"
      />

      {/* Stylized 'F' Dynamic Wing */}
      <path
        d="M33 21.5C33 18.4624 35.4624 16 38.5 16H66.5C69.5376 16 72 18.4624 72 21.5C72 24.5376 69.5376 27 66.5 27H43.8L58.5 40.2C60.2 41.7 60.5 44.2 59.2 46.1C58.4 47.2 57.2 47.8 55.9 47.8H48.2L38.4 69.8C37.5 71.8 35.5 73.1 33.3 73.1C33.1 73.1 33 73.1 33 73.1V21.5Z"
        fill="url(#if-grad-f)"
      />

      {/* Complete Accurate 'F' Body with dynamic cutout */}
      <path
        d="M33 21.5C33 18.46 35.46 16 38.5 16H66C69.3 16 72 18.7 72 22C72 24.8 70 27.2 67.2 27.8L44 32.5L64 45.5C66.8 47.3 67.2 51.1 64.9 53.5L46 72.5C44.2 74.3 41.5 74.8 39.2 73.7L33 80V21.5Z"
        fill="url(#if-grad-f)"
        opacity="0"
      />

      {/* Precise SVG Polygon & Curves for exact IF icon match */}
      <g>
        {/* Top F bar & diagonal connector */}
        <path
          d="M 33 22 C 33 18.5 35.5 16 39 16 L 68 16 C 71 16 72.5 18 72.5 21 C 72.5 23 71.5 25 68.5 25.5 L 43.5 29.5 L 67 43 C 69.5 44.5 69.5 47.5 67 49.5 L 45 68 L 33 80 L 33 22 Z"
          fill="url(#if-grad-f)"
        />
        {/* Inner negative chevron cutout */}
        <path
          d="M 35 32 L 56 32 C 58.5 32 60 34 58.5 36 L 44 49 L 55 58 C 57 60 56 62.5 53.5 64 L 35 48 Z"
          fill="#020617"
          className="fill-slate-950"
        />
        {/* Lower F dynamic arrow arm */}
        <path
          d="M 43 47 L 66 43 C 68.5 42.5 70 44.5 69 47 L 46 72 C 44.5 73.5 42 72.5 42 70.5 L 43 47 Z"
          fill="url(#if-grad-f)"
        />
      </g>

      {/* 3 Sparkle Stars */}
      {/* Star 1: Top Orange */}
      <path
        d="M74 36 C74 38 72.5 39.5 70.5 39.5 C72.5 39.5 74 41 74 43 C74 41 75.5 39.5 77.5 39.5 C75.5 39.5 74 38 74 36 Z"
        fill="#FF6A00"
      />
      {/* Star 2: Middle Purple */}
      <path
        d="M82 46 C82 48.5 80 50.5 77.5 50.5 C80 50.5 82 52.5 82 55 C82 52.5 84 50.5 86.5 50.5 C84 50.5 82 48.5 82 46 Z"
        fill="#8B5CF6"
      />
      {/* Star 3: Lower Blue */}
      <path
        d="M73 57 C73 59 71.5 60.5 69.5 60.5 C71.5 60.5 73 62 73 64 C73 62 74.5 60.5 76.5 60.5 C74.5 60.5 73 59 73 57 Z"
        fill="#0088FF"
      />
    </svg>
  );
};
