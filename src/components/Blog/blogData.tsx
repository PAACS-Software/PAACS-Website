import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    slug: "paacs-mission",
    title: "Our Mission - Simulate Anything, Understand Everything",
    paragraph:
      "PAACS exists to break boundaries in simulation. Our mission: simulate anything, empower everyone.",
    image: "/images/blog/Logo_page-0002.jpg",
    author: {
      name: "Paul Dewhurst",
      image: "/images/blog/paul_dewhurst.jpg",
      designation: "Founder, PAACS Software Ltd",
    },
    tags: ["PAACS", "Mission", "Simulation", "Engineering"],
    publishDate: "April 1, 2025",
  },
  {
    id: 3,
    slug: "fea-linear-mathematics",
    title: "The Mathematics of Linear FEA",
    paragraph:
      "Explore the fundamental equation of linear Finite Element Analysis (FEA): K·u = f. Understand how stiffness matrices, displacement vectors, and force vectors interact to simulate structural behavior.",
    image: "/images/blog/Logo_page-0002.jpg",
    author: {
      name: "Paul Dewhurst",
      image: "/images/blog/paul_dewhurst.jpg",
      designation: "Founder, PAACS Software Ltd",
    },
    tags: ["FEA", "Mathematics", "Structural Analysis", "Tutorial"],
    publishDate: "August 15, 2025",
  },
];
export default blogData;
