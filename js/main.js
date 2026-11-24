// Apple-Inspired Minimalist Portfolio Logic for Aadhithya Kumar

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded.');
    return;
  }

  initTheme();
  renderHeroStats(data.stats);
  renderExperience(data.experience);
  renderSkills(data.skills);
  renderProjects(data.projects, 'all');
  renderServices(data.services);
  renderEducationAndCerts(data.educationAndCerts);
  setupProjectFilters(data.projects);
  setupContactForm(data.personal);
  setupMobileMenu();
  setupScrollSpy();
  setupResumeModal(data);

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Apple Minimalist Theme Controller (Defaults to Light with smooth Apple Dark toggle)
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
  const html = document.documentElement;

  // Default to light mode for Apple clean white contrast aesthetic, unless user previously set dark
  const savedTheme = localStorage.getItem('portfolio-apple-theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  const toggleTheme = () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('portfolio-apple-theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('portfolio-apple-theme', 'dark');
    }
    if (window.lucide) window.lucide.createIcons();
  };

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);
}

// Render Apple-style Stats Bar
function renderHeroStats(stats) {
  const container = document.getElementById('stats-container');
  if (!container) return;

  container.innerHTML = stats.map(stat => `
    <div class="squircle-card p-6 sm:p-7 text-center flex flex-col items-center justify-center">
      <div class="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
        ${stat.value}
      </div>
      <div class="text-xs sm:text-sm font-normal text-[#86868b] mt-1.5">
        ${stat.label}
      </div>
    </div>
  `).join('');
}

