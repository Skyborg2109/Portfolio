# Setup Formspree untuk Form Kontak

## Langkah-langkah Setup:

### 1. Daftar di Formspree
- Kunjungi [formspree.io](https://formspree.io)
- Daftar akun baru atau login jika sudah punya

### 2. Buat Form Baru
- Klik "New Form"
- Beri nama form (misal: "Portfolio Contact Form")
- Pilih email tujuan (email Anda)

### 3. Dapatkan Form ID
- Setelah form dibuat, Anda akan mendapat Form ID
- Format: `xrgjqkab` atau `xrgjqkab@email.com`

### 4. Update HTML
- Buka file `index.html`
- Cari baris: `<form action="https://formspree.io/f/xpwlvpld" method="POST" id="contactForm" class="space-y-6">`
- Ganti `xpwlvpld` dengan Form ID yang Anda dapatkan

### Contoh:
```html
<form action="https://formspree.io/f/xrgjqkab" method="POST" id="contactForm" class="space-y-6">
```

### 5. Test Form
- Upload file ke hosting
- Test kirim pesan
- Cek email Anda untuk konfirmasi

## Fitur Form:
- ✅ Nama pengirim
- ✅ Email pengirim  
- ✅ Kategori pesan (Akademik/Musik/Gaming/Umum)
- ✅ Pesan
- ✅ Validasi form
- ✅ Loading state
- ✅ Success/Error messages
- ✅ Auto-reset form setelah berhasil

## Troubleshooting:
- Pastikan Form ID benar
- Cek spam folder untuk email konfirmasi
- Pastikan form diupload ke hosting (tidak bisa test di local file)
- Cek console browser untuk error messages
