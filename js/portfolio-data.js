/**
 * PORTFOLIO DATA CONFIGURATION
 * Single Source of Truth for Komal Desale's Personal Information, Academics, Skills, Projects, and Social Links.
 */

const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Komal Desale",
    tagline: "B.Tech IT Student (IT '28) | Developer & Problem Solver",
    intro: "B.Tech Information Technology student at R. C. Patel Institute of Technology, Shirpur passionate about software engineering, web applications, network systems, and algorithmic problem solving. Actively preparing for tech internships and placement opportunities.",
    currentStatus: "B.Tech IT Student (IT '28) • RCPIT Shirpur",
    degree: "B.Tech in Information Technology",
    college: "R. C. Patel Institute of Technology, Shirpur",
    location: "Shirpur, Maharashtra, India",
    resumeUrl: "#", // Replace with path to your resume.pdf or Google Drive link
    keyTechAreas: [
      "C",
      "Java",
      "Python",
      "SQL"
    ],
    socialLinks: {
      github: "[YOUR GITHUB URL]",
      linkedin: "https://www.linkedin.com/in/komal-desale-96b97b428",
      codechef: "[YOUR CODECHEF URL]",
      leetcode: "[YOUR LEETCODE URL]",
      email: "desalekomal08@gmail.com"
    }
  },

  about: {
    academicBackground: "3rd-year B.Tech IT student at RCPIT Shirpur, building a strong foundation in Data Structures, Algorithms, and Software Engineering through hands-on project work.",
    currentStage: "Focused on becoming placement-ready for SDE internships and entry-level software development roles.",
    philosophy: "",
    careerDirection: "Software Engineering, SDE Internships, and Backend Development.",
    technicalInterests: [
      "Software Development & Web Applications",
      "Backend Development & RESTful APIs",
      "Data Structures & Problem Solving",
      "AI/ML Applications & Intelligent Systems"
    ],
    whatIEnjoy: ""
  },

  academics: {
    degree: "B.Tech in Information Technology",
    college: "R. C. Patel Institute of Technology, Shirpur",
    currentSemester: "Semester 5 (IT '28)",
    cgpa: "6.22 (Cumulative Sem 1–4)",
    targetYear: "2024 – 2028",
    
    // Semester SGPA Performance
    semesters: [
      { semester: "Semester 1", sgpa: "6.55", score: 6.55, status: "Completed" },
      { semester: "Semester 2", sgpa: "6.00", score: 6.00, status: "Completed" },
      { semester: "Semester 3", sgpa: "5.15", score: 5.15, status: "Completed" },
      { semester: "Semester 4", sgpa: "7.19", score: 7.19, status: "Completed" },
      { semester: "Semester 5", sgpa: "In Progress", score: null, status: "Current" },
      { semester: "Semester 6", sgpa: "Enrolled", score: null, status: "Upcoming" }
    ],

    schooling: {
      tenthPercentage: "88.20%",
      tenthBoard: "State Board",
      twelfthPercentage: "77.83%",
      twelfthBoard: "State Board"
    }
  },

  // Technical Skills
  skills: {
    technical: [
      {
        category: "Programming Languages",
        description: "Core programming languages for application logic & problem solving",
        items: [
          { name: "C", status: "Proficient" },
          { name: "Java", status: "Familiar" },
          { name: "Python", status: "Familiar" },
          { name: "SQL", status: "Well-Known" }
        ]
      },
      {
        category: "DSA & CS Core Fundamentals",
        description: "Core computer science principles required for technical foundation",
        items: [
          { name: "Data Structures & Algorithms", status: "In Progress" },
          { name: "Database Management Systems (DBMS)", status: "Well-Known" },
          { name: "Computer Networks", status: "Well-Known" },
          { name: "FLAT", status: "Proficient" },
          { name: "Operating Systems", status: "Proficient" },
          { name: "DAA", status: "Proficient" }
        ]
      },
      {
        category: "Web Development",
        description: "Frontend and backend web development track",
        items: [
          { name: "Web Development", status: "In Progress" }
        ]
      }
    ],
    softSkills: [
      {
        name: "Team Work",
        context: "Hackathons & Group Projects",
        description: "Collaborating smoothly in team environments, sharing responsibilities, and communicating effectively across project tasks.",
        badge: "Core Value"
      },
      {
        name: "Leadership",
        context: "Project Ownership & Coordination",
        description: "Taking initiative in project planning, assigning technical roles, and driving modules toward timely completion.",
        badge: "Initiative"
      },
      {
        name: "Public Speaking",
        context: "Technical Presentations & Vivas",
        description: "Articulating technical project workflows, presenting slide decks clearly, and explaining architectural choices during project vivas.",
        badge: "Communication"
      },
      {
        name: "Time Management",
        context: "Academics & Skill Building",
        description: "Balancing semester academics, project deadlines, hackathon sprints, and competitive coding practice efficiently.",
        badge: "Efficiency"
      },
      {
        name: "Problem Solving",
        context: "Algorithms & System Logic",
        description: "Breaking complex technical problems into smaller logical steps and systematically resolving bugs.",
        badge: "Analytical"
      },
      {
        name: "Adaptability",
        context: "New Tech Stacks & Tools",
        description: "Quickly learning new frameworks, API libraries, and development tools according to project needs.",
        badge: "Growth"
      }
    ]
  },

  // Featured Projects (Only Network Device Monitoring System)
  projects: [
    {
      id: "project-1",
      title: "Network Device Monitoring & Predictive Fault Analysis System",
      shortDescription: "A hybrid AI-based network management system designed to monitor routers, switches, and servers using parameters such as CPU utilization, memory usage, bandwidth, latency, packet loss, and interface errors.",
      technologies: ["React", "FastAPI", "Python", "PostgreSQL", "Scikit-learn", "Pandas", "NumPy", "GNS3 / EVE-NG"],
      status: "In Progress / Prototype",
      contribution: "Telemetry Collector, Backend REST APIs & ML Prediction Model",
      teamType: "Team Project",
      githubUrl: "[YOUR GITHUB REPO URL]",
      demoUrl: "[YOUR LIVE DEMO URL]",
      details: {
        overview: "Comprehensive network observability platform integrating real-time telemetry streaming with machine learning fault prediction algorithms.",
        problemStatement: "Traditional network monitoring tools trigger alerts only after downtime occurs, leading to unexpected service disruptions.",
        objective: "Build an automated telemetry pipeline to predict router resource saturation and link faults before service degradation impacts users.",
        proposedSolution: "Developed a Python daemon to ingest GNS3 router metrics, trained a Scikit-learn predictive classifier to flag anomaly trends, and served live alerts via FastAPI to a dynamic React frontend.",
        systemArchitecture: "Router Telemetry Emulation (GNS3) → Telemetry Daemon → Feature Extraction → Scikit-learn Model → FastAPI REST Endpoints → PostgreSQL → React Monitoring Dashboard",
        keyFeatures: [
          "Real-time CPU, memory, and bandwidth utilization telemetry dashboard",
          "ML-driven predictive alert flags for incoming link congestion & device failure",
          "Interface packet loss and CRC error rate visualization",
          "Filterable alert logs with severity tags"
        ],
        myContribution: "Designed the telemetry daemon script, implemented asynchronous FastAPI backend routes, trained the predictive model using network metrics, and created metric API contracts.",
        screenshots: ["[SYSTEM ARCHITECTURE FLOW]"],
        currentProgress: "Prototype telemetry collector and prediction engine complete.",
        challenges: "Handling missing telemetry frames during simulated link disconnects and keeping API latency under 50ms.",
        whatILearned: "Mastered asynchronous Python endpoints in FastAPI, time-series feature engineering in Pandas, and network emulation setups in GNS3.",
        github: "[YOUR GITHUB REPO URL]",
        demo: "[YOUR LIVE DEMO URL]"
      }
    }
  ],

  // Experience & Hackathons
  experience: [
    {
      id: "exp-interhack-jalgaon",
      organization: "InterHack, Jalgaon",
      role: "Hackathon Participant",
      team: "College Team",
      date: "2025 - 2026",
      category: "Hackathon",
      projectTitle: "Secured 3rd Runner-Up",
      description: "Participated in InterHack Jalgaon and secured 3rd Runner-Up position for innovative technical solution design.",
      responsibilities: [
        "Collaborated on problem analysis and algorithm development",
        "Assisted in technical presentation and live project pitch"
      ],
      evidenceUrl: "[EVIDENCE LINK]"
    },
    {
      id: "exp-codeclash-rait",
      organization: "CodeClash by Technovate at RAIT, Mumbai",
      role: "Hackathon Participant",
      team: "Competitor",
      date: "2025 - 2026",
      category: "Hackathon",
      projectTitle: "CodeClash Competitive Coding Event",
      description: "Participated in CodeClash organized by Technovate at RAIT, Mumbai, solving competitive coding and logic challenges.",
      responsibilities: [
        "Solved time-constrained algorithmic coding challenges",
        "Applied DSA problem-solving techniques under contest environment"
      ],
      evidenceUrl: "[EVIDENCE LINK]"
    },
    {
      id: "exp-sih-2026",
      organization: "Smart India Hackathon 2026",
      role: "Hackathon Team Member",
      team: "Team Rocket",
      date: "2026",
      category: "Hackathon",
      projectTitle: "AI-Based Automated Urban Parcel Mapping & Cadastral Feature Extraction",
      description: "Participating in SIH 2026 developing an AI and Web-GIS drone mapping platform for automated cadastral survey feature extraction.",
      responsibilities: [
        "Constructed contrast normalization and contour edge detection scripts using OpenCV",
        "Collaborated on vectorizing segmented building and road masks into spatial vector layers"
      ],
      evidenceUrl: "[YOUR PROJECT / SIH EVIDENCE LINK]"
    }
  ],

  // Achievements (Only InterHack kept)
  achievements: [
    {
      id: "ach-interhack",
      title: "InterHack, Jalgaon - 3rd Runner-Up",
      organization: "InterHack, Jalgaon",
      date: "2025 - 2026",
      category: "Hackathon",
      description: "Secured 3rd Runner-Up position in InterHack hackathon event at Jalgaon.",
      evidenceUrl: "https://www.linkedin.com/in/komal-desale-96b97b428"
    }
  ],

  codingProfiles: [
    {
      platform: "LinkedIn",
      handle: "komal-desale-96b97b428",
      url: "https://www.linkedin.com/in/komal-desale-96b97b428",
      badge: "Professional Profile",
      description: "Connect with me regarding software engineering internships, technical opportunities, and career networking.",
      highlights: [
        "Status: B.Tech IT Student (IT '28)",
        "College: RCPIT, Shirpur",
        "Open for SDE / IT Internships"
      ],
      buttonText: "Connect on LinkedIn",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      handle: "[YOUR GITHUB USERNAME]",
      url: "[YOUR GITHUB URL]",
      badge: "Version Control & Projects",
      description: "Explored repositories, open-source commits, backend API scripts, and network telemetry utilities.",
      highlights: [
        "Public Repositories: [XX]",
        "Primary Stack: C, Java, Python, SQL",
        "Active GitHub Profile"
      ],
      buttonText: "Visit GitHub Profile",
      icon: "github"
    },
    {
      platform: "CodeChef",
      handle: "[YOUR CODECHEF USERNAME]",
      url: "[YOUR CODECHEF URL]",
      badge: "Competitive Programming",
      description: "Participant in long challenges, cook-offs, and rated competitive programming contests.",
      highlights: [
        "Rating: [RATING / XX]",
        "Star Division: [X Star]",
        "Contests Attended: [XX]"
      ],
      buttonText: "View CodeChef Profile",
      icon: "code"
    },
    {
      platform: "LeetCode",
      handle: "[YOUR LEETCODE USERNAME]",
      url: "[YOUR LEETCODE URL]",
      badge: "DSA & Problem Solving",
      description: "Algorithmic practice tracking core Computer Science concepts for technical software engineering interviews.",
      highlights: [
        "Problems Solved: [XX]+",
        "Topic Coverage: Arrays, Trees, Graphs, DP",
        "Consistent Practice Log"
      ],
      buttonText: "View LeetCode Profile",
      icon: "terminal"
    }
  ],

  currentlyLearning: {
    title: "Current Learning & Skill Roadmap",
    subtitle: "Demonstrating continuous self-improvement without exaggerating expertise",
    pipeline: [
      { step: "1", title: "C & Java Basics", status: "Completed Base", desc: "Syntax, Classes, OOP, Exception Handling" },
      { step: "2", title: "DSA Practice", status: "In Progress", desc: "Arrays, LinkedList, Trees, Graphs, Dynamic Programming" },
      { step: "3", title: "Web Development", status: "In Progress", desc: "HTML5, CSS3, JavaScript ES6+ Fundamentals" },
      { step: "4", title: "DBMS & SQL", status: "Well-Known", desc: "Relational Queries, Normalization, Database Design" },
      { step: "5", title: "Computer Networks", status: "Well-Known", desc: "OSI Model, TCP/IP, Telemetry & Socket Logic" },
      { step: "6", title: "System Design Basics", status: "Next Goal", desc: "Distributed concepts, caching, indexing fundamentals" }
    ]
  },

  contact: {
    email: "desalekomal08@gmail.com",
    linkedin: "https://www.linkedin.com/in/komal-desale-96b97b428",
    github: "[YOUR GITHUB URL]",
    note: "Feel free to reach out for internship opportunities, project collaborations, or technical networking!"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
