# Setup Social Media Links di Footer

## 📱 Ikon Social Media yang Sudah Ditambahkan

Website Anda sekarang memiliki 3 ikon social media di footer:
- **Instagram** (gradient purple-pink)
- **Facebook** (biru)
- **WhatsApp** (hijau)

## 🔗 Cara Mengatur Link Social Media

### 1. Instagram
Edit baris ini di `index.html`:
```html
<a href="https://instagram.com/your_username" target="_blank" class="...">
```
Ganti `your_username` dengan username Instagram Anda.

### 2. Facebook
Edit baris ini di `index.html`:
```html
<a href="https://facebook.com/your_username" target="_blank" class="...">
```
Ganti `your_username` dengan username Facebook Anda.

### 3. WhatsApp
Link WhatsApp sudah diset ke nomor Anda:
```html
<a href="https://wa.me/6282226506493" target="_blank" class="...">
```
Jika ingin mengubah nomor, ganti `6282226506493` dengan nomor WhatsApp Anda.

## 🎨 Fitur Ikon Social Media

### ✅ Efek Visual:
- **Hover Scale**: Ikon membesar saat di-hover
- **Gradient Instagram**: Warna ungu-pink yang menarik
- **Smooth Transitions**: Animasi halus saat hover
- **Target Blank**: Link terbuka di tab baru

### ✅ Responsive Design:
- Ikon tetap proporsional di semua device
- Spacing yang konsisten
- Touch-friendly untuk mobile

## 📝 Contoh Link yang Benar

### Instagram:
```
https://instagram.com/willyjuaness
https://instagram.com/willy.juaness
```

### Facebook:
```
https://facebook.com/willyjuaness
https://facebook.com/willy.juaness.patudang
```

### WhatsApp:
```
https://wa.me/6282226506493
https://wa.me/6281234567890
```

## 🔧 Customization

### Mengubah Warna Ikon:
Edit class CSS di `index.html`:

**Instagram:**
```html
class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
```

**Facebook:**
```html
class="bg-blue-600 hover:bg-blue-700"
```

**WhatsApp:**
```html
class="bg-green-500 hover:bg-green-600"
```

### Menambah Social Media Lain:
Jika ingin menambah Twitter, YouTube, dll, copy format yang ada dan sesuaikan:
```html
<a href="https://twitter.com/your_username" target="_blank" class="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all transform hover:scale-110">
    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <!-- SVG path untuk Twitter -->
    </svg>
</a>
```

## ✅ Test Social Media Links

1. **Refresh website**
2. **Scroll ke footer**
3. **Klik ikon social media**
4. **Pastikan link terbuka di tab baru**
5. **Test di mobile dan desktop**

## 🎯 Tips

- **Gunakan username yang konsisten** di semua platform
- **Pastikan akun social media aktif** dan ter-update
- **Test link secara berkala** untuk memastikan masih berfungsi
- **Gunakan nomor WhatsApp yang aktif** untuk respon cepat

---

**Sekarang footer website Anda sudah memiliki ikon social media yang menarik dan fungsional!** 🚀
