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
    id: 2,
    slug: "test-blog",
    title: "A test / template",
    publishDate: "January 1, 2025",
    tags: ["Test", "Not real", "Info"],
    author: {
      name: "Fake person",
      image: "/images/blog/author-02.png",
      designation: "Guest Author",
    },
    paragraph:
      "A test page, showing off the features and styling of the blogging system",
    image: "/images/blog/blog-details-02.jpg",
  },
];
export default blogData;
