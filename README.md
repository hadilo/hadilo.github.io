# Muhammad Nur Hadi — Android Engineer Portfolio

Web portofolio statis satu halaman (single-page) untuk **Android Engineer**, dibangun dengan HTML, CSS, dan JavaScript murni. **Bilingual (English default, bisa switch ke Bahasa Indonesia)** dan dioptimalkan untuk SEO.

Live: `https://<YOUR-USERNAME>.github.io/narsis-page/`

---

## ✨ Fitur

- ⚡ Satu halaman statis ringan tanpa framework / build step.
- 🌐 **Bilingual** EN ⇄ ID (English default), pilihan bahasa tersimpan di `localStorage`.
- 📱 Mobile-first & responsive.
- 🔍 SEO: meta description, Open Graph, Twitter Card, semantic HTML, JSON-LD (Person structured data).
- 🧭 Sticky navbar, active-link highlight, smooth scroll, reveal-on-scroll.
- 🗂️ Konten dinamis (skills, experience, projects, achievements) driven oleh data di `script.js`.

## 📁 Struktur

```
├── index.html      # Struktur & SEO meta
├── styles.css      # Styling (mobile-first)
├── script.js       # Data konten + logika (bilingual, render, interaksi)
└── assets/         # Foto profil & gambar (perlu kamu isi)
```

## 🚀 Cara Deploy ke GitHub Pages

### Opsi A — Deploy manual dari branch
1. Buat repo publik baru di GitHub, mis. `narsis-page`.
2. Jalankan perintah berikut di folder project:
   ```bash
   git add .
   git commit -m "feat: initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/narsis-page.git
   git push -u origin main
   ```
3. Di GitHub: **Settings → Pages → Source = Deploy from a branch → branch `main`, folder `/ (root)`** → Save.
4. Tunggu beberapa saat, situs tampil di `https://<YOUR-USERNAME>.github.io/narsis-page/`.

### Opsi B — Auto-deploy via GitHub Actions
1. Tambahkan file `.github/workflows/deploy.yml` (contoh di bawah).
2. Push ke `main`. GitHub Actions otomatis build & deploy ke Pages.
3. Aktifkan **Settings → Pages → Source = GitHub Actions**.

**Contoh workflow `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deploy
        uses: actions/deploy-pages@v4
```

## ✏️ Cara Kustomisasi

- **Ganti username GitHub**: edit semua placeholder `<YOUR-USERNAME>` di `index.html` (canonical, og:url, og:image) dan di README.
- **Bahasa**: semua teks statis ada di objek `i18n` pada `script.js`, konten dinamis ada di array `skills`, `experience`, `projects`, `achievements`.
- **Foto profil**: letakkan `assets/profile.jpg` (boleh juga ubah nama file & referensi di `index.html`).
- **Proyek tanpa link**: beberapa proyek di CV tidak punya link Play Store → tidak menampilkan tombol. Tambahkan `link` di `script.js` jika punya.

## 📌 Catatan
- File `Muhammad Nur Hadi - Android Engineer.pdf` tidak ikut di-commit (ada di `.gitignore`).
- URL `github.com/` pada link GitHub masih placeholder — ganti dengan url GitHub-mu yang asli.
- Situs ini tidak butuh build step; cukup push dan aktifkan Pages.

---
© Muhammad Nur Hadi · Android Engineer Portfolio