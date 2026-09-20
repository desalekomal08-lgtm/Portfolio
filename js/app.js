/**
 * MAIN APPLICATION MODULE (app.js)
 * Controls dynamic UI rendering from PORTFOLIO_DATA, theme toggling, scroll-reveal popups, and filters.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  renderHeroSection();
  renderAboutSection();
  renderAcademicsSection();
  renderSkillsSection();
  renderProjectsSection();
  renderExperienceSection();
  renderAchievementsSection();
  renderProfilesSection();
  renderLearningSection();
  renderContactSection();
  renderFooter();
  initScrollSpy();
  initScrollReveal();
  initContactForm();
});

/* --- 1. THEME TOGGLE --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('portfolio_theme') || 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    updateThemeIcon(themeToggleBtn, currentTheme);
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio_theme', newTheme);
      updateThemeIcon(themeToggleBtn, newTheme);
    });
  }
}

function updateThemeIcon(btn, theme) {
  btn.innerHTML = theme === 'dark' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
}

/* --- 2. MOBILE NAVIGATION --- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* --- 3. HERO SECTION --- */
function renderHeroSection() {
  const p = PORTFOLIO_DATA.personalInfo;
  
  const nameEl = document.getElementById('hero-name');
  if (nameEl) nameEl.innerText = p.name;

  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.innerText = p.tagline;

  const introEl = document.getElementById('hero-intro');
  if (introEl) introEl.innerText = p.intro;

  const statusEl = document.getElementById('hero-status');
  if (statusEl) statusEl.innerText = p.currentStatus;

  // Key Tech Chips
  const techContainer = document.getElementById('hero-tech-chips');
  if (techContainer && p.keyTechAreas) {
    techContainer.innerHTML = p.keyTechAreas
      .map(area => `<span class="tech-chip">${area}</span>`)
      .join('');
  }

  // Social Links
  const socialContainer = document.getElementById('hero-social-links');
  if (socialContainer && p.socialLinks) {
    socialContainer.innerHTML = `
      <a href="${p.socialLinks.linkedin}" target="_blank" class="social-icon-link" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      </a>
      <a href="${p.socialLinks.github}" target="_blank" class="social-icon-link" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </a>
      <a href="${p.socialLinks.leetcode}" target="_blank" class="social-icon-link" aria-label="LeetCode">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line></svg>
      </a>
      <a href="${p.socialLinks.codechef}" target="_blank" class="social-icon-link" aria-label="CodeChef">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </a>
      <a href="mailto:${p.socialLinks.email}" class="social-icon-link" aria-label="Email">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>
    `;
  }
}

/* --- 4. ABOUT SECTION --- */
function renderAboutSection() {
  const a = PORTFOLIO_DATA.about;
  const container = document.getElementById('about-content');
  if (!container || !a) return;

  container.innerHTML = `
    <div class="about-grid">
      <div class="card reveal-on-scroll">
        <h3 class="about-card-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
          Academic Identity & Foundation
        </h3>
        ${a.academicBackground ? `<p style="margin-bottom: 0.85rem; line-height: 1.65;">${a.academicBackground}</p>` : ''}
        ${a.currentStage ? `<p style="line-height: 1.65; color: var(--text-secondary);">${a.currentStage}</p>` : ''}
        ${a.philosophy ? `<p style="line-height: 1.65; color: var(--text-secondary); margin-top: 0.85rem;">${a.philosophy}</p>` : ''}
      </div>

      <div class="card reveal-on-scroll">
        <h3 class="about-card-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Focus & Career Direction
        </h3>
        <p style="margin-bottom: 1.1rem; line-height: 1.65;"><strong>Career Target:</strong> ${a.careerDirection}</p>
        
        <h4 style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.75rem; font-weight: 700;">Technical Interests:</h4>
        <ul class="about-list" style="margin-bottom: 0.5rem;">
          ${a.technicalInterests.map(interest => `
            <li class="about-list-item">
              <span class="bullet-icon">▸</span>
              <span>${interest}</span>
            </li>
          `).join('')}
        </ul>
        
        ${a.whatIEnjoy ? `<p style="line-height: 1.65; font-size: 0.93rem; margin-top: 0.85rem;">${a.whatIEnjoy}</p>` : ''}
      </div>
    </div>
  `;
}

