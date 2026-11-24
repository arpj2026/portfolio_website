// Portfolio Data Configuration for Aadhithya Roopa Preetha Jayantha Kumar

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Aadhithya Roopa Preetha Jayantha Kumar",
    shortName: "Aadhithya Kumar",
    preferredTitle: "Full Stack Developer",
    subtitle: "Specializing in PHP, Python, WordPress & Modern Responsive Frontends",
    location: "Warsaw, Poland",
    previousLocation: "Trivandrum, India",
    email: "aadhithyaroopapj@gmail.com",
    phone: "+48 729367154",
    phoneDisplay: "+48 729 367 154",
    availability: "Available for Full-time / Contract Roles (Poland & Remote)",
    yearsOfExperience: "2 Years",
    summary: "Motivated and detail-oriented Full Stack Developer with nearly 2 years of hands-on industry experience building high-performing web applications using PHP, Python, MySQL, and WordPress. Adept at turning client visions into pixel-perfect, responsive web solutions with HTML5, CSS3, JavaScript, Bootstrap, and modern web standards. Experienced across the full project lifecycle—from requirement gathering and database schema design to deployment, SEO, and ongoing maintenance.",
    languages: [
      { name: "English", level: "Fluent / Professional", score: 95 },
      { name: "Malayalam", level: "Native", score: 100 },
      { name: "Hindi", level: "Conversational", score: 80 },
      { name: "Tamil", level: "Conversational", score: 75 }
    ]
  },

  stats: [
    { label: "Live Client Projects", value: "8+", icon: "globe" },
    { label: "Years of Experience", value: "2", icon: "briefcase" },
    { label: "Technologies Mastered", value: "12+", icon: "code" },
    { label: "Client Satisfaction", value: "100%", icon: "award" }
  ],

  experience: [
    {
      company: "Suffix E Solutions Pvt. Ltd.",
      location: "Trivandrum, India",
      role: "Assistant Software Engineer / Full Stack Developer",
      period: "Jan 2022 – Nov 2023",
      duration: "1 Year 11 Months",
      type: "Full-Time",
      description: "Spearheaded web application development, WordPress theme/plugin customizations, and database architectures for diverse international and domestic clients.",
      highlights: [
        "Developed and maintained robust backend logic and database workflows using PHP and Python.",
        "Built responsive, mobile-first frontend interfaces using HTML5, CSS3, JavaScript, jQuery, and Bootstrap.",
        "Designed and customized custom WordPress themes and plugins tailored to specific business requirements.",
        "Managed relational databases in MySQL, executing complex SQL queries, migrations, and CRUD operations.",
        "Handled end-to-end project lifecycles from concept and requirements analysis to staging, production launch, and post-deployment maintenance.",
        "Collaborated across cross-functional teams, conducted code reviews, resolved critical bugs, and communicated directly with clients via calls, emails, and meetings."
      ],
      technologies: ["PHP", "Python", "WordPress", "MySQL", "JavaScript", "jQuery", "Bootstrap", "cPanel", "HTML5/CSS3"]
    }
  ],

  skills: {
    frontend: [
      { name: "HTML5 & Semantic Markup", level: 95, icon: "file-code" },
      { name: "CSS3 & Modern Layouts (Flexbox/Grid)", level: 92, icon: "palette" },
      { name: "JavaScript (ES6+)", level: 88, icon: "zap" },
      { name: "Bootstrap 5", level: 92, icon: "layout" },
      { name: "jQuery", level: 85, icon: "code-2" },
      { name: "Responsive Web Design & Mobile-First", level: 95, icon: "smartphone" }
    ],
    backend: [
      { name: "PHP", level: 90, icon: "server" },
      { name: "Python", level: 82, icon: "terminal" },
      { name: "Django Basics & REST", level: 75, icon: "layers" },
      { name: "CRUD Operations & API Integration", level: 92, icon: "database" }
    ],
    databaseAndCms: [
      { name: "MySQL / SQL", level: 88, icon: "database" },
      { name: "WordPress Custom Themes", level: 94, icon: "layout-template" },
      { name: "WordPress Plugins & WooCommerce", level: 86, icon: "shopping-bag" },
      { name: "phpMyAdmin & Database Administration", level: 88, icon: "hard-drive" }
    ],
    toolsAndWorkflow: [
      { name: "Git & Version Control", level: 85, icon: "git-branch" },
      { name: "VS Code", level: 92, icon: "cpu" },
      { name: "cPanel & Web Hosting", level: 88, icon: "cloud" },
      { name: "SEO Optimization & Web Vitals", level: 85, icon: "trending-up" },
      { name: "Troubleshooting & Bug Fixing", level: 95, icon: "wrench" },
      { name: "Client Communication & Agile Delivery", level: 90, icon: "message-square" }
    ]
  },

  services: [
    {
      icon: "layout",
      title: "Responsive Web Design & Development",
      description: "Crafting modern, lightning-fast, and pixel-perfect websites that seamlessly adapt across mobile devices, tablets, and desktop displays.",
      deliverables: ["Mobile-first UI/UX", "Cross-browser compatibility", "Clean HTML5/CSS3/JS", "Performance optimization"]
    },
    {
      icon: "layout-template",
      title: "WordPress Theme & Plugin Customization",
      description: "Building custom WordPress solutions, tailored themes, custom post types, and WooCommerce e-commerce setups with effortless content management.",
      deliverables: ["Custom theme development", "Plugin integration", "WooCommerce storefronts", "WordPress security & updates"]
    },
    {
      icon: "server",
      title: "Backend Development & CRUD Systems",
      description: "Designing reliable server-side functionality with PHP and Python, backed by efficient MySQL databases and secure data processing.",
      deliverables: ["PHP backend logic", "MySQL schema & queries", "RESTful endpoints", "Admin dashboards & forms"]
    },
    {
      icon: "wrench",
      title: "Website Maintenance & Bug Troubleshooting",
      description: "Proactive website health checks, diagnosing critical issues, patching security vulnerabilities, and speeding up load times.",
      deliverables: ["Bug fixing & debugging", "Database maintenance", "cPanel migration & staging", "Speed & SEO audits"]
    }
  ],

  projects: [
    {
      id: "pharmayush",
      title: "PharmAyush",
      category: "ecommerce",
      categoryLabel: "E-Commerce & Healthcare",
      tagline: "Ayurvedic Shopping & Healthcare E-Commerce Platform",
      url: "https://pharmayush.com/",
      status: "Live Production",
      featured: true,
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Responsive UI", "Payment Integration"],
      description: "A comprehensive e-commerce platform dedicated to authentic Ayurvedic and wellness healthcare products. Engineered backend architecture, product catalog, cart logic, and client-facing interfaces.",
      contributions: [
        "Architected core PHP backend logic for catalog browsing, cart operations, and user checkout.",
        "Designed and normalized MySQL database schemas for products, categories, orders, and customer accounts.",
        "Created an intuitive and fully responsive customer experience with Bootstrap and custom JavaScript.",
        "Worked directly with client stakeholders to align business requirements with technical execution."
      ],
      metrics: "Live store serving thousands of catalog items with responsive checkout"
    },
    {
      id: "biverah",
      title: "Biverah Hotel & Suites",
      category: "hospitality",
      categoryLabel: "Hospitality & Travel",
      tagline: "Luxury Hotel, Suites & Event Booking Web Portal",
      url: "https://biverah.com/",
      status: "Live Production",
      featured: true,
      technologies: ["WordPress", "PHP", "JavaScript", "CSS3", "Responsive UI", "Booking Flow"],
      description: "Official web destination for Biverah Hotel & Suites, showcasing luxury accommodations, dining menus, conference facilities, and direct booking inquiries.",
      contributions: [
        "Customized WordPress theme to deliver a high-end luxury hospitality visual identity.",
        "Implemented room showcase carousels, amenity matrices, and reservation inquiry forms.",
        "Optimized mobile navigation and asset loading for guests booking from mobile devices.",
        "Provided ongoing maintenance, content updates, and SEO structure."
      ],
      metrics: "High engagement rate with responsive booking inquiry workflows"
    },
    {
      id: "heavenlyholidays",
      title: "Heavenly Holidays",
      category: "hospitality",
      categoryLabel: "Hospitality & Travel",
      tagline: "Tour Packages & Vacation Booking Experience",
      url: "https://heavenlyholidays.org/",
      status: "Live Production",
      featured: true,
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "Custom Forms"],
      description: "A visually rich travel agency portal presenting curated holiday packages, domestic & international itineraries, customer testimonials, and direct travel quote requests.",
      contributions: [
        "Engineered interactive itinerary layouts and destination galleries.",
        "Built dynamic quote inquiry forms with automated notification routing.",
        "Ensured fast page loading with optimized travel imagery and caching configuration.",
        "Applied local SEO best practices to attract inbound travel inquiries."
      ],
      metrics: "Streamlined inquiry flow for seasonal holiday travelers"
    },
    {
      id: "aamtech",
      title: "AAM Tech",
      category: "corporate",
      categoryLabel: "IT & Corporate Services",
      tagline: "UAE Technology Solutions & IT Consulting Portal",
      url: "https://aamtech.ae/",
      status: "Live Production",
      featured: true,
      technologies: ["WordPress", "PHP", "Bootstrap", "SEO Optimization", "cPanel"],
      description: "Corporate digital presence for a premier United Arab Emirates IT & technology solutions provider, detailing enterprise services, consulting offerings, and lead capture.",
      contributions: [
        "Crafted a sleek, enterprise-grade technology showcase layout.",
        "Integrated multi-service discovery pages with clear calls-to-action.",
        "Configured robust hosting on cPanel with SSL and performance caching.",
        "Structured SEO metadata for regional search dominance in the UAE."
      ],
      metrics: "Enterprise IT portal with high-converting consultation lead capture"
    },
    {
      id: "whiitestone",
      title: "WhiiteStone",
      category: "corporate",
      categoryLabel: "Corporate & Branding",
      tagline: "Strategic Brand Consulting & Digital Agency",
      url: "https://www.whiitestone.com/",
      status: "Live Production",
      featured: false,
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "MySQL"],
      description: "Clean, minimalist corporate agency portfolio built to present branding case studies, creative strategy services, and client achievements.",
      contributions: [
        "Built responsive grid layouts for creative case studies and service capabilities.",
        "Fine-tuned typography and micro-interactions for a refined aesthetic.",
        "Ensured seamless cross-browser consistency across Safari, Chrome, and Firefox.",
        "Implemented secure contact and proposal request pipelines."
      ],
      metrics: "Minimalist, aesthetic portfolio reflecting client brand identity"
    },
    {
      id: "sabarigiri",
      title: "Sabarigiri International School",
      category: "education",
      categoryLabel: "Education & Institutional",
      tagline: "CBSE International School Educational Web Portal",
      url: "https://sabarigiriinternationalschool.com/",
      status: "Live Production",
      featured: true,
      technologies: ["WordPress", "PHP", "MySQL", "Responsive Design", "Admissions"],
      description: "Official institutional portal for Sabarigiri International School, providing parents, students, and faculty with admissions details, academic calendars, curriculum overviews, and school notices.",
      contributions: [
        "Structured information architecture for multiple stakeholder groups (Parents, Students, Admissions).",
        "Developed custom notice board widgets and downloadable academic schedule sections.",
        "Implemented responsive admission inquiry forms with data validation.",
        "Maintained compliance with institutional accessibility and branding guidelines."
      ],
      metrics: "Central digital hub serving hundreds of daily student and parent visits"
    },
    {
      id: "hellonariyal",
      title: "Hello Nariyal",
      category: "ecommerce",
      categoryLabel: "E-Commerce & Retail",
      tagline: "Sustainable Coconut & Natural Products Brand",
      url: "https://hellonariyal.com/",
      status: "Live Production",
      featured: false,
      technologies: ["WordPress", "WooCommerce", "PHP", "Responsive Design"],
      description: "D2C consumer brand portal highlighting organic coconut-derived products, brand mission, sustainable sourcing practices, and product offerings.",
      contributions: [
        "Crafted warm, nature-inspired visual design highlighting product sustainability.",
        "Structured product catalog with clear benefit breakdowns and visual storytelling.",
        "Streamlined mobile browsing for impulse purchases and brand discovery.",
        "Executed performance optimizations for fast product image rendering."
      ],
      metrics: "Engaging brand storytelling with responsive product catalog"
    },
    {
      id: "singlespot",
      title: "Single Spot",
      category: "corporate",
      categoryLabel: "Business Solutions",
      tagline: "Unified Multi-Service Business Solutions",
      url: "https://singlespot.net/",
      status: "Live Production",
      featured: false,
      technologies: ["WordPress", "PHP", "Custom Layouts", "JavaScript"],
      description: "Comprehensive business solutions hub aggregating digital marketing, business consultancy, and technology support under one unified portal.",
      contributions: [
        "Developed clear service segmentation for varied business verticals.",
        "Integrated dynamic interactive elements and contact touchpoints.",
        "Maintained high reliability, swift load times, and database consistency."
      ],
      metrics: "Unified multi-vertical service gateway with interactive customer contact"
    },
    {
      id: "teamsabroad",
      title: "Teams Abroad",
      category: "corporate",
      categoryLabel: "Corporate & Recruitment",
      tagline: "International Talent & Overseas Opportunities Portal",
      url: "#",
      status: "Client Project",
      featured: false,
      technologies: ["WordPress", "Custom Themes & Plugins", "PHP", "MySQL"],
      description: "Global talent acquisition and overseas workforce consultation platform with custom WordPress theme architecture and dynamic application forms.",
      contributions: [
        "Engineered custom WordPress theme components tailored to talent profiles.",
        "Developed customized candidate application workflow and document submission hooks.",
        "Implemented administrative dashboards for reviewing candidate inquiries."
      ],
      metrics: "Custom WordPress theme and plugin setup for candidate management"
    }
  ],

  educationAndCerts: [
    {
      type: "education",
      title: "Bachelor of Commerce (B.Com)",
      institution: "University of Mysore, Karnataka",
      year: "May 2020",
      description: "Foundational higher education emphasizing business operations, financial analysis, analytical problem solving, and structured planning.",
      icon: "graduation-cap"
    },
    {
      type: "certification",
      title: "Intensive Internship Programme",
      institution: "Scope India, Trivandrum",
      year: "Aug 2021",
      description: "Rigorous full-stack software development immersion covering web technologies, database programming, version control, and real-world project delivery.",
      icon: "award"
    },
    {
      type: "certification",
      title: "The Future of the IT Industry, Data Science, AI & Machine Learning",
      institution: "Industry Seminar & Certification",
      year: "Mar 2023",
      description: "Advanced program analyzing modern cloud architectures, artificial intelligence workflows, data science pipelines, and tech industry evolution.",
      icon: "cpu"
    },
    {
      type: "certification",
      title: "Computer Hardware & Network",
      institution: "LBS Institute of Technology for Women",
      year: "Mar 2016",
      description: "Fundamental training in computer architecture, network protocols, server hardware, and diagnostic troubleshooting.",
      icon: "hard-drive"
    }
  ]
};

// Export to window for global access
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
