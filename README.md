# Pe Store — Website Streetwear

Website katalog Pe Store dibuat dengan HTML, CSS, dan JavaScript. Desain responsif untuk desktop dan HP, filter kategori produk, serta tombol pemesanan WhatsApp.

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `pe-store-website`.
3. Buka `index.html` di browser. Untuk pengalaman pengembangan yang lebih baik, gunakan ekstensi Live Server di Visual Studio Code.

## WAJIB: atur nomor WhatsApp
Buka `script.js`, cari baris:
```js
const WHATSAPP_NUMBER = "6281234567890";
```
Ganti dengan nomor WhatsApp toko kamu, gunakan kode negara Indonesia `62`, tanpa tanda `+`, spasi, atau tanda hubung.
Contoh format: `6281234567890`.

## Cara mengubah produk
Di bagian atas `script.js`, edit array `products`. Untuk setiap produk, ubah:
- `name`: nama produk
- `category`: `Kaos`, `Hoodie`, `Jaket`, atau `Celana`
- `price`: harga dalam angka rupiah, tanpa titik
- `tag`: label opsional
- `image`: URL foto produk
- `description`: deskripsi produk

Ganti harga dan foto contoh dengan data asli sebelum dipublikasikan. Foto contoh menggunakan URL gambar eksternal sehingga membutuhkan internet.

## Cara mengubah tampilan
Edit `style.css`. Warna utama ada di variabel CSS paling atas:
- `--bg`: warna latar
- `--text`: warna teks
- `--lime`: aksen hijau neon

## Cara memublikasikan
Kamu dapat mengunggah folder ini ke layanan hosting statis seperti GitHub Pages, Netlify, atau Vercel. Domain khusus bisa ditambahkan sesuai fitur penyedia hosting.

## Catatan
- Website ini merupakan katalog front-end, belum menyimpan pesanan ke database dan belum memiliki sistem pembayaran otomatis.
- Pesanan dikirim melalui WhatsApp setelah pembeli mengeklik tombol produk.
- Pastikan nomor WhatsApp, foto, stok, harga, kebijakan pengiriman, dan informasi toko benar sebelum website diluncurkan.
