const categories = [
  { id: "fashion", name: "Fashion", icon: "👗", line: "Find your signature style", personality: "The Style Setter" },
  { id: "electronics", name: "Electronics", icon: "🎧", line: "Smart tech. Smarter deals.", personality: "The Tech Expert" },
  { id: "shoes", name: "Shoes", icon: "👟", line: "Step into something new", personality: "The Sneaker Pro" },
  { id: "beauty", name: "Beauty", icon: "🪞", line: "A little glow goes a long way", personality: "The Beauty Guide" },
  { id: "furniture", name: "Furniture", icon: "🛋️", line: "Make room for better living", personality: "The Home Planner" },
  { id: "grocery", name: "Grocery", icon: "🥭", line: "Everyday picks, fair prices", personality: "The Straight Talker" },
  { id: "jewellery", name: "Jewellery", icon: "💍", line: "A touch of something special", personality: "The Fine Collector" },
  { id: "home-decor", name: "Home Decor", icon: "🏺", line: "Give your space a story", personality: "The Creative Curator" }
];

const grid = document.querySelector("#categoryGrid");
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderCategories() {
  grid.innerHTML = categories.map(category => `
    <button class="category-card" type="button" data-category="${category.id}" aria-label="Explore ${category.name}">
      <span class="category-icon" aria-hidden="true">${category.icon}</span>
      <b>${category.name}</b>
      <small>${category.line}</small>
      <span class="category-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("");
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-category]");
  if (!card) return;
  const category = categories.find(item => item.id === card.dataset.category);
  if (category) showToast(`${category.name} Street is coming alive in the next build.`);
});

document.querySelector("#exploreBtn").addEventListener("click", () => {
  document.querySelector("#categories").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#enterMarket").addEventListener("click", () => {
  document.querySelector("#categories").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#sellerBtn").addEventListener("click", () => {
  showToast("Seller shop creation is planned for Phase 2.");
});
document.querySelector("#menuToggle").addEventListener("click", () => {
  showToast("Use the market sections below to explore Digital Bazaar.");
});

renderCategories();