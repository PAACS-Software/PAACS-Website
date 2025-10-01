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

  {
    slug: "fea-linear-mathematics",
    title: "The Mathematics of Linear FEA",
    date: "2025-08-15",
    tags: ["FEA", "Mathematics", "Structural Analysis", "Tutorial"],
    author: {
      name: "Paul Dewhurst",
      image: "/images/blog/paul_dewhurst.jpg",
      designation: "Founder, PAACS Software Ltd",
      linkedin: "https://linkedin.com/in/paul-dewhurst",
      instagram: "",
      github: "",
    },
    description:
      "A deep dive into the fundamental mathematics behind linear Finite Element Analysis: how the stiffness matrix, displacement vector, and force vector work together to solve structural problems.",
    image: "/images/blog/fea-mathematics.jpg",
    content: `
## Understanding Linear FEA: The Fundamental Equation

Finite Element Analysis (FEA) for linear problems is built on a beautifully simple mathematical foundation:

$$
\\mathbf{K} \\mathbf{u} = \\mathbf{f}
$$

This equation represents the equilibrium of a discretized structure, where:
- $\\mathbf{K}$ is the **global stiffness matrix**
- $\\mathbf{u}$ is the **displacement vector**
- $\\mathbf{f}$ is the **force (load) vector**

---

## The Stiffness Matrix (K)

The stiffness matrix $\\mathbf{K}$ describes how the structure resists deformation. For structural problems, it relates applied forces to resulting displacements.

### Building the Global Stiffness Matrix

The global stiffness matrix is assembled from individual **element stiffness matrices**:

$$
\\mathbf{K} = \\sum_{e=1}^{n_{elem}} \\mathbf{K}^{(e)}
$$

Each element stiffness matrix $\\mathbf{K}^{(e)}$ is computed as:

$$
\\mathbf{K}^{(e)} = \\int_{V^{(e)}} \\mathbf{B}^T \\mathbf{D} \\mathbf{B} \\, dV
$$

Where:
- $\\mathbf{B}$ is the **strain-displacement matrix** (relates nodal displacements to strains)
- $\\mathbf{D}$ is the **material constitutive matrix** (relates stresses to strains via material properties)
- $V^{(e)}$ is the volume of element $e$

### Material Properties in the Stiffness Matrix

For linear elastic materials, the constitutive matrix $\\mathbf{D}$ depends on:
- **Young's Modulus** ($E$) - material stiffness
- **Poisson's Ratio** ($\\nu$) - lateral strain response

For 3D isotropic elasticity:

$$
\\mathbf{D} = \\frac{E}{(1+\\nu)(1-2\\nu)} \\begin{bmatrix}
1-\\nu & \\nu & \\nu & 0 & 0 & 0 \\\\
\\nu & 1-\\nu & \\nu & 0 & 0 & 0 \\\\
\\nu & \\nu & 1-\\nu & 0 & 0 & 0 \\\\
0 & 0 & 0 & \\frac{1-2\\nu}{2} & 0 & 0 \\\\
0 & 0 & 0 & 0 & \\frac{1-2\\nu}{2} & 0 \\\\
0 & 0 & 0 & 0 & 0 & \\frac{1-2\\nu}{2}
\\end{bmatrix}
$$

---

## How Mesh Elements Affect the Stiffness Matrix

### Element Shape Functions

Each element type (triangles, quads, tetrahedra, hexahedra) uses **shape functions** $\\mathbf{N}$ to interpolate displacements within the element:

$$
\\mathbf{u}(x,y,z) = \\mathbf{N}(x,y,z) \\mathbf{u}^{(e)}
$$

The strain-displacement matrix $\\mathbf{B}$ is derived from these shape functions:

$$
\\mathbf{B} = \\frac{\\partial \\mathbf{N}}{\\partial x}, \\frac{\\partial \\mathbf{N}}{\\partial y}, \\frac{\\partial \\mathbf{N}}{\\partial z}
$$

### Mesh Refinement Impact

**Finer meshes** (more elements, smaller size):
- Increase the size of $\\mathbf{K}$ (more degrees of freedom)
- Improve solution accuracy by better approximating curved geometries and stress gradients
- Capture localized effects like stress concentrations
- Increase computational cost (larger system to solve)

**Coarser meshes** (fewer elements, larger size):
- Reduce computational cost
- May miss important local behavior
- Can produce inaccurate results in high-gradient regions

### Element Quality Matters

Poor element shapes (highly skewed or distorted) lead to:
- Ill-conditioned stiffness matrices
- Numerical errors in integration
- Inaccurate stress and strain calculations

---

## The Force Vector (f)

The force vector $\\mathbf{f}$ contains all external loads applied to the structure:

$$
\\mathbf{f} = \\mathbf{f}_{point} + \\mathbf{f}_{distributed} + \\mathbf{f}_{body}
$$

### Types of Loads

**Point loads** are directly assigned to nodes:

$$
\\mathbf{f}_{point} = [0, 0, ..., F_x, F_y, F_z, ..., 0, 0]^T
$$

**Distributed loads** (pressure, surface tractions) are converted to nodal forces via integration:

$$
\\mathbf{f}_{distributed}^{(e)} = \\int_{S^{(e)}} \\mathbf{N}^T \\mathbf{p} \\, dS
$$

Where $\\mathbf{p}$ is the pressure/traction on surface $S^{(e)}$.

**Body forces** (gravity, acceleration) are volume loads:

$$
\\mathbf{f}_{body}^{(e)} = \\int_{V^{(e)}} \\mathbf{N}^T \\rho \\mathbf{g} \\, dV
$$

Where $\\rho$ is density and $\\mathbf{g}$ is gravitational acceleration.

---

## The Displacement Vector (u)

The displacement vector $\\mathbf{u}$ contains the unknowns we're solving for:

$$
\\mathbf{u} = [u_1, v_1, w_1, u_2, v_2, w_2, ..., u_n, v_n, w_n]^T
$$

For a 3D problem with $n$ nodes:
- $u_i, v_i, w_i$ are displacements in x, y, z directions at node $i$
- Total degrees of freedom = $3n$ (before applying boundary conditions)

### Boundary Conditions

Essential (Dirichlet) boundary conditions fix certain displacements:
- Fixed support: $u = v = w = 0$
- Roller support: one or two components set to zero

These constraints are enforced by modifying the system $\\mathbf{K}\\mathbf{u} = \\mathbf{f}$ before solving.

---

## Solving the System

Once $\\mathbf{K}$ and $\\mathbf{f}$ are assembled and boundary conditions applied, we solve:

$$
\\mathbf{u} = \\mathbf{K}^{-1} \\mathbf{f}
$$

In practice, direct solvers (Cholesky, LU decomposition) or iterative solvers (Conjugate Gradient) are used because:
- $\\mathbf{K}$ is **large and sparse** (most entries are zero)
- $\\mathbf{K}$ is **symmetric and positive definite** (for stable structures)

### Post-Processing

After solving for $\\mathbf{u}$, we can compute:
- **Strains**: $\\boldsymbol{\\epsilon} = \\mathbf{B} \\mathbf{u}$
- **Stresses**: $\\boldsymbol{\\sigma} = \\mathbf{D} \\boldsymbol{\\epsilon}$
- **Reaction forces**: $\\mathbf{f}_{reactions} = \\mathbf{K} \\mathbf{u} - \\mathbf{f}$

---

## Summary

:::quote
Linear FEA reduces complex structural problems to a system of linear equations: $\\mathbf{K}\\mathbf{u} = \\mathbf{f}$. The stiffness matrix encodes geometry, material, and element properties. The force vector represents all loads. The displacement solution gives us the structure's response — and from there, all derived quantities.
:::

The beauty of FEA is that this same mathematical framework extends to heat transfer, fluid flow, electromagnetics, and beyond — always returning to the same fundamental pattern of discretization, assembly, and solution.
  `,
  },

  // Add more posts here
];

export default posts;
