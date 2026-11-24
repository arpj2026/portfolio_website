# Aadhithya Kumar — Full Stack Developer Portfolio

Professional portfolio website for **Aadhithya Roopa Preetha Jayantha Kumar** — Full Stack Web Developer & WordPress Specialist based in Warsaw, Poland.

---

## 🌟 Key Features

- **Modern Glassmorphic Dark & Light Mode**: Seamless theme toggling with localStorage persistence.
- **8+ Live Commercial Projects**: Showcase real client projects with live links, filter tabs (E-Commerce, Hospitality, Corporate, Education), and interactive detail popups.
- **Structured Experience & Skills Matrix**: Complete breakdown of roles at Suffix E Solutions Pvt. Ltd., skills with progress metrics, and core service offerings.
- **Digital Printable CV**: Includes an integrated modal CV viewer and a dedicated print/PDF-ready page (`assets/resume.html`).
- **Zero-Build & Ultra-Portable**: Built with clean semantic HTML5, modern Tailwind CSS, Lucide Icons, and vanilla ES6+ JavaScript. Runs instantly in any browser without requiring node or compilation.
- **Interactive Contact Features**: 1-click email copy toast, direct call link, and pre-formatted email inquiry generator.

---

## 📁 Project Structure

```
porfolio/
├── index.html            # Main portfolio web application
├── assets/
│   └── resume.html       # Printable, dedicated digital CV / resume
├── css/
│   └── custom.css        # Animations, glassmorphism, glowing orbs, scrollbars
├── js/
│   ├── data.js           # All personal information, skills, and projects
│   └── main.js           # Interactive application logic & event handlers
└── README.md             # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open (Easiest)
Simply double-click `index.html` or right-click and choose **Open with Google Chrome** (or Edge / Firefox / Safari).

### Option 2: Local Python Server
Since Python is installed on your computer, you can run a local development server by opening your terminal in this folder and typing:

```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

---

## ✏️ How to Update Content & Projects

All data is separated into `js/data.js` for easy maintenance:
- **Personal Info & Contact**: Edit `PORTFOLIO_DATA.personal`
- **Projects**: Add, remove, or modify objects in `PORTFOLIO_DATA.projects`
- **Skills**: Update skills and percentage bars in `PORTFOLIO_DATA.skills`
- **Work History**: Update roles and achievements in `PORTFOLIO_DATA.experience`

---

## 🌐 Free One-Click Deployment Options

### 1. GitHub Pages (Free)
1. Push this repository to GitHub.
2. In your GitHub repo, go to **Settings > Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your website will be live in 60 seconds at `https://<your-username>.github.io/<repo-name>/`.

### 2. Netlify (Free)
1. Drag and drop the `porfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop).
2. It goes live instantly with an HTTPS domain.

### 3. cPanel Hosting
1. Compress all files in this folder into a `.zip` archive.
2. Upload and extract into `public_html` via cPanel File Manager.
