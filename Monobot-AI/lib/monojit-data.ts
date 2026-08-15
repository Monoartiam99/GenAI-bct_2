export const monojitData = {
  name: "Monojit Nandy",
  age: 28,
  email: "monojit@example.com",
  phone: "+91-XXXXXXXXXX",
  location: "India",
  dob: "January 15, 1996",
  address: "India",
  summary: "Full-stack developer passionate about building scalable applications and exploring new technologies.",
  
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Indian Institute of Technology",
      year: "2018",
      details: "CGPA: 8.2/10"
    },
    {
      degree: "Intermediate (12th)",
      institution: "St. Xavier's School",
      year: "2014",
      details: "Percentage: 88%"
    }
  ],
  
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
    backend: ["Node.js", "Express.js", "Django", "Flask", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Linux", "VS Code"]
  },
  
  experience: [
    {
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "2021 - Present",
      description: "Led development of microservices architecture, improved performance by 40%, mentored junior developers"
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Innovations Ltd.",
      duration: "2019 - 2021",
      description: "Developed e-commerce platform, implemented real-time features, optimized database queries"
    },
    {
      role: "Junior Developer",
      company: "StartUp Hub",
      duration: "2018 - 2019",
      description: "Built responsive web applications, fixed bugs, learned modern tech stack"
    }
  ],
  
  projects: [
    {
      name: "AI-Powered Chatbot Platform",
      description: "Developed a conversational AI platform using GPT and React. Features include real-time chat, user analytics, and custom training.",
      technologies: ["Next.js", "Python", "PostgreSQL", "OpenAI API"],
      year: 2023
    },
    {
      name: "E-Commerce Dashboard",
      description: "Built comprehensive admin dashboard with real-time inventory management and analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      year: 2022
    },
    {
      name: "Social Media Analytics Tool",
      description: "Created tool to track and analyze social media metrics across multiple platforms.",
      technologies: ["Next.js", "AWS Lambda", "PostgreSQL", "D3.js"],
      year: 2021
    }
  ],
  
  certifications: [
    { name: "AWS Certified Solutions Architect", year: 2022 },
    { name: "MongoDB Certified Developer", year: 2021 },
    { name: "Google Cloud Certified Associate", year: 2020 }
  ],
  
  languages: ["English", "Hindi", "Bengali"],
  
  hobbies: ["Reading tech blogs", "Contributing to open source", "Playing chess", "Photography", "Hiking"],
  
  careerObjective: "To leverage my full-stack development expertise and create innovative solutions that impact millions of users while continuing to grow and learn new technologies.",
  
  socialMedia: {
    linkedin: "linkedin.com/in/monojit-nandy",
    github: "github.com/monojit-nandy",
    twitter: "@monojit_dev",
    portfolio: "monojitnandy.dev"
  }
};

export type PersonalData = typeof monojitData;
