/**
 * MODAL MANAGER (modal.js)
 * Manages modal dialog triggers, accessibility traps, overlay backdrops, and content injection.
 */

class ModalManager {
  constructor() {
    this.overlay = document.getElementById('global-modal-overlay');
    this.container = document.getElementById('global-modal-container');
    this.header = document.getElementById('global-modal-header');
    this.body = document.getElementById('global-modal-body');
    this.closeBtn = document.getElementById('global-modal-close');

    this.initEvents();
  }

  initEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.close();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.overlay && this.overlay.classList.contains('active');
  }

  open(title, htmlContent) {
    if (!this.overlay || !this.body) return;

    document.getElementById('modal-title-text').innerText = title;
    this.body.innerHTML = htmlContent;

    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body background scrolling
  }

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Open Detailed Project Modal (Section 6 Requirement)
   */
  openProjectDetails(project) {
    const details = project.details || {};
    
    const html = `
      <div class="project-modal-content">
        <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem;">
          <span class="badge badge-project">${project.status || 'Active Project'}</span>
          <span class="badge tag-team">${project.teamType || 'Team Project'}</span>
        </div>

        <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-secondary); margin-bottom: 1.5rem;">
          ${project.shortDescription}
        </p>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">1. Project Overview</h4>
          <p>${details.overview || project.shortDescription}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">2. Problem Statement</h4>
          <p>${details.problemStatement || 'Problem description pending.'}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">3. Objective</h4>
          <p>${details.objective || 'Objective statement pending.'}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">4. Proposed Solution</h4>
          <p>${details.proposedSolution || 'Solution details pending.'}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">5. System Architecture & Flow</h4>
          <div style="background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-secondary);">
            ${details.systemArchitecture || 'Architecture diagram flow pending.'}
          </div>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">6. Key Features</h4>
          <ul style="padding-left: 1.2rem; list-style: disc; color: var(--text-secondary);">
            ${(details.keyFeatures || []).map(f => `<li style="margin-bottom: 0.35rem;">${f}</li>`).join('')}
          </ul>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">7. Technology Stack</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${(project.technologies || []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        <div class="modal-detail-section" style="background-color: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-primary);">
          <h4 class="modal-section-h4" style="color: var(--accent-primary);">8. My Personal Contribution (${project.teamType})</h4>
          <p style="color: var(--text-primary); font-weight: 500;">${details.myContribution || project.contribution}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">9. Current Progress & Results</h4>
          <p>${details.currentProgress || 'Implementation in active development.'}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">10. Technical Challenges & Solutions</h4>
          <p>${details.challenges || 'Challenges documented during sprint reviews.'}</p>
        </div>

        <div class="modal-detail-section">
          <h4 class="modal-section-h4">11. What I Learned</h4>
          <p>${details.whatILearned || 'Key technical insights and practical takeaways.'}</p>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
          <a href="${project.githubUrl}" target="_blank" class="btn btn-outline btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            View GitHub Repository
          </a>
          <a href="${project.demoUrl}" target="_blank" class="btn btn-primary btn-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            View Live Demo
          </a>
        </div>
      </div>
    `;

    this.open(project.title, html);
  }

  /**
   * Open Resume Preview Modal (Section 13 Requirement)
   */
  openResumePreview(resumeUrl, name) {
    const html = `
      <div style="text-align: center; padding: 1rem 0;">
        <div style="background-color: var(--bg-secondary); border: 1px dashed var(--border-color); border-radius: var(--radius-lg); padding: 3rem 1.5rem; margin-bottom: 1.5rem;">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" style="margin-bottom: 1rem;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">Resume Document Preview</h3>
          <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 1.5rem auto;">
            Official Technical Resume of ${name}. Formatted for SDE Internships, Campus Placements, & Application Tracking Systems (ATS).
          </p>
          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="${resumeUrl}" target="_blank" class="btn btn-primary">
              Download PDF Resume
            </a>
            <button onclick="window.globalModal.close()" class="btn btn-outline">
              Close Preview
            </button>
          </div>
        </div>
      </div>
    `;

    this.open("Resume Preview - " + name, html);
  }

  /**
   * Open JSON Data Configurator Modal (Easy customization feature)
   */
  openDataConfigurator() {
    const jsonStr = JSON.stringify(PORTFOLIO_DATA, null, 2);

    const html = `
      <div>
        <p style="color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.925rem;">
          This portfolio is powered by a single centralized configuration file (<code>js/portfolio-data.js</code>).
          Copy your updated JSON structure below to easily update your portfolio!
        </p>
        <textarea id="json-config-area" style="width: 100%; height: 340px; background-color: var(--bg-input); color: var(--text-primary); font-family: var(--font-mono); font-size: 0.8rem; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">${jsonStr}</textarea>
        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem;">
          <button onclick="navigator.clipboard.writeText(document.getElementById('json-config-area').value); alert('Data JSON copied to clipboard!');" class="btn btn-primary btn-sm">
            Copy JSON Data
          </button>
          <button onclick="window.globalModal.close()" class="btn btn-outline btn-sm">
            Close
          </button>
        </div>
      </div>
    `;

    this.open("Centralized Portfolio Data Editor", html);
  }
}

// Instantiate global modal manager instance
window.addEventListener('DOMContentLoaded', () => {
  window.globalModal = new ModalManager();
});
