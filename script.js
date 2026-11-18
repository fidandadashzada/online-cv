/* ============================================================
   1. TƏRCÜMƏLƏR (az / en)
   ============================================================ */
const translations = {
  az: {
    "title": "Fidan Dadaşzadə — Online CV",
    "nav.label": "Əsas menyu",
    "nav.about": "Haqqımda",
    "nav.skills": "Bacarıqlar",
    "nav.education": "Təhsil",
    "nav.experience": "Təcrübə",
    "nav.projects": "Layihələr",
    "nav.contact": "Əlaqə",
    "lang.label": "Dil seçimi",
    "theme.label": "Rəng rejimini dəyiş",
    "hero.title": "Salam, mən Fidan Dadaşzadə",
    "hero.lead": "Sadə, səliqəli və istifadəsi rahat veb səhifələr hazırlayıram. Hazırda universitetdə oxuyuram və təcrübə qazanıram.",
    "hero.projects": "Layihələrə bax",
    "hero.contact": "Mənimlə əlaqə",
    "about.p1": "Mən Kompüter Elmləri üzrə təhsil alan tələbəyəm. HTML, CSS və JavaScript ilə veb səhifələr yaratmağı və dizaynı sadə, oxunaqlı saxlamağı sevirəm.",
    "about.p2": "Yeni texnologiyaları öyrənməyə və onları real layihələrdə tətbiq etməyə həmişə açığam.",
    "about.stat1": "tamamlanmış layihə",
    "about.years": "2 il",
    "about.stat2": "öyrənmə təcrübəsi",
    "edu.when1": "2024 – davam edir",
    "edu.title1": "Bakalavr, Kompüter Elmləri",
    "edu.text1": "Azərbaycan Dövlət Neft və Sənaye Universiteti",
    "edu.title2": "Tam orta təhsil",
    "edu.text2": "Telman Abbasov adına 225 nömrəli tam orta məktəb",
    "exp.when1": "2026 – davam edir",
    "exp.title1": "Veb proqramlaşdırma kursu",
    "exp.text1": "Müxtəlif veb səhifə template layihələrim var.",
    "exp.title2": "Universitet layihələri",
    "exp.text2": "Müxtəlif veb səhifələr hazırlamışam.",
    "exp.title3": "Frilans layihələr",
    "exp.text3": "Kiçik bizneslər üçün vizit kart saytları hazırlamışam.",
    "contact.text": "Əməkdaşlıq, təcrübə və ya sadəcə sual üçün yaza bilərsiniz.",
    "contact.city": "Bakı, Azərbaycan",
    "form.name": "Adınız",
    "form.email": "E-poçt",
    "form.message": "Mesaj",
    "form.send": "Mesaj göndər",
    "err.name": "Adınızı yazın (ən azı 2 simvol).",
    "err.email": "Düzgün e-poçt ünvanı yazın.",
    "err.message": "Mesaj ən azı 10 simvol olmalıdır.",
    "form.ok": "Təşəkkürlər! Mesajınız qəbul olundu."
  },
  en: {
    "title": "Fidan Dadashzada — Online CV",
    "nav.label": "Main menu",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "lang.label": "Language",
    "theme.label": "Toggle color theme",
    "hero.title": "Hi, I’m Fidan Dadashzada",
    "hero.lead": "I build simple, clean and easy-to-use web pages. I’m currently studying at university and gaining experience.",
    "hero.projects": "View projects",
    "hero.contact": "Contact me",
    "about.p1": "I’m a Computer Science student. I enjoy building web pages with HTML, CSS and JavaScript and keeping the design simple and readable.",
    "about.p2": "I’m always open to learning new technologies and applying them in real projects.",
    "about.stat1": "completed projects",
    "about.years": "2 years",
    "about.stat2": "of learning experience",
    "edu.when1": "2024 – present",
    "edu.title1": "Bachelor’s, Computer Science",
    "edu.text1": "Azerbaijan State Oil and Industry University",
    "edu.title2": "Secondary education",
    "edu.text2": "Secondary School No. 225 named after Telman Abbasov",
    "exp.when1": "2026 – present",
    "exp.title1": "Web development course",
    "exp.text1": "I have built several web page template projects.",
    "exp.title2": "University projects",
    "exp.text2": "I have built various web pages.",
    "exp.title3": "Freelance projects",
    "exp.text3": "I built business-card websites for small businesses.",
    "contact.text": "Feel free to write to me about collaboration, internships or any question.",
    "contact.city": "Baku, Azerbaijan",
    "form.name": "Your name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send message",
    "err.name": "Enter your name (at least 2 characters).",
    "err.email": "Enter a valid email address.",
    "err.message": "The message must be at least 10 characters.",
    "form.ok": "Thank you! Your message has been received."
  }
};

