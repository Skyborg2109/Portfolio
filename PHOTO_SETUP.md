# Setup Foto Profil untuk Website

## Cara Menambahkan Foto Profil:

### 1. Siapkan Foto
- Format yang didukung: JPG, JPEG, PNG, WebP
- Ukuran yang direkomendasikan: 500x500 pixel (minimal)
- Rasio aspek: 1:1 (persegi) untuk hasil terbaik
- Ukuran file: maksimal 2MB

### 2. Upload Foto
- Simpan foto dengan nama: `profile-photo.jpg`
- Letakkan file foto di folder yang sama dengan `index.html`
- Pastikan nama file persis: `profile-photo.jpg`

### 3. Struktur File
```
Portfolio-WillyV2/
├── index.html
├── script.js
├── style.css
├── profile-photo.jpg  ← Foto Anda di sini
└── FORMSPREE_SETUP.md
```

### 4. Format Foto yang Didukung
- ✅ `profile-photo.jpg` (direkomendasikan)
- ✅ `profile-photo.jpeg`
- ✅ `profile-photo.png`
- ✅ `profile-photo.webp`

### 5. Jika Foto Tidak Muncul
- Jika foto tidak ditemukan, akan muncul emoji 👨‍🎓 sebagai fallback
- Pastikan nama file benar dan ada di folder yang sama
- Cek apakah file foto tidak rusak

### 6. Tips Foto Profil
- Gunakan foto yang jelas dan profesional
- Pastikan wajah terlihat jelas
- Hindari foto yang terlalu gelap atau blur
- Gunakan background yang sederhana

### 7. Mengubah Nama File
Jika ingin menggunakan nama file berbeda, edit baris ini di `index.html`:
```html
<img src="NAMA_FILE_ANDA.jpg" alt="Willy Juaness" class="w-full h-full object-cover rounded-full">
```

### 8. Test Website
- Refresh halaman website
- Foto profil akan muncul di bagian atas (hero section)
- Jika foto tidak muncul, cek console browser untuk error
