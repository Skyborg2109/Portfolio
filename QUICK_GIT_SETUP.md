# 🚀 Cara Cepat Upload Project ke GitHub

## ⚡ Solusi Tercepat

### 1. Install Git (Cara Manual)
1. **Buka browser** dan kunjungi: https://git-scm.com/download/win
2. **Klik** "Click here to download" (64-bit Git for Windows Setup)
3. **Download** file installer
4. **Jalankan installer** dengan klik kanan → "Run as administrator"
5. **Klik Next** dengan semua default settings
6. **Restart PowerShell** setelah selesai

### 2. Test Git
```powershell
git --version
```

### 3. Setup Git
```powershell
git config --global user.name "Willhelmus Juaness Patudang"
git config --global user.email "willyjuaness@gmail.com"
```

### 4. Buat Repository di GitHub
1. **Buka**: https://github.com
2. **Login** dengan akun GitHub Anda
3. **Klik** tombol hijau "New repository"
4. **Isi**:
   - Repository name: `Portfolio-WillyV2`
   - Description: `Portfolio website - Student, Organist, Gamer`
   - **JANGAN** centang apapun
5. **Klik** "Create repository"

### 5. Upload Project
```powershell
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/Skyborg2109/Portfolio-WillyV2.git
git branch -M main
git push -u origin main
```

## 🔧 Jika Masih Error

### Error: "git is not recognized"
- **Restart PowerShell** setelah install Git
- **Restart komputer** jika masih bermasalah

### Error: "fatal: remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/Skyborg2109/Portfolio-WillyV2.git
```

### Error: Authentication failed
1. **Buka GitHub** → Settings → Developer settings → Personal access tokens
2. **Generate new token** (classic)
3. **Copy token** dan gunakan sebagai password

## 🌐 Setelah Berhasil Upload

### Aktifkan GitHub Pages:
1. **Buka repository** di GitHub
2. **Klik** Settings
3. **Scroll ke** Pages
4. **Source**: Deploy from a branch
5. **Branch**: main
6. **Save**

### Website Live di:
```
https://skyborg2109.github.io/Portfolio-WillyV2
```

## 📞 Bantuan Cepat

Jika masih bermasalah:
1. **Screenshot error** dan kirim ke saya
2. **Cek** apakah Git sudah terinstall dengan benar
3. **Pastikan** koneksi internet stabil

---
**Ikuti langkah-langkah di atas dengan teliti!** 🎯