/* Bacarıqlar */
const skills = {
  az: {
    "Veb": ["HTML5", "CSS3", "Flexbox və Grid", "Responsiv dizayn"],
    "Proqramlaşdırma": ["JavaScript", "Əsas Python"],
    "Verilənlər": ["SQL", "MySQL"],
    "Alətlər": ["Git", "GitHub", "VS Code", "Vercel"]
  },
  en: {
    "Web": ["HTML5", "CSS3", "Flexbox and Grid", "Responsive design"],
    "Programming": ["JavaScript", "Basic Python"],
    "Data": ["SQL", "MySQL"],
    "Tools": ["Git", "GitHub", "VS Code", "Vercel"]
  }
};

/* Layihələr (yeni layihə əlavə etmək üçün bir sətir kifayətdir) */
const builtAz = "Bu səhifə: semantik HTML, Grid, Flexbox, Position ilə yazılmışdır.";
const builtEn = "This page is built with semantic HTML, Grid, Flexbox and Position.";

const projects = [
  {
    title: "Astroship",
    text: {
      az: "Bu səhifə: semantik HTML, Grid, Flexbox ilə yazılmışdır.",
      en: "This page is built with semantic HTML, Grid and Flexbox."
    },
    tags: "HTML · CSS",
    link: "https://astroship-phi-nine.vercel.app/"
  },
  { title: "Lugx",      text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://lugx-fawn.vercel.app/" },
  { title: "BLOOMSHOP", text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://bloomshop-xi.vercel.app/" },
  { title: "Polo360",   text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://polo360-coral-six.vercel.app/" },
  { title: "Fitness",   text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://fitness-one-steel.vercel.app/" },
  { title: "Switch",    text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://switch-azure.vercel.app/" },
  { title: "Fitness2",  text: { az: builtAz, en: builtEn }, tags: "HTML · CSS", link: "https://fitness2-zeta.vercel.app/" }
];

/* ============================================================
   2. KÖMƏKÇİ FUNKSİYALAR
   ============================================================ */
const root = document.documentElement;

function save(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* icazə yoxdursa keç */ }
}
function load(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

let lang = load("lang");
if (!translations[lang]) lang = "az";

const t = (key) => translations[lang][key];

/* ============================================================
   3. SKILLS və PROJECTS render
   ============================================================ */
const skillGroups = document.getElementById("skillGroups");
const projectList = document.getElementById("projectList");

function renderSkills() {
  skillGroups.innerHTML = "";
  Object.entries(skills[lang]).forEach(([group, items]) => {
    skillGroups.insertAdjacentHTML("beforeend", `
      <div class="group">
        <h3>${group}</h3>
        <div class="chips">${items.map((i) => `<span class="chip">${i}</span>`).join("")}</div>
      </div>
    `);
  });
}

function renderProjects() {
  projectList.innerHTML = "";
  projects.forEach((project) => {
    const title = typeof project.title === "string" ? project.title : project.title[lang];
    const tag = project.link ? "a" : "article";
    const attrs = project.link
      ? `href="${project.link}" target="_blank" rel="noopener"`
      : "";

    projectList.insertAdjacentHTML("beforeend", `
      <${tag} class="project" ${attrs}>
        <h3>${title}</h3>
        <p>${project.text[lang]}</p>
        <span class="tags">${project.tags}</span>
      </${tag}>
    `);
  });
}

/* ============================================================
   4. DİL DƏYİŞMƏ
   ============================================================ */
const langButtons = document.querySelectorAll(".lang button");

function applyLang(newLang) {
  lang = newLang;
  save("lang", lang);
  root.lang = lang;
  document.title = t("title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  langButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
  });

  renderSkills();
  renderProjects();
  clearFormMessages();
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

/* ============================================================
   5. AĞ / QARA REJİM
   ============================================================ */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  save("theme", next);
});

/* ============================================================
   6. MENYUDA AKTİV BÖLMƏ
   ============================================================ */
const links = document.querySelectorAll("nav a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section").forEach((s) => observer.observe(s));

/* ============================================================
   7. ƏLAQƏ FORMU
   ============================================================ */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

const rules = {
  name: (v) => v.trim().length >= 2 || t("err.name"),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || t("err.email"),
  message: (v) => v.trim().length >= 10 || t("err.message")
};

function clearFormMessages() {
  form.querySelectorAll(".err").forEach((el) => (el.textContent = ""));
  form.querySelectorAll(".invalid").forEach((el) => el.classList.remove("invalid"));
  statusEl.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  Object.keys(rules).forEach((id) => {
    const input = document.getElementById(id);
    const res = rules[id](input.value);
    form.querySelector(`[data-for="${id}"]`).textContent = res === true ? "" : res;
    input.classList.toggle("invalid", res !== true);
    if (res !== true) ok = false;
  });
  statusEl.textContent = ok ? t("form.ok") : "";
  if (ok) form.reset();
});

/* ============================================================
   8. BAŞLANĞIC
   ============================================================ */
applyLang(lang);