/* --- 5. ACADEMICS SECTION --- */
function renderAcademicsSection() {
  const ac = PORTFOLIO_DATA.academics;
  const container = document.getElementById('academics-content');
  if (!container || !ac) return;

  container.innerHTML = `
    <div class="academics-grid">
      <div class="card btech-summary-card reveal-on-scroll">
        <div>
          <span class="academic-degree-badge">${ac.currentSemester}</span>
          <h3 class="academic-degree-title">${ac.degree}</h3>
          <p style="color: var(--accent-primary); font-weight: 600; margin-bottom: 1.25rem;">${ac.college}</p>
          
          <div class="academic-stat-row">
            <span class="academic-stat-label">10th Percentage:</span>
            <span class="academic-stat-val" style="color: var(--accent-secondary); font-size: 1.05rem;">${ac.schooling.tenthPercentage} (${ac.schooling.tenthBoard})</span>
          </div>
          <div class="academic-stat-row">
            <span class="academic-stat-label">12th Percentage:</span>
            <span class="academic-stat-val" style="color: var(--accent-secondary); font-size: 1.05rem;">${ac.schooling.twelfthPercentage} (${ac.schooling.twelfthBoard})</span>
          </div>
          <div class="academic-stat-row">
            <span class="academic-stat-label">Batch Duration:</span>
            <span class="academic-stat-val">${ac.targetYear}</span>
          </div>
        </div>

        <div style="margin-top: 1.5rem; font-size: 0.825rem; color: var(--text-muted); text-align: center;">
          R. C. Patel Institute of Technology Academic Record
        </div>
      </div>

      <div class="card chart-card reveal-on-scroll">
        <div class="chart-header">
          <div>
            <h3 style="font-size: 1.25rem;">Semester SGPA Trend</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Completed Semesters (Sem 1 to Sem 4)</p>
          </div>
          <span class="badge badge-proficient">Academic Record</span>
        </div>

        <div id="academic-chart-container" class="chart-container"></div>

        <div class="sgpa-grid">
          ${ac.semesters.map(sem => `
            <div class="sgpa-box ${sem.status === 'Completed' ? '' : 'in-progress-box'}">
              <div class="sgpa-sem">${sem.semester}</div>
              <div class="sgpa-score" style="${sem.status === 'Completed' ? '' : 'font-size:0.9rem; color:var(--text-muted);'}">${sem.sgpa}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  if (window.renderAcademicChart) {
    window.renderAcademicChart(ac.semesters);
  }
}

