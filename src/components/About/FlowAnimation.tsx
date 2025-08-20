// components/FlowAnimation.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface Segment {
  d: string;
  startColor: string;
  stopColor: string;
  delay: number;
}

export function FlowAnimation() {
  const width = 600;
  const height = 300;

  // Node positions
  const root = { x: 18, y: height / 2 };
  const mids = [
    { x: width * 0.4, y: height * 0.1 },
    { x: width * 0.4, y: height * 0.5 },
    { x: width * 0.4, y: height * 0.9 },
  ];
  const rights = Array.from({ length: 6 }).map((_, i) => {
    const mid = mids[Math.floor(i / 2)]; // picks mids[0], mids[0], mids[1], mids[1], ...
    const offset = height * 0.1; // same “good portion”
    return {
      x: width - 100,
      y: mid.y + (i % 2 === 0 ? -offset : offset), // even indices go above, odd go below
    };
  });

  // Timing
  const drawDuration = 0.8; // seconds to draw each group
  const pauseAfter = 3; // seconds to hold full-drawn
  const cycleLength = drawDuration * 2 + pauseAfter; // full cycle
  const geometryDelay = 0;
  const simulationDelay = drawDuration;

  // Segments: first 3 at geometryDelay, next 6 at simulationDelay
  const segments: Segment[] = [
    // Geometry → Mesh
    {
      d: `M${root.x},${root.y} L${mids[0].x},${mids[0].y}`,
      startColor: "#076EFF",
      stopColor: "#4FABFF",
      delay: geometryDelay,
    },
    {
      d: `M${root.x},${root.y} L${mids[1].x},${mids[1].y}`,
      startColor: "#4FABFF",
      stopColor: "#B1C5FF",
      delay: geometryDelay,
    },
    {
      d: `M${root.x},${root.y} L${mids[2].x},${mids[2].y}`,
      startColor: "#B1C5FF",
      stopColor: "#FFDDB7",
      delay: geometryDelay,
    },

    // Mesh → Simulation
    {
      d: `M${mids[0].x},${mids[0].y} L${rights[0].x},${rights[0].y}`,
      startColor: "#FFDDB7",
      stopColor: "#FFB7C5",
      delay: simulationDelay,
    },
    {
      d: `M${mids[0].x},${mids[0].y} L${rights[1].x},${rights[1].y}`,
      startColor: "#FFB7C5",
      stopColor: "#FFE7EA",
      delay: simulationDelay,
    },

    {
      d: `M${mids[1].x},${mids[1].y} L${rights[2].x},${rights[2].y}`,
      startColor: "#076EFF",
      stopColor: "#4FABFF",
      delay: simulationDelay,
    },
    {
      d: `M${mids[1].x},${mids[1].y} L${rights[3].x},${rights[3].y}`,
      startColor: "#4FABFF",
      stopColor: "#B1C5FF",
      delay: simulationDelay,
    },

    {
      d: `M${mids[2].x},${mids[2].y} L${rights[4].x},${rights[4].y}`,
      startColor: "#B1C5FF",
      stopColor: "#FFDDB7",
      delay: simulationDelay,
    },
    {
      d: `M${mids[2].x},${mids[2].y} L${rights[5].x},${rights[5].y}`,
      startColor: "#FFDDB7",
      stopColor: "#FFB7C5",
      delay: simulationDelay,
    },
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
      <defs>
        {/* Arrowhead for “Variations” */}
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="0"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path
            className="fill-gray-800 dark:fill-white"
            d="M0,0 L0,6 L6,3 Z"
          />
        </marker>

        {/* Gradients */}
        {segments.map((seg, i) => (
          <linearGradient
            id={`grad${i}`}
            key={i}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={seg.startColor} />
            <stop offset="100%" stopColor={seg.stopColor} />
          </linearGradient>
        ))}
      </defs>

      {/* Column labels */}
      {/*
      {[
        { label: "Geometry", x: root.x },
        { label: "Mesh", x: mids[0].x },
        { label: "Simulation", x: rights[0].x },
      ].map(({ label, x }) => (
        <text
          key={label}
          x={x}
          y={25}
          textAnchor="middle"
          fill="currentColor"
          className="text-lg font-bold text-gray-800 dark:text-white"
        >
          {label}
        </text>
      ))}
      */}

      {/* Label connectors */}
      {/*
      <path
        d={`M${root.x + 55},17 L${mids[0].x - 40},17`}
        className="stroke-gray-800 dark:stroke-white"
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrow)"
      />
      <path
        d={`M${mids[0].x + 30},17 L${rights[0].x - 75},17`}
        className="stroke-gray-800 dark:stroke-white"
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrow)"
      />
      */}

      {/* Static base network */}
      {segments.map((seg, i) => (
        <path
          key={i}
          d={seg.d}
          className="stroke-gray-300 dark:stroke-white"
          strokeWidth={1}
          fill="none"
        />
      ))}

      {/* Animated highlight */}
      {segments.map((seg, i) => {
        const isGeom = seg.delay === geometryDelay;
        const start = seg.delay / cycleLength;
        const finish = (seg.delay + drawDuration) / cycleLength;
        const hideAt = (seg.delay + drawDuration + pauseAfter) / cycleLength;

        return (
          <motion.path
            key={i}
            d={seg.d}
            stroke={`url(#grad${i})`}
            strokeWidth={2}
            fill="none"
            initial={{
              pathLength: 0,
              strokeOpacity: isGeom ? 1 : 0,
            }}
            animate={{
              pathLength: [0, 1],
              strokeOpacity: isGeom ? [1, 1, 0, 0] : [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              pathLength: {
                delay: seg.delay,
                duration: drawDuration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: cycleLength - drawDuration,
              },
              strokeOpacity: {
                duration: cycleLength,
                ease: "linear",
                times: isGeom
                  ? [0, finish, hideAt, 1]
                  : [0, start, start, finish, hideAt, 1],
                repeat: Infinity,
              },
            }}
          />
        );
      })}

      {/* Nodes */}
      {[root, ...mids, ...rights].map(({ x, y }, i) => (
        <rect
          key={i}
          x={x - 12}
          y={y - 12}
          width={24}
          height={24}
          rx={4}
          className="fill-black stroke-gray-800 dark:fill-white dark:stroke-white"
          strokeWidth={1}
        />
      ))}

      {/* Variations pointers with slight deviation and two‐line label */}
      {/*
      {(() => {
        const baseTo = { x: mids[1].x - 80, y: mids[1].y + 120 };
        const fromPoints = [mids[1], mids[2]];

        return (
          <>
            {fromPoints.map((from, i) => {
              // shift each arrow a bit (5px right, 3px down per index)
              const to = {
                x: baseTo.x + i * 5,
                y: baseTo.y + i * 20,
              };
              return (
                <path
                  key={i}
                  d={`M${from.x},${from.y} L${to.x},${to.y}`}
                  className="stroke-gray-800 dark:stroke-white"
                  strokeWidth={1.5}
                  fill="none"
                  markerEnd="url(#arrow)"
                />
              );
            })}

            <text
              x={baseTo.x - 55}
              y={baseTo.y + 15}
              textAnchor="end"
              fill="currentColor"
              className="text-sm font-bold text-gray-800 dark:text-white"
            >
              <tspan x={baseTo.x - 5} dy="0">
                Easily create variations
              </tspan>
              <tspan x={baseTo.x - 5} dy="1.2em">
                to optimise your design!
              </tspan>
            </text>
          </>
        );
      })()}
      */}
    </svg>
  );
}
