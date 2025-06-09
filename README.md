# 🍽️ QuickDine – Sistem Pemesanan Makanan Digital  
**Kelompok 11 - SBD**

---

## 👥 Anggota Kelompok

| Nama                 | NPM        | Tugas                               |
|----------------------|------------|-------------------------------------|
| Neyla Shakira        | 2306250655 | Membuat Backend dan README          |
| Isyana Trevia Pohaci | 2306250592 | Membuat Admin Page dan Backend      |
| Grace Yunike M. S.         | 2306267031 | Membuat Frontend, Admin Page dan README     |
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

## 7. 🧭 Cara Menggunakan QuickDine

### 👥 Untuk Pelanggan:

1. **Akses aplikasi QuickDine** melalui QR code di meja atau link yang diberikan oleh restoran.
2. **Lihat menu digital** secara lengkap, termasuk gambar, harga, dan kategori makanan/minuman.
3. **Pilih menu** yang diinginkan dan tambahkan ke keranjang.
4. **Kirim pesanan langsung** ke sistem dapur tanpa perlu menunggu pelayan.
5. **Reservasi meja** juga dapat dilakukan langsung dari aplikasi (jika belum datang ke restoran).
6. **Pantau status pesanan** secara real-time hingga pesanan selesai disiapkan.
7. **Lakukan pembayaran digital** setelah pesanan selesai, sesuai instruksi dari restoran.

### 🛠️ Untuk Admin / Pengelola Restoran:

1. **Login ke dashboard admin** untuk mengakses sistem.
2. **Kelola menu makanan & minuman** (tambah, ubah, atau hapus produk).
3. **Pantau pesanan masuk** secara real-time dan terus perbarui statusnya.
4. **Kelola reservasi pelanggan** dengan mudah melalui tabel reservasi.
5. **Perbarui ketersediaan menu** atau status dapur sesuai operasional harian.



---

## 8. 📁 Page pada Website

### A. Login Page (Login as Admin)
![Login Page](https://hackmd.io/_uploads/BJGf3bN7gg.jpg) 
### B. Home Page
![home page QuickDine](https://hackmd.io/_uploads/H1fkIW47xg.png)
### C. Menu Page
![Page Menu](https://hackmd.io/_uploads/B1oAvW47xl.png)
### D. Reservation Page
![Reservation Page](https://hackmd.io/_uploads/S1Fw_W4mlx.png)
### E. Contact Page
![Contact Page](https://hackmd.io/_uploads/ryUnO-4Qel.png)
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

---

```bash
Terima kasih telah menggunakan QuickDine!
```
