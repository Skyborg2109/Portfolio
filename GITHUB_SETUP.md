# Panduan Upload Project ke GitHub

## 🚀 Langkah-langkah Lengkap

### 1. Install Git di Windows

#### Cara 1: Download Manual
1. **Kunjungi**: https://git-scm.com/download/win
2. **Download**: Git for Windows (64-bit)
3. **Install**: Jalankan installer dengan default settings
4. **Restart**: Restart PowerShell/Command Prompt

#### Cara 2: Menggunakan Microsoft Store
1. **Buka Microsoft Store**
2. **Search**: "Git"
3. **Install**: "Git for Windows"
4. **Restart**: Restart PowerShell

### 2. Verifikasi Git Terinstall
```powershell
git --version
```
Jika berhasil, akan muncul: `git version 2.43.0.windows.1`

### 3. Setup Git (Pertama Kali)
```powershell
git config --global user.name "Willhelmus Juaness Patudang"
git config --global user.email "willyjuaness@gmail.com"
```

### 4. Buat Repository di GitHub
1. **Kunjungi**: https://github.com
2. **Login** ke akun GitHub Anda
3. **Klik**: "New repository" (tombol hijau)
4. **Isi**:
   - Repository name: `Portfolio-WillyV2`
   - Description: `Portfolio website - Student, Organist, Gamer`
   - **JANGAN** centang "Add a README file"
   - **JANGAN** centang "Add .gitignore"
   - **JANGAN** centang "Choose a license"
5. **Klik**: "Create repository"

### 5. Upload Project ke GitHub

#### Di PowerShell, jalankan perintah ini satu per satu:

```powershell
# 1. Inisialisasi Git repository
git init

# 2. Tambahkan semua file ke staging
git add .

# 3. Commit pertama
git commit -m "Initial commit: Portfolio website"

# 4. Tambahkan remote repository (ganti YOUR_USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-WillyV2.git

# 5. Push ke GitHub
git branch -M main
git push -u origin main
```

### 6. Contoh Lengkap dengan Username GitHub
```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/Skyborg2109/Portfolio-WillyV2.git
git branch -M main
git push -u origin main
```

## 🔧 Troubleshooting

### Jika Git masih tidak dikenali:
1. **Restart PowerShell** setelah install Git
2. **Restart komputer** jika masih bermasalah
3. **Cek PATH**: Pastikan Git ada di System Environment Variables

### Jika ada error "fatal: not a git repository":
```powershell
git init
```

### Jika ada error "fatal: remote origin already exists":
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Portfolio-WillyV2.git
```

### Jika ada error authentication:
1. **Gunakan Personal Access Token**:
   - Buka GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token
   - Copy token dan gunakan sebagai password

## 📁 File yang Akan Diupload
```
Portfolio-WillyV2/
├── index.html              ✅
├── script.js               ✅
├── style.css               ✅
├── profile-photo.jpg       ✅ (jika ada)
├── FORMSPREE_SETUP.md      ✅
├── PHOTO_SETUP.md          ✅
├── SOCIAL_MEDIA_SETUP.md   ✅
├── GITHUB_SETUP.md         ✅
└── README.md               ✅
```

## 🌐 Setelah Upload Berhasil

### 1. Aktifkan GitHub Pages
1. **Buka repository** di GitHub
2. **Klik**: Settings
3. **Scroll ke**: Pages
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Folder**: / (root)
7. **Save**

### 2. Website Live
Website Anda akan tersedia di:
```
https://YOUR_USERNAME.github.io/Portfolio-WillyV2
```

## 🎯 Tips
- **Backup**: Selalu backup project sebelum upload
- **Commit Message**: Gunakan pesan yang jelas dan deskriptif
- **Update Regular**: Commit dan push perubahan secara berkala
- **README**: Pastikan README.md informatif dan lengkap

## 📞 Bantuan
Jika masih ada masalah, cek:
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Help](https://help.github.com/)
- [Git for Windows](https://gitforwindows.org/)

---
**Selamat! Portfolio website Anda akan segera live di GitHub!** 🚀

