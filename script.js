/* ===== Muhammad Nur Hadi — Portfolio script ===== */
(function () {
  "use strict";

  var currentLang = "en";

  /* ===== Translations (EN default, ID secondary) ===== */
  var i18n = {
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
      "nav.projects": "Projects", "nav.contact": "Contact",
      "hero.greeting": "Hi, I'm", "hero.tagline": "I build high-quality Android apps for fintech, startups & product teams — from idea to Play Store.",
      "hero.viewWork": "View My Work", "hero.contact": "Contact Me",
      "about.title": "About Me",
      "about.p1": "An <strong>Android Engineer</strong> with deep experience across <strong>Fintech, Startup, Product-based and Project-based</strong> environments — including time at <strong>GoTo Group (GoPlay / Everywhere.id)</strong> and <strong>Alterra</strong>.",
      "about.p2": "I specialize in <strong>Kotlin</strong>, <strong>Flutter</strong>, <strong>Jetpack Compose</strong> and <strong>Kotlin Multiplatform</strong>, with strong foundations in Clean/Hexagonal Architecture, MVVM, unit testing, modularization and CI/CD.",
      "about.p3": "Beyond the code, I've led engineering teams, mentored developers, and built & operated an F&B business with its own homemade POS system.",
      "about.fRole": "Role:", "about.fRoleV": "Lead / Senior Android Engineer",
      "about.fExp": "Experience:", "about.fExpV": "8+ years in Android",
      "about.fBased": "Based in:", "about.fLangs": "Languages:", "about.fLangsV": "English (Intermediate), Indonesian (Advanced)",
      "skills.title": "Skills",
      "experience.title": "Experience",
      "projects.title": "Featured Projects",
      "projects.sub": "A selection of Android apps I've designed, built and shipped.",
      "projects.view": "View on Google Play",
      "achievements.title": "Certifications & Achievements",
      "contact.title": "Let's Work Together",
      "contact.sub": "Have an Android project or a role in mind? I'd love to hear from you.",
      "footer.made": "Android Engineer Portfolio",
      "badge.company": "Company", "badge.personal": "Personal"
    },
    id: {
      "nav.about": "Tentang", "nav.skills": "Keterampilan", "nav.experience": "Pengalaman",
      "nav.projects": "Proyek", "nav.contact": "Kontak",
      "hero.greeting": "Hai, saya", "hero.tagline": "Saya membangun aplikasi Android berkualitas untuk fintech, startup & tim produk — dari ide hingga Play Store.",
      "hero.viewWork": "Lihat Karya Saya", "hero.contact": "Hubungi Saya",
      "about.title": "Tentang Saya",
      "about.p1": "Seorang <strong>Android Engineer</strong> dengan pengalaman mendalam di lingkungan <strong>Fintech, Startup, Product-based dan Project-based</strong> — termasuk di <strong>GoTo Group (GoPlay / Everywhere.id)</strong> dan <strong>Alterra</strong>.",
      "about.p2": "Saya berfokus pada <strong>Kotlin</strong>, <strong>Flutter</strong>, <strong>Jetpack Compose</strong> dan <strong>Kotlin Multiplatform</strong>, dengan fondasi kuat di Clean/Hexagonal Architecture, MVVM, unit testing, modularisasi dan CI/CD.",
      "about.p3": "Di luar coding, saya memimpin tim engineering, membimbing developer, serta membangun & mengoperasikan bisnis F&B dengan sistem POS buatan sendiri.",
      "about.fRole": "Peran:", "about.fRoleV": "Lead / Senior Android Engineer",
      "about.fExp": "Pengalaman:", "about.fExpV": "8+ tahun di Android",
      "about.fBased": "Berbasis di:", "about.fLangs": "Bahasa:", "about.fLangsV": "Inggris (Menengah), Indonesia (Lanjutan)",
      "skills.title": "Keterampilan",
      "experience.title": "Pengalaman",
      "projects.title": "Proyek Pilihan",
      "projects.sub": "Pilihan aplikasi Android yang saya rancang, bangun dan rilis.",
      "projects.view": "Lihat di Google Play",
      "achievements.title": "Sertifikasi & Pencapaian",
      "contact.title": "Mari Bekerja Sama",
      "contact.sub": "Punya proyek Android atau lowongan yang cocok? Saya senang mendengar kabar dari Anda.",
      "footer.made": "Portofolio Android Engineer",
      "badge.company": "Perusahaan", "badge.personal": "Pribadi"
    }
  };

  function t(key) {
    var map = i18n[currentLang] || i18n.en;
    return map[key] !== undefined ? map[key] : (i18n.en[key] || key);
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
  }

  /* ===== Data ===== */
  var skills = [
    { title: { en: "Languages", id: "Bahasa Pemrograman" }, tags: ["Kotlin", "Java", "Flutter / Dart", "SQL", "Bash"] },
    { title: { en: "Android & UI", id: "Android & UI" }, tags: ["Android SDK", "Jetpack Compose", "Kotlin Multiplatform", "Android Jetpack (Architecture Components)", "Build Apps from Scratch"] },
    { title: { en: "Architecture", id: "Arsitektur" }, tags: ["MVP", "MVVM", "Clean Architecture", "Hexagonal Architecture", "Modularization"] },
    { title: { en: "Dependency Injection", id: "Dependency Injection" }, tags: ["Koin", "Dagger", "Hilt"] },
    { title: { en: "Testing", id: "Pengujian" }, tags: ["Unit Test", "Mockito", "Mockk", "Espresso"] },
    { title: { en: "Reactive & Realtime", id: "Reactive & Realtime" }, tags: ["Coroutine / Flow", "RxJava", "MQTT", "WebSocket", "Socket"] },
    { title: { en: "Workflow & CI/CD", id: "Alur Kerja & CI/CD" }, tags: ["Trunk Based Development", "GitHub Flow", "CI/CD", "SonarCloud", "Crashlytics"] },
    { title: { en: "Other", id: "Lainnya" }, tags: ["Security & Performance", "REST API", "Firebase", "Google Apps Script", "Unity3D"] }
  ];

  var experience = [
    {
      title: { en: "Founder & Business Owner", id: "Founder & Pemilik Bisnis" },
      org: { en: "Dimsumesta (F&B Business)", id: "Dimsumesta (Bisnis F&B)" },
      date: { en: "Jul 2025 – Present", id: "Jul 2025 – Sekarang" },
      loc: "Malang, Indonesia",
      points: {
        en: ["Built and operated an F&B business end-to-end.",
             "Designed and developed an internal Point of Sale (POS) system using Google Apps Script to manage sales, inventory, members and reporting — reducing operational expenses.",
             "Next step: migrating to Kotlin / Compose Multiplatform.",
             "Managed operations, inventory, marketing and financial reporting."],
        id: ["Membangun dan mengoperasikan bisnis F&B secara menyeluruh.",
             "Merancang dan mengembangkan sistem Point of Sale (POS) internal menggunakan Google Apps Script untuk mengelola penjualan, inventori, member dan pelaporan — menekan biaya operasional.",
             "Langkah berikutnya: migrasi ke Kotlin / Compose Multiplatform.",
             "Mengelola operasional, inventori, pemasaran dan laporan keuangan."]
      }
    },
    {
      title: { en: "Tech Lead Android Engineer", id: "Tech Lead Android Engineer" },
      org: { en: "Everywhere.id (formerly GoPlay, ex-GoTo Group)", id: "Everywhere.id (sebelumnya GoPlay, ex-GoTo Group)" },
      date: { en: "Oct 2022 – Apr 2024", id: "Okt 2022 – Apr 2024" },
      loc: "Jakarta, Indonesia",
      points: {
        en: ["Built and maintained Studio Everywhere apps for content creators — live streaming, chat, virtual gifts, socket, animation, modularization.",
             "Led a team of 2 members; prioritized delivery, coaching and 1-on-1s.",
             "Interviewed junior/mid Android candidates.",
             "Monitored crashlytics and proposed priority fixes to the product team.",
             "Researched (PoC) features and estimated man-days per sprint."],
        id: ["Membangun dan memelihara aplikasi Studio Everywhere untuk content creator — live streaming, chat, virtual gift, socket, animasi, modularisasi.",
             "Memimpin tim beranggotakan 2 orang; memprioritaskan pengiriman, coaching dan 1-on-1.",
             "Mewawancarai kandidat Android junior/mid.",
             "Memantau crashlytics dan mengusulkan prioritas perbaikan ke tim produk.",
             "Meneliti (PoC) fitur dan memperkirakan man-days per sprint."]
      }
    },
    {
      title: { en: "Senior Android Engineer", id: "Senior Android Engineer" },
      org: { en: "Goplay (part of GoTo Group)", id: "Goplay (bagian dari GoTo Group)" },
      date: { en: "Oct 2021 – Oct 2022", id: "Okt 2021 – Okt 2022" },
      loc: "Jakarta, Indonesia",
      points: {
        en: ["Built and maintained Studio Everywhere apps — live streaming, chat, virtual gifts, socket, animation, modularization."],
        id: ["Membangun dan memelihara aplikasi Studio Everywhere — live streaming, chat, virtual gift, socket, animasi, modularisasi."]
      }
    },
    {
      title: { en: "Mobile Engineer", id: "Mobile Engineer" },
      org: { en: "Alterra", id: "Alterra" },
      date: { en: "Mar 2018 – Oct 2021", id: "Mar 2018 – Okt 2021" },
      loc: "Malang, Indonesia",
      points: {
        en: ["Introduced the MVP pattern and Kotlin to the team; successfully refactored Alphapay (Android) enabling unit testing.",
             "Researched Android Kotlin with Hexagonal Architecture + MVVM using Dependency Injection, published on Medium.",
             "Built Bacameter (Android) from scratch with MVVM, coroutines, unit tests, CI/CD, and more."],
        id: ["Memperkenalkan pola MVP dan Kotlin ke tim; berhasil me-refactor Alphapay (Android) sehingga memungkinkan unit testing.",
             "Meneliti Android Kotlin dengan Hexagonal Architecture + MVVM menggunakan Dependency Injection, dipublikasikan di Medium.",
             "Membangun Bacameter (Android) dari nol dengan MVVM, coroutines, unit test, CI/CD, dan lainnya."]
      }
    },
    {
      title: { en: "Android Developer", id: "Android Developer" },
      org: { en: "PT. Selapak Nusa Link", id: "PT. Selapak Nusa Link" },
      date: { en: "May 2016 – Mar 2018", id: "Mei 2016 – Mar 2018" },
      loc: "Malang, Indonesia",
      points: {
        en: ["Developed Android apps with Java/Kotlin; converted UI designs to XML.",
             "Researched the latest Android technologies and used 3rd-party libraries, REST API, Socket and Firebase.",
             "Delivered apps on Play Store, error tracking with Crashlytics, maintained and fixed bugs, collaborated with git."],
        id: ["Mengembangkan aplikasi Android dengan Java/Kotlin; mengonversi desain UI ke XML.",
             "Meneliti teknologi Android terbaru dan menggunakan library pihak ketiga, REST API, Socket dan Firebase.",
             "Merilis aplikasi di Play Store, pelacakan error dengan Crashlytics, memelihara dan memperbaiki bug, berkolaborasi dengan git."]
      }
    },
    {
      title: { en: "Android & IoT Developer (Freelance)", id: "Android & IoT Developer (Freelance)" },
      org: { en: "Freelance", id: "Freelance" },
      date: { en: "Mar 2016 – May 2016", id: "Mar 2016 – Mei 2016" },
      loc: "Malang, Indonesia",
      points: {
        en: ["Negotiated with clients; developed Android apps and Arduino; collaborated with electrical engineers and delivered projects to clients."],
        id: ["Bernegosiasi dengan klien; mengembangkan aplikasi Android dan Arduino; berkolaborasi dengan electrical engineer dan menyerahkan proyek ke klien."]
      }
    },
    {
      title: { en: "Programming Instructor", id: "Instruktur Pemrograman" },
      org: { en: "Institut Teknologi Nasional Malang", id: "Institut Teknologi Nasional Malang" },
      date: { en: "Oct 2012 – Jan 2016", id: "Okt 2012 – Jan 2016" },
      loc: "Malang, Indonesia",
      points: {
        en: ["Taught full-stack programming including Java, PHP and C++."],
        id: ["Mengajar pemrograman full-stack termasuk Java, PHP dan C++."]
      }
    }
  ];

  var projects = [
    { name: "Studio Everywhere",
      img: ["assets/portofolio/studio-everywhere-1.jpg", "assets/portofolio/studio-everywhere-2.jpg"], company: { en: "Everywhere.id", id: "Everywhere.id" }, badge: "company",
      desc: { en: "Live streaming & content creator platform — chat, virtual gifts, realtime via sockets.",
              id: "Platform live streaming untuk content creator — chat, virtual gift, realtime via socket." },
      link: "https://play.google.com/store/apps/details?id=com.gostream.android" },
    { name: "Live Everywhere",
      img: "assets/portofolio/live-everywhere.jpg", company: { en: "Everywhere.id", id: "Everywhere.id" }, badge: "company",
      desc: { en: "Watch or host live streams with varied content — music, games, concerts, talk shows, quizzes.",
              id: "Menonton atau mengadakan live streaming dari berbagai konten — musik, game, konser, talk show, kuis." },
      link: "https://play.google.com/store/apps/details?id=com.goplay.android" },
    { name: "Alphapay",
      img: "assets/portofolio/alphapay.jpg", company: { en: "Alterra", id: "Alterra" }, badge: "company",
      desc: { en: "Agent mobile payment app to top up customer phone balance and pay bills in Indonesia.",
              id: "Aplikasi pembayaran mobile agent untuk top up pulsa pelanggan dan bayar tagihan di Indonesia." },
      link: "https://play.google.com/store/apps/details?id=com.sepulsa.alphapay" },
    { name: "Pesan Kamar",
      img: "assets/portofolio/pesan-kamar.jpg", company: { en: "Personal Project", id: "Proyek Pribadi" }, badge: "personal",
      desc: { en: "Helps rent rooms and produce financial reports.",
              id: "Membantu menyewakan kamar dan membuat laporan keuangan." },
      link: "https://play.google.com/store/apps/details?id=com.pesankamar.rooms" },
    { name: "Chaterpress",
      img: "assets/portofolio/chaterpress.jpg", company: { en: "PT. Selapak Nusa Link", id: "PT. Selapak Nusa Link" }, badge: "company",
      desc: { en: "Social photo printing app to chat, collaborate, curate and print photo books from social and device photos.",
              id: "Aplikasi cetak foto sosial untuk chat, berkolaborasi, kurasi dan mencetak photo book dari foto sosial & perangkat." },
      link: "https://play.google.com/store/apps/details?id=com.chaterpress.photoprinting" },
    { name: "Lab Sakura",
      img: "assets/portofolio/lab-sakura.jpg", company: { en: "PT. Selapak Nusa Link", id: "PT. Selapak Nusa Link" }, badge: "company",
      desc: { en: "Mobile platform for online clinics operated by Laboratorium Klinik Sakura.",
              id: "Platform mobile untuk klinik online yang dioperasikan Laboratorium Klinik Sakura." },
      link: "https://play.google.com/store/apps/details?id=com.biosys.labsakura" },
    { name: "Warpattack",
      img: "assets/portofolio/warpattack.png", company: { en: "Personal Project (Game)", id: "Proyek Pribadi (Game)" }, badge: "personal",
      desc: { en: "Android tower-defense game like Dota / Plants vs Zombies with an AI (Fuzzy) logic, built with Unity3D.",
              id: "Game Android tower-defense seperti Dota / Plants vs Zombies dengan logika AI (Fuzzy), dibangun dengan Unity3D." },
      link: "https://play.google.com/store/apps/details?id=com.sinaurobot.warpattack" },
    { name: "Salesku",
      img: "assets/portofolio/salesku.jpg", company: { en: "Alterra", id: "Alterra" }, badge: "company",
      desc: { en: "Sales app for top-up deposits, tracking and analyzing whitelabel AlphaPay online agents.",
              id: "Aplikasi sales untuk top up deposit, melacak dan menganalisis agen online whitelabel AlphaPay." },
      link: "" },
    { name: "Baca Meter",
      img: "assets/portofolio/baca-meter.jpg", company: { en: "BSA (Alterra Company)", id: "BSA (Perusahaan Alterra)" }, badge: "company",
      desc: { en: "Helps PDAM collect meter readings from customers (online & offline mode).",
              id: "Membantu PDAM mengumpulkan angka meteran pelanggan (mode online & offline)." },
      link: "" },
    { name: "Loket Mobile",
      img: "assets/portofolio/loket-mobile.jpg", company: { en: "BSA (Alterra Company)", id: "BSA (Perusahaan Alterra)" }, badge: "company",
      desc: { en: "Helps PDAM collect bills from customers (online & offline mode).",
              id: "Membantu PDAM menagih tagihan pelanggan (mode online & offline)." },
      link: "" }
  ];

  var achievements = [
    { icon: "🎓", title: { en: "Menjadi Android Developer Expert", id: "Menjadi Android Developer Expert" },
      detail: { en: "Expert-level Android developer certification.", id: "Sertifikasi developer Android tingkat expert." },
      year: "—", type: "cert" },
    { icon: "🎓", title: { en: "Kotlin Android Developer Expert", id: "Kotlin Android Developer Expert" },
      detail: { en: "Advanced Kotlin for Android certification by Dicoding.", id: "Sertifikasi Kotlin Android tingkat lanjut oleh Dicoding." },
      year: "—", type: "cert" },
    { icon: "🤖", title: { en: "Advisor Google Bangkit — Android", id: "Advisor Google Bangkit — Android" },
      detail: { en: "Mentor for the Bangkit Android learning track.", id: "Mentor untuk jalur belajar Android Bangkit." },
      year: "2021", type: "ach" },
    { icon: "🏅", title: { en: "Facilitator Google Developer Kejar — Kotlin", id: "Fasilitator Google Developer Kejar — Kotlin" },
      detail: { en: "Facilitated Google Developer Kejar courses on Kotlin for Android.", id: "Memfasilitasi kursus Google Developer Kejar tentang Kotlin untuk Android." },
      year: "2018", type: "ach" },
    { icon: "🥇", title: { en: "Best Participant — Internet of Things Academy", id: "Best Participant — Internet of Things Academy" },
      detail: { en: "Top participant at Comfest 8 IoT Academy.", id: "Peserta terbaik di IoT Academy Comfest 8." },
      year: "2016", type: "ach" },
    { icon: "🤖", title: { en: "National Robotic Competition (AI / Fuzzy)", id: "Kompetisi Robotik Nasional (AI / Fuzzy)" },
      detail: { en: "Participated in national robotic competitions with an AI (Fuzzy) algorithm.", id: "Mengikuti kompetisi robotik nasional dengan algoritma AI (Fuzzy)." },
      year: "2015", type: "ach" }
  ];

  /* ===== Render: Skills ===== */
  function renderSkills() {
    var box = document.getElementById("skills-grid");
    var html = skills.map(function (s) {
      var tags = s.tags.map(function (tg) { return '<span class="skill-tag">' + tg + '</span>'; }).join("");
      return '<div class="skill-card reveal"><h3>' + s.title[currentLang] + '</h3><div class="skill-tags">' + tags + '</div></div>';
    }).join("");
    box.innerHTML = html;
  }

  /* ===== Render: Experience ===== */
  function renderExperience() {
    var box = document.getElementById("timeline");
    var html = experience.map(function (e) {
      var pts = e.points[currentLang].map(function (p) { return "<li>" + p + "</li>"; }).join("");
      return '<div class="tl-item reveal">' +
        '<div class="tl-head"><span class="tl-title">' + e.title[currentLang] + '</span>' +
        '<span class="tl-date">' + e.date[currentLang] + '</span></div>' +
        '<p class="tl-org">' + e.org[currentLang] + ' · ' + e.loc + '</p>' +
        '<div class="tl-desc"><ul>' + pts + '</ul></div>' +
        '</div>';
    }).join("");
    box.innerHTML = html;
  }

  /* ===== Render: Projects ===== */
  function renderProjects() {
    var box = document.getElementById("projects-grid");
    var html = projects.map(function (p) {
      var badgeCls = p.badge === "personal" ? "badge-personal" : "badge-company";
      var badgeText = t("badge." + p.badge);
      var link = p.link
        ? '<a class="project-link" href="' + p.link + '" target="_blank" rel="noopener">' + t("projects.view") + ' →</a>'
        : "";
      var imgs = Array.isArray(p.img) ? p.img : (p.img ? [p.img] : []);
      var imgBox = "";
      if (imgs.length) {
        var thumbs = imgs.map(function (src) {
          return '<img src="' + src + '" alt="' + p.name + ' screenshot" loading="lazy" />';
        }).join("");
        imgBox = '<div class="' + (imgs.length > 1 ? "project-thumbs" : "project-img") + '">' + thumbs + '</div>';
      }
      return '<article class="project-card reveal">' +
        imgBox +
        '<span class="project-badge ' + badgeCls + '">' + badgeText + '</span>' +

        '<h3 class="project-title">' + p.name + '</h3>' +
        '<p class="project-org">' + p.company[currentLang] + '</p>' +
        '<p class="project-desc">' + p.desc[currentLang] + '</p>' + link +
        '</article>';
    }).join("");
    box.innerHTML = html;
  }

  /* ===== Render: Achievements ===== */
  function renderAchievements() {
    var box = document.getElementById("ach-grid");
    var html = achievements.map(function (a) {
      return '<div class="ach-card reveal"><span class="ach-icon">' + a.icon + '</span>' +
        '<div><h3>' + a.title[currentLang] + '</h3>' +
        '<p class="ach-detail">' + a.detail[currentLang] + '</p>' +
        (a.year !== "—" ? '<span class="ach-year">' + a.year + '</span>' : '') +
        '</div></div>';
    }).join("");
    box.innerHTML = html;
  }

  function renderAll() {
    renderSkills();
    renderExperience();
    renderProjects();
    renderAchievements();
    initReveal();
  }

  /* ===== Switch language ===== */
  function switchLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang);
    var btn = document.getElementById("lang-toggle");
    btn.textContent = lang === "en" ? "ID" : "EN";
    btn.setAttribute("aria-label", lang === "en" ? "Switch to Indonesian" : "Switch to English");
    applyStaticTranslations();
    renderAll();
    try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
  }

  /* ===== Reveal on scroll ===== */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { obs.observe(el); });
  }

  function initNavbar() {
    var navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  /* ===== Mobile menu ===== */
  function initMobileMenu() {
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ===== Active nav link on scroll ===== */
  function initActiveLink() {
    var sections = document.querySelectorAll("section[id]");
    var navLinks = document.querySelectorAll(".nav-links a");
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { obs.observe(s); });
  }

  /* ===== Init ===== */
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    var saved = null;
    try { saved = localStorage.getItem("portfolio-lang"); } catch (e) {}
    currentLang = saved === "id" ? "id" : "en"; // English is the default language

    var btn = document.getElementById("lang-toggle");
    btn.textContent = currentLang === "en" ? "ID" : "EN";
    btn.addEventListener("click", function () {
      switchLang(currentLang === "en" ? "id" : "en");
    });

    applyStaticTranslations();
    renderAll();
    initNavbar();
    initMobileMenu();
    initActiveLink();
  });
})();