// Render Experience with Apple Squircle Container
function renderExperience(experienceList) {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = experienceList.map(exp => `
    <div class="squircle-card p-8 sm:p-10 relative">
      <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-3 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
            ${exp.company}
          </span>
          <h3 class="text-2xl sm:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mt-1">
            ${exp.role}
          </h3>
          <p class="text-sm text-[#86868b] mt-1 flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            <span>${exp.location}</span>
          </p>
        </div>
        <div class="text-left md:text-right">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7]">
            ${exp.period}
          </span>
          <div class="text-xs text-[#86868b] mt-1">${exp.duration} • ${exp.type}</div>
        </div>
      </div>

      <p class="text-[#424245] dark:text-[#a1a1a6] text-base leading-relaxed mt-6">
        ${exp.description}
      </p>

      <div class="mt-8">
        <h4 class="text-xs uppercase tracking-wider font-semibold text-[#86868b] mb-4">
          Core Responsibilities & Impact
        </h4>
        <ul class="space-y-3">
          ${exp.highlights.map(h => `
            <li class="flex items-start gap-3 text-sm text-[#424245] dark:text-[#a1a1a6] leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0071e3] dark:bg-[#2997ff] mt-2 flex-shrink-0"></span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
        <div class="flex flex-wrap gap-2">
          ${exp.technologies.map(tech => `
            <span class="px-3 py-1 rounded-full text-xs font-normal bg-black/[0.03] dark:bg-white/[0.06] text-[#424245] dark:text-[#a1a1a6] border border-black/[0.04] dark:border-white/[0.06]">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Render Skills Matrix (Apple Style Clean Cards)
function renderSkills(skillsData) {
  const renderSkillGroup = (skills) => skills.map(s => `
    <div class="py-2.5 border-b border-black/[0.04] dark:border-white/[0.06] last:border-0 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <span class="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">${s.name}</span>
      </div>
      <span class="text-xs text-[#86868b] font-normal">${s.level}%</span>
    </div>
  `).join('');

  const frontendEl = document.getElementById('skills-frontend');
  const backendEl = document.getElementById('skills-backend');
  const databaseEl = document.getElementById('skills-database');
  const toolsEl = document.getElementById('skills-tools');

  if (frontendEl) frontendEl.innerHTML = renderSkillGroup(skillsData.frontend);
  if (backendEl) backendEl.innerHTML = renderSkillGroup(skillsData.backend);
  if (databaseEl) databaseEl.innerHTML = renderSkillGroup(skillsData.databaseAndCms);
  if (toolsEl) toolsEl.innerHTML = renderSkillGroup(skillsData.toolsAndWorkflow);
}

// Render Apple-Style Project Showcase
function renderProjects(projectsList, activeCategory) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = activeCategory === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 text-[#86868b]">
        <p class="text-base font-normal">No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => `
    <div class="squircle-card p-7 flex flex-col justify-between group">
      <div>
        <!-- Top Metadata -->
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
            ${project.categoryLabel}
          </span>
          <span class="inline-flex items-center gap-1.5 text-xs text-[#86868b]">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>${project.status}</span>
          </span>
        </div>

        <!-- Title & Subtitle -->
        <h3 class="text-xl sm:text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors">
          ${project.title}
        </h3>
        
        <p class="text-xs sm:text-sm text-[#86868b] font-normal mt-1 mb-3">
          ${project.tagline}
        </p>

        <!-- Description -->
        <p class="text-[#515154] dark:text-[#a1a1a6] text-sm leading-relaxed mb-6 line-clamp-3">
          ${project.description}
        </p>

        <!-- Clean Minimal Tags -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${project.technologies.slice(0, 4).map(t => `
            <span class="text-xs px-2.5 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.06] text-[#6e6e73] dark:text-[#a1a1a6] border border-black/[0.04] dark:border-white/[0.06]">
              ${t}
            </span>
          `).join('')}
          ${project.technologies.length > 4 ? `
            <span class="text-xs px-2 py-1 rounded-full bg-transparent text-[#86868b]">
              +${project.technologies.length - 4}
            </span>
          ` : ''}
        </div>
      </div>

      <!-- Action Row (Apple Minimal Links) -->
      <div class="pt-5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between gap-3 mt-auto">
        ${project.url !== '#' ? `
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" 
             class="apple-link-blue text-sm font-medium">
            <span>Visit Website</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
          </a>
        ` : `
          <span class="text-xs text-[#86868b]">Internal Platform</span>
        `}

        <button onclick="openProjectModal('${project.id}')" 
                class="text-xs font-medium text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors flex items-center gap-1">
          <span>Overview</span>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// Apple Segmented Control for Project Filters
function setupProjectFilters(projectsList) {
  const buttons = document.querySelectorAll('.apple-segment-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderProjects(projectsList, category);
    });
  });
}

// Render Apple-style Services
function renderServices(services) {
  const container = document.getElementById('services-container');
  if (!container) return;

  container.innerHTML = services.map(s => `
    <div class="squircle-card p-7 sm:p-8 flex flex-col justify-between">
      <div>
        <div class="w-10 h-10 rounded-2xl bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] flex items-center justify-center mb-5">
          <i data-lucide="${s.icon}" class="w-5 h-5"></i>
        </div>
        <h3 class="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-2">
          ${s.title}
        </h3>
        <p class="text-sm text-[#6e6e73] dark:text-[#a1a1a6] leading-relaxed mb-6">
          ${s.description}
        </p>
      </div>
      
      <div class="pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
        <ul class="space-y-2">
          ${s.deliverables.map(d => `
            <li class="text-xs text-[#6e6e73] dark:text-[#86868b] flex items-center gap-2">
              <span class="w-1 h-1 rounded-full bg-[#0071e3]"></span>
              <span>${d}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// Render Education and Credentials
function renderEducationAndCerts(items) {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="squircle-card p-6 sm:p-7 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] dark:text-[#2997ff]">
            ${item.type}
          </span>
          <span class="text-xs text-[#86868b]">${item.year}</span>
        </div>
        <h3 class="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight mb-1">
          ${item.title}
        </h3>
        <p class="text-xs sm:text-sm font-medium text-[#6e6e73] dark:text-[#a1a1a6] mb-3">
          ${item.institution}
        </p>
        <p class="text-xs text-[#86868b] leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');
}

// Modal Viewers
window.openProjectModal = function(projectId) {
  const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-title');
  const categoryEl = document.getElementById('modal-category');
  const statusEl = document.getElementById('modal-status');
  const descEl = document.getElementById('modal-description');
  const techEl = document.getElementById('modal-tech');
  const contributionsEl = document.getElementById('modal-contributions');
  const metricsEl = document.getElementById('modal-metrics');
  const liveLinkEl = document.getElementById('modal-live-link');

  if (!modal) return;

  titleEl.textContent = project.title;
  categoryEl.textContent = project.categoryLabel;
  statusEl.textContent = project.status;
  descEl.textContent = project.description;
  metricsEl.textContent = project.metrics;

  techEl.innerHTML = project.technologies.map(t => `
    <span class="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#1d1d1f] dark:text-[#f5f5f7] text-xs">
      ${t}
    </span>
  `).join('');

  contributionsEl.innerHTML = project.contributions.map(c => `
    <li class="flex items-start gap-2.5 text-sm text-[#424245] dark:text-[#a1a1a6]">
      <span class="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2 flex-shrink-0"></span>
      <span>${c}</span>
    </li>
  `).join('');

  if (project.url !== '#') {
    liveLinkEl.href = project.url;
    liveLinkEl.classList.remove('hidden');
  } else {
    liveLinkEl.classList.add('hidden');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

window.closeProjectModal = function() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard`);
  }).catch(() => {
    showToast(`Value: ${text}`);
  });
};

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Contact Form Handler (Direct Clean Feedback)
function setupContactForm(personalData) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    const mailtoSubject = encodeURIComponent(subject ? `[Inquiry] ${subject}` : `[Inquiry] Message from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    showToast('Opening your email client...');
    form.reset();
  });
}

function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-[#0071e3]', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-[#0071e3]', 'font-semibold');
      }
    });
  });
}

function setupResumeModal() {
  window.openResumeModal = function() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }
  };

  window.closeResumeModal = function() {
    const modal = document.getElementById('resume-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
}
