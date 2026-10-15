/*
  PE STORE — pengaturan utama:
  1. Ganti nomor WhatsApp di WHATSAPP_NUMBER.
  2. Ganti foto, nama, kategori, dan harga produk pada array products.
  Nomor WhatsApp harus memakai kode negara tanpa tanda + atau spasi, contoh 6281234567890.
*/
const WHATSAPP_NUMBER = "6288216682193"; // GANTI dengan nomor WhatsApp toko kamu

const products = [
  {
    id: 1, name: "Graphic Future Tee", category: "Kaos", price: 149000, tag: "Best seller",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=85",
    description: "Kaos streetwear dengan graphic statement, nyaman untuk dipakai sehari-hari."
  },
  {
    id: 2, name: "Essential Oversized Tee", category: "Kaos", price: 129000, tag: "Everyday",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
    description: "Kaos oversized dengan siluet santai dan mudah dipadukan."
  },
  {
    id: 3, name: "Core Pullover Hoodie", category: "Hoodie", price: 229000, tag: "New drop",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
    description: "Hoodie nyaman untuk layering dan gaya streetwear harian."
  },
  {
    id: 4, name: "Daily Zip Hoodie", category: "Hoodie", price: 249000, tag: "",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=85",
    description: "Hoodie praktis dengan gaya clean untuk berbagai suasana."
  },
  {
    id: 5, name: "Varsity Club Jacket", category: "Jaket", price: 329000, tag: "Limited",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    description: "Jaket statement untuk membuat outfit sederhana lebih standout."
  },
  {
    id: 6, name: "Utility Cargo Pants", category: "Celana", price: 219000, tag: "",
    image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=800&q=85",
    description: "Celana bergaya utilitarian yang cocok untuk outfit streetwear."
  },
  {
    id: 7, name: "Logo Heavyweight Tee", category: "Kaos", price: 159000, tag: "",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=85",
    description: "Kaos dengan feel tebal dan look minimal yang versatile."
  },
  {
    id: 8, name: "Street Coach Jacket", category: "Jaket", price: 289000, tag: "New",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=85",
    description: "Jaket ringan untuk melengkapi look streetwear kamu."
  }
];

const productGrid = document.querySelector("#productGrid");
const filters = document.querySelector("#filters");
const toast = document.querySelector("#toast");

function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(value);
}

function renderProducts(category = "Semua") {
  const visibleProducts = category === "Semua"
    ? products
    : products.filter(product => product.category === category);

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <div class="product-title-row"><h3 class="product-title">${product.name}</h3></div>
        <p class="product-price">${formatRupiah(product.price)}</p>
        <button class="order-button" data-product-id="${product.id}">
          PESAN VIA WHATSAPP <span>↗</span>
        </button>
      </div>
    </article>
  `).join("");
}

function openWhatsApp(product) {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "6281234567890") {
    showToast("Ganti nomor WhatsApp toko di file script.js terlebih dahulu.");
    return;
  }
  const message = [
    "Halo Pe Store! Saya ingin memesan produk:",
    `Produk: ${product.name}`,
    `Kategori: ${product.category}`,
    `Harga: ${formatRupiah(product.price)}`,
    "",
    "Apakah produk ini tersedia? Saya juga ingin konfirmasi ukuran dan warna.",
    "Terima kasih."
  ].join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3500);
}

filters.addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.filter);
});

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;
  const product = products.find(item => item.id === Number(button.dataset.productId));
  if (product) openWhatsApp(product);
});

document.querySelector(".whatsapp-general").addEventListener("click", event => {
  event.preventDefault();
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "6281234567890") {
    showToast("Ganti nomor WhatsApp toko di file script.js terlebih dahulu.");
    return;
  }
  const message = encodeURIComponent("Halo Pe Store! Saya ingin bertanya tentang koleksi dan produk yang tersedia.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
});

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelector("#year").textContent = new Date().getFullYear();
renderProducts();
