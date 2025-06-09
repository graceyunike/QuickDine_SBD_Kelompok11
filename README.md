# 🍽️ QuickDine – Sistem Pemesanan Makanan Digital  
**Kelompok 11 - SBD**

---

## 👥 Anggota Kelompok

| Nama                 | NPM        | Tugas                               |
|----------------------|------------|-------------------------------------|
| Neyla Shakira        | 2306250655 | Membuat Backend dan README          |
| Isyana Trevia Pohaci | 2306250592 | Membuat Admin Page dan Backend      |
| Grace Yunike         | 2306267031 | Membuat Frontend dan Admin Page     |
| Stevie Nathania      | 2306242382 | Membuat Backend dan README          |

---

## 1. 📌 Apa itu QuickDine?

**QuickDine** adalah aplikasi pemesanan makanan digital yang memungkinkan pelanggan memesan makanan langsung dari meja mereka melalui pemindaian QR code. Tanpa harus menunggu pelayan, pelanggan dapat memilih menu, memesan, dan melakukan pembayaran secara langsung melalui aplikasi. Proyek ini bertujuan untuk meningkatkan efisiensi layanan restoran dan memberikan pengalaman pelanggan yang lebih cepat, praktis, dan modern.

---

## 2. 🎯 Masalah yang Diselesaikan

- Mengurangi antrian dan waktu tunggu di restoran
- Mempercepat alur pemesanan makanan
- Menghindari kesalahan pencatatan pesanan
- Mendukung digitalisasi transaksi di restoran

---

## 3. 👥 Target Pengguna QuickDine

- Pelanggan restoran
- Pelayan dan staf dapur
- Admin/manajemen restoran

---

## 4. ⚙️ Fitur-Fitur Utama

- 🔐 **Autentikasi Pengguna** (Login/Register dengan JWT)
- 📲 **Scan QR Code** untuk akses menu dari meja
- 📋 **Lihat & Pilih Menu Makanan**
- 🧾 **Buat Pesanan Secara Real-Time**
- ⏱️ **Tracking Status Pesanan** (pending, in progress, completed)
- 💳 **Pembayaran Digital** (simulasi/dummy)
- 📦 **Manajemen Menu & Pesanan** oleh admin

---

## 5. 🛠️ Tech Stack

| Komponen     | Teknologi                                 |
|--------------|--------------------------------------------|
| **Frontend** | React.js, Tailwind CSS, Vite               |
| **Backend**  | Node.js, Express.js                        |
| **Database** | MongoDB (menggunakan Mongoose ODM)         |
| **Auth**     | JSON Web Token (JWT)                       |
| **Deploy**   | Docker, Docker Compose                     |

---

## 6. 🚀 Cara Menjalankan Aplikasi

### 🔧 Jalankan Secara Manual

#### Backend:
```bash
cd backend
npm install
npm run start
```

#### Frontend:
```bash
cd frontend
npm install
npm run dev
```

### 🐳 Jalankan dengan Docker
Pastikan Docker & Docker Compose telah terinstal.
```bash
docker-compose up --build
```

Akses:
- Frontend: `http://localhost:5143`
- Backend API: `http://localhost:7000`

---

## 7. 🧭 Cara Menggunakan Aplikasi

1. **Pelanggan scan QR code** yang terdapat di meja.
2. Akses menu digital melalui browser atau aplikasi.
3. **Login** (jika belum punya akun, daftar terlebih dahulu).
4. **Pilih menu** makanan & minuman sesuai keinginan.
5. **Kirim pesanan**, sistem mencatat dan mengirimkan ke dapur.
6. **Pantau status pesanan** hingga selesai.
7. Lakukan **pembayaran digital** setelah pesanan selesai.

> Akun diperlukan untuk melakukan pemesanan dan pembayaran.

---

## 8. 📁 Struktur Folder

```
QuickDine_SBD_Kelompok11/
├── admin/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
├── src/
│   ├── index.html
│   ├── App.jsx, dsb
├── docker-compose.yml
├── package.json
├── vite.config.js
└── README.md
```

---

## 9. 🔗 API Endpoint Penting

| Endpoint              | Method | Deskripsi                                 |
|-----------------------|--------|-------------------------------------------|
| `/auth/register`      | POST   | Registrasi akun baru                      |
| `/auth/login`         | POST   | Login pengguna                            |
| `/menu/`              | GET    | Mendapatkan seluruh daftar menu           |
| `/order/create`       | POST   | Membuat pesanan baru                      |
| `/order/status/:id`   | GET    | Melihat status pesanan berdasarkan ID     |

---

## 10. 👨‍💻 Tim Pengembang

**QuickDine** dikembangkan oleh:  
**Kelompok 11 - Mata Kuliah Sistem Basis Data**  
📅 Tahun Pembuatan: 2025  
📄 Lisensi: © 2025 QuickDine Kelompok 11. All rights reserved.

---

```bash
Terima kasih telah menggunakan QuickDine!
```