/* --- 6. SKILLS SECTION --- */
function renderSkillsSection() {
  const skillsData = PORTFOLIO_DATA.skills;
  const container = document.getElementById('skills-content');
  const tabsContainer = document.getElementById('skills-filter-tabs');

  if (!container || !skillsData) return;

  const categories = ['Technical Skills', 'Soft Skills & Traits'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map((cat, idx) => `
      <button class="filter-tab ${idx === 0 ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderSkillsCategoryView(tab.getAttribute('data-category'));
      });
    });
  }

  renderSkillsCategoryView('Technical Skills');
}

function renderSkillsCategoryView(category) {
  const container = document.getElementById('skills-content');
  if (!container) return;

  if (category === 'Technical Skills') {
    container.innerHTML = `
      <div class="skills-categories-grid">
        ${PORTFOLIO_DATA.skills.technical.map(cat => `
          <div class="card reveal-on-scroll">
            <h3 class="skill-category-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              ${cat.category}
            </h3>
            <p class="skill-category-desc">${cat.description}</p>
            <div class="skill-items-list">
              ${cat.items.map(item => `
                <div class="skill-pill">
                  <span>${item.name}</span>
                  <span class="badge badge-${item.status.toLowerCase().replace(/\s+/g, '-')}">${item.status}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="soft-skills-grid">
        ${PORTFOLIO_DATA.skills.softSkills.map(s => `
          <div class="card reveal-on-scroll">
            <div class="soft-skill-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 class="soft-skill-name">${s.name}</h3>
            <div class="soft-skill-context">${s.context}</div>
            <p class="soft-skill-evidence">${s.description}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  initScrollReveal();
}

/* --- 7. FEATURED PROJECTS --- */
function renderProjectsSection() {
  const projects = PORTFOLIO_DATA.projects;
  const container = document.getElementById('projects-content');
  if (!container || !projects) return;

  container.innerHTML = `
    <div class="projects-grid">
      ${projects.map(proj => `
        <div class="card project-card reveal-on-scroll">
          <div>
            <div class="project-top-bar">
              <span class="badge badge-project">${proj.status}</span>
              <span class="badge tag-team">${proj.teamType}</span>
            </div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.shortDescription}</p>

            <div class="project-contribution-note">
              <strong>Contribution:</strong> ${proj.contribution}
            </div>

            <div class="project-tech-stack">
              ${proj.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="project-card-footer">
            <div style="display: flex; gap: 0.5rem;">
              <a href="${proj.githubUrl}" target="_blank" class="btn btn-outline btn-sm" aria-label="GitHub">
                GitHub
              </a>
              <a href="${proj.demoUrl}" target="_blank" class="btn btn-outline btn-sm" aria-label="Live Demo">
                Demo
              </a>
            </div>
            <button onclick="window.globalModal.openProjectDetails(PORTFOLIO_DATA.projects.find(p => p.id === '${proj.id}'))" class="btn btn-primary btn-sm">
              View Details
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* --- 8. EXPERIENCE SECTION (Removed skill badges) --- */
function renderExperienceSection() {
  const exps = PORTFOLIO_DATA.experience;
  const container = document.getElementById('experience-content');
  if (!container || !exps) return;

  container.innerHTML = `
    <div class="timeline">
      ${exps.map(exp => `
        <div class="timeline-item reveal-on-scroll">
          <div class="timeline-node"></div>
          <div class="card timeline-card">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">${exp.role}</h3>
                <div class="timeline-org">${exp.organization} (${exp.team})</div>
              </div>
              <span class="timeline-date">${exp.date}</span>
            </div>
            ${exp.projectTitle ? `<h4 style="font-size: 0.95rem; color: var(--accent-secondary); margin-bottom: 0.5rem;">${exp.projectTitle}</h4>` : ''}
            <p class="timeline-desc">${exp.description}</p>
            
            ${exp.responsibilities ? `
              <ul class="timeline-ul">
                ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

/* --- 9. ACHIEVEMENTS SECTION --- */
function renderAchievementsSection() {
  const achs = PORTFOLIO_DATA.achievements;
  const container = document.getElementById('achievements-content');
  if (!container || !achs) return;

  container.innerHTML = `
    <div class="achievements-grid">
      ${achs.map(a => `
        <div class="card reveal-on-scroll">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
            <span class="badge badge-proficient">${a.category}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${a.date}</span>
          </div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${a.title}</h3>
          <p style="font-size: 0.85rem; color: var(--accent-secondary); margin-bottom: 0.75rem;">${a.organization}</p>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">${a.description}</p>
          <a href="${a.evidenceUrl}" target="_blank" class="btn btn-outline btn-sm" style="width: 100%;">
            View Link / Evidence
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

/* --- 10. PROFILES SECTION --- */
function renderProfilesSection() {
  const profs = PORTFOLIO_DATA.codingProfiles;
  const container = document.getElementById('profiles-content');
  if (!container || !profs) return;

  container.innerHTML = `
    <div class="profiles-grid">
      ${profs.map(p => `
        <div class="card reveal-on-scroll">
          <div class="profile-platform-header">
            <h3 class="profile-platform-name">${p.platform}</h3>
          </div>
          <span class="badge badge-project">${p.badge}</span>
          <p style="font-size: 0.9rem; margin-top: 0.75rem; color: var(--text-secondary);">${p.description}</p>
          
          <div class="profile-stats-list">
            ${p.highlights.map(h => `<div class="profile-stat-item">▸ ${h}</div>`).join('')}
          </div>

          <a href="${p.url}" target="_blank" class="btn btn-primary btn-sm" style="width: 100%;">
            ${p.buttonText}
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

/* --- 11. LEARNING SECTION --- */
function renderLearningSection() {
  const l = PORTFOLIO_DATA.currentlyLearning;
  const container = document.getElementById('learning-content');
  if (!container || !l) return;

  container.innerHTML = `
    <div class="learning-pipeline">
      ${l.pipeline.map(step => `
        <div class="card learning-step-card reveal-on-scroll">
          <div class="learning-step-num">${step.step}</div>
          <h3 class="learning-step-title">${step.title}</h3>
          <div class="learning-step-status">${step.status}</div>
          <p class="learning-step-desc">${step.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

/* --- 12. CONTACT SECTION & FOOTER --- */
function renderContactSection() {
  const c = PORTFOLIO_DATA.contact;
  const container = document.getElementById('contact-content');
  if (!container || !c) return;

  container.innerHTML = `
    <div class="contact-grid">
      <div class="card contact-info-card reveal-on-scroll">
        <div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.75rem;">Let's Connect</h3>
          <p style="color: var(--text-secondary); line-height: 1.6;">${c.note}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <div class="contact-item">
            <div class="contact-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">LinkedIn</div>
              <a href="${c.linkedin}" target="_blank" style="font-weight: 600;">LinkedIn Profile</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">Email</div>
              <a href="mailto:${c.email}" style="font-weight: 600;">${c.email}</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">GitHub</div>
              <a href="${c.github}" target="_blank" style="font-weight: 600;">GitHub Repositories</a>
            </div>
          </div>
        </div>
      </div>

      <div class="card reveal-on-scroll">
        <form id="contact-form">
          <div class="form-group">
            <label class="form-label" for="contact-name">Your Name</label>
            <input type="text" id="contact-name" class="form-input" placeholder="e.g. Recruiter / Developer" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-email">Your Email</label>
            <input type="email" id="contact-email" class="form-input" placeholder="name@company.com" required />
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-message">Message</label>
            <textarea id="contact-message" class="form-textarea" placeholder="Hello Komal, I'd like to discuss internship opportunities..." required></textarea>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%;">
            Send Message
          </button>
          
          <div id="form-success" class="form-success-message">
            Thank you! Your message has been sent. I will respond to your email promptly.
          </div>
        </form>
      </div>
    </div>
  `;
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMsg = document.getElementById('form-success');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending Message...';
    }

    const recipientEmail = (PORTFOLIO_DATA.contact && PORTFOLIO_DATA.contact.email) || 'desalekomal08@gmail.com';
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Message from ${name}`
        })
      });

      if (response.ok) {
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.className = 'form-success-message';
          successMsg.style.backgroundColor = 'var(--soft-accent)';
          successMsg.style.color = 'var(--accent-primary)';
          successMsg.style.border = '1px solid var(--border-color)';
          successMsg.style.padding = '1rem';
          successMsg.style.borderRadius = '8px';
          successMsg.style.marginTop = '1rem';
          successMsg.innerHTML = `
            <strong>✅ Message Sent Successfully!</strong><br>
            Your message has been delivered to <strong>${recipientEmail}</strong>.<br>
            <div style="margin-top: 0.5rem; font-size: 0.85rem;">
              Or open directly in Gmail: <a href="${gmailUrl}" target="_blank" style="font-weight: 700; text-decoration: underline; color: var(--accent-primary);">Send via Gmail Web</a>
            </div>
          `;
        }
        form.reset();
      } else {
        throw new Error('API delivery failed');
      }
    } catch (err) {
      window.open(gmailUrl, '_blank') || (window.location.href = mailtoUrl);
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.className = 'form-success-message';
        successMsg.style.backgroundColor = 'var(--soft-accent)';
        successMsg.style.color = 'var(--accent-primary)';
        successMsg.style.border = '1px solid var(--border-color)';
        successMsg.style.padding = '1rem';
        successMsg.style.borderRadius = '8px';
        successMsg.style.marginTop = '1rem';
        successMsg.innerHTML = `
          <strong>📧 Opening Email Client...</strong><br>
          Prepared message for <strong>${recipientEmail}</strong>.<br>
          <a href="${gmailUrl}" target="_blank" class="btn btn-primary btn-sm" style="display: inline-block; margin-top: 0.5rem; text-decoration: none;">Click Here to Send via Gmail</a>
        `;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send Message';
      }
    }
  });
}

function renderFooter() {
  const p = PORTFOLIO_DATA.personalInfo;
  const nameEl = document.getElementById('footer-name');
  if (nameEl) nameEl.innerText = p.name;
  
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.innerText = new Date().getFullYear();
}

/* --- 13. SCROLLSPY & SCROLL REVEAL OBSERVER --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 120;
      const sectionHeight = sec.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
