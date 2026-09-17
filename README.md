# 🚀 Industry-Ready Personal Developer Portfolio

A modern, professional, responsive personal portfolio website designed for a **3rd-year B.Tech Information Technology student preparing for software engineering internships and placement drives**.

Built with modern ES6+ JavaScript, CSS Custom Properties, and HTML5 without heavy build tools or framework overhead. Loads instantaneously and can be deployed anywhere with zero setup!

---

## 🌟 Key Features & Structure

1. **Centralized Data Configuration (`js/portfolio-data.js`)**  
   All personal information, CGPA, semester SGPAs, projects, skills, certifications, and social links are managed in one single configuration file. You never need to touch complex HTML or UI code to update your portfolio!

2. **Strict Content Rules & Placeholders**  
   No invented data or fake metrics. All unprovided personal fields use standardized `[YOUR PLACEHOLDER]` tags that can be replaced in minutes.

3. **15 Complete Sections**:
   - **Hero / Home**: Identity tagline, short intro, CTAs (*View Projects*, *View Resume*, *Contact Me*), and quick links for GitHub, LinkedIn, CodeChef, LeetCode, Email.
   - **About Me**: Academic background, current education stage, domain interests, career goals, and authentic student perspective.
   - **Education & Academics**: Degree summary, semester 1–6 SGPAs, 10th & 12th percentages, and an **interactive SVG SGPA/CGPA trend chart**.
   - **Technical Skills**: Organized by categories (*Programming*, *DSA & CS Core*, *Web Dev*, *Backend*, *Databases*, *AI/ML*, *Tools & Emulators*) with status badges (*Proficient*, *Project Used*, *Familiar*, *Learning*) and real-time category filtering.
   - **Featured Projects**: Highlights **Project 1** (*Network Device Monitoring & Predictive Fault Analysis System*) and **Project 2** (*AI Drone Parcel Mapping & Cadastral Vectorization*) + personal projects.
   - **Detailed Project Modals**: 14 structured project fields accessible via "View Details", clearly distinguishing *Team Project* vs *My Personal Contribution*.
   - **Proof of Work Matrix**: Explicitly maps claimed skills (Java, React, Python/ML, FastAPI, GIS, DSA) to tangible code evidence and repositories.
   - **Experience & Activities**: Timeline view covering SIH 2026 (Team Rocket), academic projects, and internship placeholders.
   - **Certifications**: Card grid with filter tabs (*All*, *Technical*, *AI/ML*, *Web*, *Programming*, *Other*).
   - **Achievements**: Hackathon selections, competitive programming stats, and academic ranks.
   - **Evidence-Based Soft Skills**: Replaces generic star ratings with evidence-backed experiences (Communication via GDs/vivas; Teamwork via SIH hackathon team).
   - **Coding & Professional Profiles**: GitHub, LinkedIn, CodeChef, and LeetCode cards with direct profile links.
   - **Resume**: Embedded preview modal and download trigger.
   - **Currently Learning**: Visual roadmap pipeline (Java → DSA → Web Dev → Backend → AI/ML → System Design).
   - **Contact Section**: Contact form with validation and direct email/social links.

4. **UI / UX Features**:
   - **Dark / Light Mode Toggle** with theme memory (`localStorage`).
   - **Sticky Navigation** with ScrollSpy active section highlighting.
   - **Mobile-Responsive Drawer Menu**.
   - **Interactive Data Editor**: Click the floating button *"Edit My Portfolio Data"* on the page to view or copy your JSON structure live!

---

## 🛠️ How to Update Your Portfolio Data

To personalize the website with your actual details, open `js/portfolio-data.js` in any text editor (like VS Code) and update the values:

```javascript
const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Komal Deshmukh", // Replace [YOUR NAME]
    tagline: "B.Tech IT Student | Full-Stack & AI/ML Developer",
    intro: "3rd-Year B.Tech IT Student passionate about building...",
    college: "Your College Name",
    socialLinks: {
      github: "https://github.com/your-username",
      linkedin: "https://linkedin.com/in/your-username",
      codechef: "https://www.codechef.com/users/your-username",
      leetcode: "https://leetcode.com/your-username",
      email: "your.email@example.com"
    }
  },
  academics: {
    cgpa: "8.85 / 10.0",
    semesters: [
      { semester: "Semester 1", sgpa: "8.5", score: 8.5 },
      { semester: "Semester 2", sgpa: "8.7", score: 8.7 },
      // ...
    ]
  }
  // ...
};
```

---

## 🌐 How to Preview & Run Locally

Double-click `index.html` to open it in any web browser (Chrome, Edge, Firefox).

Or if using VS Code:
1. Right-click `index.html`
2. Select **"Open with Live Server"**

---

## 📦 Free One-Click Deployment Options

### 1. GitHub Pages (Recommended)
1. Create a new public repository on GitHub (e.g. `portfolio`).
2. Push your files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. In GitHub Repository settings → **Pages** → Set Source to `main` branch → Click **Save**.
4. Your website will be live at `https://YOUR-USERNAME.github.io/portfolio/`!

### 2. Vercel or Netlify
Drag and drop your `Komal_Portfolio` folder directly onto [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for instant free hosting with automated SSL!

---

## 📄 License
This portfolio template is open-source and free to customize for academic and professional use.
