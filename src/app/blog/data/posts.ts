export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  author: {
    name: string;
    image: string;
    designation: string;
    linkedin: string;
    instagram: string;
    github: string;
  };
  description: string;
  content: string; // markdown or raw HTML
  image: string;
};

const posts: BlogPost[] = [
  {
    slug: "paacs-mission",
    title: "Our Mission - To Simulate Anything",
    date: "2025-04-01",
    tags: ["PAACS", "Mission", "Simulation", "Engineering"],
    author: {
      name: "Paul Dewhurst",
      image: "/images/blog/paul_dewhurst.jpg",
      designation: "Founder, PAACS Software Ltd",
      linkedin: "https://linkedin.com/in/paul-dewhurst",
      instagram: "",
      github: "",
    },
    description:
      "PAACS exists to break boundaries in simulation. Our mission: simulate anything, empower everyone.",
    image: "/images/blog/Logo_page-0001.jpg",
    content: `
## Why PAACS?

In the world of engineering and science, simulation is one of the most powerful tools we have. It lets us test ideas, validate designs, explore edge cases, and optimize performance — all without building a single prototype. But simulation tools today are often siloed, complex, or expensive. They serve a single domain — like structural mechanics or fluid dynamics — but rarely work together in harmony.

At **PAACS Software**, we’re changing that.

:::quote
We believe simulation should be flexible, intuitive, and powerful — something every innovator can use to model the world.
:::

## A Universal Simulation Platform

PAACS is being built as a **general-purpose simulation tool** — one that grows with you. Whether you're starting with Finite Element Analysis (FEA), diving into Computational Fluid Dynamics (CFD), or eventually combining disciplines like electromagnetics, thermodynamics, or controls, we want you to do it all in one cohesive ecosystem.

Our architecture is node-based, letting you connect components like **geometry**, **mesh**, **physics modules**, **solvers**, and **post-processing** tools in a clean visual workflow. Each node can be customized, scripted, or replaced — and plugin systems allow whole domains like electrical circuits, controls, or particle systems to be added as needed.

### The Future of Simulation is Modular

Our long-term goal is to support any kind of physics. This means:

- Structural mechanics and nonlinear FEA
- Compressible and incompressible fluid flow
- Electromagnetic field analysis
- Heat transfer and thermal management
- Particle physics and molecular dynamics
- Control systems and circuit logic
- Coupled multiphysics problems — like fluid-structure interaction

We’re building an engine where these systems don’t just coexist, but actually talk to each other — allowing **pressure fields from CFD** to drive **forces in structural simulations**, or **thermal simulations** to influence **material behavior** over time.

## For Engineers, Researchers, and Creators

PAACS is for:
- Engineers testing structural designs
- Researchers modeling complex systems
- Students learning the building blocks of simulation
- Makers pushing experimental ideas forward

We're committed to keeping it accessible, extensible, and future-ready.



## Understanding the Complex

At PAACS, we aim to deliver a reliable, extensible platform that supports simulation across a wide range of physical disciplines. Our architecture is designed to give users control and clarity — whether you're focused on detailed structural mechanics or large-scale multiphysics workflows.

:::quote
**Understanding the complex** — through a system that is modular, transparent, and built for real-world engineering challenges.
:::

We’re building a toolkit that enables you to approach any problem with the right combination of methods and modules — and adapt your workflow as your projects grow in scope and sophistication.

Whether your focus is academic research, industrial engineering, or experimental design, PAACS provides the foundation to simulate with precision and flexibility.
`,
  },
  {
    slug: "test-blog",
    title: "This blog is a test / example",
    date: "2024-01-12",
    tags: ["Design", "Development", "Test"],
    author: {
      name: "Fake Person",
      image: "/images/blog/author-02.png",
      designation: "Guest Author",
      linkedin: "",
      instagram: "",
      github: "https://github.com/johndoe",
    },
    description:
      "A full feature showcase: images, math, quotes, code, and styled Markdown — everything in one post!",
    image: "/images/blog/blog-details-02.jpg",
    content: `
  
  ## 🧪 Welcome to the Test Blog
  
  This blog post demonstrates all the features you can use in your posts.
  
  ---
  
  ## 📸 Image
  
  You can embed images like this:
  
  ![Another Image](/images/blog/blog-details-02.jpg)
  
  ---
  
  ## 💡 Headings and Text
  
  **Bold**, _italic_, ~~strikethrough~~, and \`inline code\` are all supported.
  
  ---
  
  ## 📐 Math
  
  Inline math: $E = mc^2$  
  Block math:
  
  $$
  \\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
  $$
  
  ---
  
  ## 🧾 Quote Box with Directive
  
  :::quote
  This is a stylized quote rendered with the custom quotebox component.
  :::
  
\`You can still use the normal version though\`

  > This is a native Markdown blockquote.
  
  ---
  
  ## 🧮 Code Block
  
  \`\`\`ts
  function helloWorld(name: string) {
    return \`Hello, \${name}!\`;
  }
  \`\`\`
  
  ---
  
  ## 🔗 Links
  
  - [Visit PAACS](https://paacs.pro)
  - [Check out GitHub](https://github.com)
  
  ---
  
  ## ✅ Lists
  
  - One
  - Two
    - Nested
  - Three
  
  1. First
  2. Second
  
  ---
  
  ## 🏷️ Tags
  
  These are added automatically at the bottom, but you can still write them here:
  
  - Design
  - Development
  - Info
    `,
  },

  // Add more posts here
];

export default posts;
