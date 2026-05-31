export const portfolioConfig = {
  personal: {
    name: "Amrit",
    title: "Python Enthusiast Dev",
    tagline: "Hello, I'm Amrit, a Python enthusiast developer who loves building modern digital solutions. I create reliable, scalable applications that help people and businesses grow and succeed online.",
    email: "amritanshutiwari317@gmail.com",
    location: "N/A",
    avatar: "/src/assets/aegis.png"
  },

  seo: {
    title: "Amrit - Python Enthusiast Dev Portfolio",
    description: "Python enthusiast developer creating modern applications. View my portfolio showcasing recent projects and technical expertise.",
    keywords: ["python developer", "python", "discord.py", "node.js", "automation", "open source"],
    ogImage: "/og-image.png"
  },

  theme: {
    primaryColor: "120 100% 50%",
    accentColor: "0 0% 100%",
    backgroundColor: "0 0% 4%",
    terminalColors: {
      window: "0 0% 12%",
      border: "0 0% 20%",
      header: "0 0% 8%"
    },
    animations: {
      typingSpeed: 50,
      staggerDelay: 0.1,
      transitionDuration: 300,
      hoverScale: 1.05
    }
  },

  navigation: {
    showScrollProgress: true,
    smoothScroll: true,
    sections: ["about", "skills", "projects", "contact"]
  },

  skills: [
    { name: "Python", category: "Language", level: 85 },
    { name: "UI/UX", category: "Design", level: 95 },
    { name: "AI Assisted Web Dev", category: "Frontend", level: 90 },
    { name: "Game Servers", category: "DevOps", level: 90 }
  ],

  projects: [
    {
      name: "Pegasus.host",
      year: "2025",
      description: "Professional hosting platform providing custom development and premium digital solutions for modern businesses and gaming communities.",
      tags: ["Pterodactyl", "Proxmox", "Docker"],
      status: "production",
      featured: true,
      links: {
        github: "https://github.com/XeNo-Dev-T-T",
        live: "https://strelixcloud.com"
      }
    }
  ],

  social: {
    github: "https://github.com/XeNo-Dev-T-T",
    linkedin: "https://linkedin.com/in/aegis",
    twitter: "https://twitter.com/aegis",
    youtube: "https://youtube.com/@aerox-devs?si=PfSlKrjWD_pV2SXb",
    email: "mailto:amritanshutiwari317@gmail.com"
  },

  content: {
    about: {
      title: "About Me",
      paragraphs: [
        "I am a dedicated bot developer with expertise in creating efficient, user-friendly applications. I focus on delivering high-quality solutions that meet business requirements and exceed user expectations.",
        "I stay current with industry trends and best practices, continuously expanding my technical skills to provide the most effective solutions for each project."
      ],
      availability: "Currently available for new projects"
    },
    contact: {
      title: "Get In Touch",
      description: "I am always interested in discussing new opportunities and projects. Feel free to reach out to explore how we can work together.",
      cta: "Thank you for visiting my portfolio!"
    }
  },

  features: {
    particles: true,
    matrixRain: true,
    soundEffects: false,
    darkMode: true,
    analytics: false,
    showCodeButtons: false
  }
};
