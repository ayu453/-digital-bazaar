const categories = [
  { id: "fashion", name: "Fashion", icon: "👗", line: "Find your signature style", personality: "The Style Setter", greeting: "Arre, welcome! Looking for a fresh look? Let me show you something stylish.", tone: "Friendly, expressive and style-conscious" },
  { id: "electronics", name: "Electronics", icon: "🎧", line: "Smart tech. Smarter deals.", personality: "The Tech Expert", greeting: "Welcome. Tell me what matters most: performance, features or your budget?", tone: "Knowledgeable, clear and practical" },
  { id: "shoes", name: "Shoes", icon: "👟", line: "Step into something new", personality: "The Sneaker Pro", greeting: "Hey! Ready for a fresh pair? Let's find the right fit and a fair deal.", tone: "Energetic and sporty" },
  { id: "beauty", name: "Beauty", icon: "🪞", line: "A little glow goes a long way", personality: "The Beauty Guide", greeting: "Welcome in! Let's find something that fits your routine and your budget.", tone: "Helpful and reassuring" },
  { id: "furniture", name: "Furniture", icon: "🛋️", line: "Make room for better living", personality: "The Home Planner", greeting: "Come in. Are we furnishing a cosy corner or planning a whole room?", tone: "Practical and thoughtful" },
  { id: "grocery", name: "Grocery", icon: "🥭", line: "Everyday picks, fair prices", personality: "The Straight Talker", greeting: "Namaste! Fresh everyday essentials, without the unnecessary fuss.", tone: "Simple and direct" },
  { id: "jewellery", name: "Jewellery", icon: "💍", line: "A touch of something special", personality: "The Fine Collector", greeting: "A pleasure to have you. Looking for an everyday accent or something special?", tone: "Premium and sophisticated" },
  { id: "home-decor", name: "Home Decor", icon: "🏺", line: "Give your space a story", personality: "The Creative Curator", greeting: "Welcome! Let's find a piece that gives your space a little more character.", tone: "Creative and imaginative" }
];

// Clearly labelled demonstration catalogue. No real sellers or live inventory yet.
const demoProducts = {
  fashion: [["Everyday Cotton Kurta","₹899","Breathable everyday style","🧥"],["Classic Linen Shirt","₹1,299","An easy smart-casual layer","👔"],["Printed Summer Dress","₹1,499","A bright weekend favourite","👗"]],
  electronics: [["Wireless Earbuds","₹1,799","Compact audio for everyday use","🎧"],["Smart LED Desk Lamp","₹1,199","Adjustable light for your desk","💡"],["Bluetooth Speaker","₹2,499","Portable sound for your space","🔊"]],
  shoes: [["Streetwear Sneakers","₹1,999","Everyday street-ready comfort","👟"],["Classic Running Shoes","₹2,299","Lightweight daily training style","🏃"],["Canvas Slip-ons","₹899","Easy-going casual footwear","🥿"]],
  beauty: [["Daily Glow Face Serum","₹699","A simple skincare routine pick","🧴"],["Hydrating Face Cream","₹549","Everyday moisture care","🫧"],["Soft Matte Lip Colour","₹399","A pop of colour for your look","💄"]],
  furniture: [["Compact Study Desk","₹4,999","A practical work-from-home setup","🪑"],["Accent Lounge Chair","₹7,499","A cosy reading corner upgrade","🛋️"],["Bedside Table","₹2,299","Keep essentials close at hand","🗄️"]],
  grocery: [["Premium Basmati Rice 5kg","₹599","A pantry staple for family meals","🍚"],["Cold-Pressed Groundnut Oil","₹249","A kitchen everyday essential","🫙"],["Assorted Dry Fruits 500g","₹449","A snack-time mix","🥜"]],
  jewellery: [["Minimal Silver Pendant","₹1,899","A subtle everyday accent","📿"],["Classic Hoop Earrings","₹799","An easy-to-style pair","✨"],["Statement Kundan Set","₹3,499","Festive-inspired occasion wear","💎"]],
  "home-decor": [["Handcrafted Ceramic Vase","₹899","A sculptural shelf accent","🏺"],["Woven Cushion Cover Set","₹699","A softer touch for your sofa","🧶"],["Warm Ambient Table Light","₹1,499","A gentle evening glow","🪔"]]
};

const grid = document.querySelector("#categoryGrid");
const toast = document.querySelector("#toast");
const shopView = document.querySelector("#shopView");
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
      <b>${category.name}</b><small>${category.line}</small>
      <span class="category-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
}

function openShop(categoryId) {
  const category = categories.find(item => item.id === categoryId);
  if (!category) return;
  const products = demoProducts[categoryId] || [];
  document.querySelectorAll("main > section:not(#shopView)").forEach(section => section.hidden = true);
  shopView.hidden = false;
  shopView.innerHTML = `
    <button class="back-market" type="button" id="backToMarket">← Back to all market streets</button>
    <div class="shop-heading">
      <div><div class="eyebrow">DIGITAL BAZAAR · DEMO SHOP</div>
      <h2>${category.icon} ${category.name} <em>Street</em></h2>
      <p>Explore sample products and meet your category shopkeeper.</p></div>
      <span class="demo-pill">DEMO CATALOGUE</span>
    </div>
    <div class="shopkeeper">
      <div class="shopkeeper-avatar">${category.icon}</div>
      <div><div class="shopkeeper-label">YOUR SHOPKEEPER · ${category.personality}</div>
      <p class="shopkeeper-greeting">“${category.greeting}”</p>
      <small>Personality: ${category.tone}</small></div>
    </div>
    <div class="catalogue-heading"><div><h3>Explore the collection</h3><p>Illustrative products and prices for the V1 prototype.</p></div>
      <label class="product-search"><span>⌕</span><input id="productSearch" type="search" placeholder="Search this street..." aria-label="Search products"></label></div>
    <div class="product-grid" id="productGrid">${products.map((product,index) => `
      <article class="product-card" data-search="${(product[0]+" "+product[2]).toLowerCase()}">
        <div class="product-art"><span>${product[3]}</span><small>DEMO ITEM</small></div>
        <div class="product-info"><h4>${product[0]}</h4><p>${product[2]}</p><div class="product-bottom"><b>${product[1]}</b><button type="button" class="offer-soon" data-product="${product[0]}">Negotiate soon</button></div></div>
      </article>`).join("")}</div>
    <p class="catalogue-disclaimer">These are sample listings, not purchasable products. Seller listings, live stock and protected-price bargaining are coming in later milestones.</p>`;
  document.querySelector("#backToMarket").addEventListener("click", closeShop);
  document.querySelector("#productSearch").addEventListener("input", event => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll(".product-card").forEach(card => card.hidden = !card.dataset.search.includes(query));
  });
  document.querySelectorAll(".offer-soon").forEach(button => button.addEventListener("click", () => showToast("Live bargaining is planned for a later milestone.")));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeShop() {
  shopView.hidden = true;
  document.querySelectorAll("main > section:not(#shopView)").forEach(section => section.hidden = false);
  document.querySelector("#categories").scrollIntoView({ behavior: "smooth" });
}

grid.addEventListener("click", event => {
  const card = event.target.closest("[data-category]");
  if (card) openShop(card.dataset.category);
});
document.querySelector("#exploreBtn").addEventListener("click", () => document.querySelector("#categories").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#enterMarket").addEventListener("click", () => document.querySelector("#categories").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#sellerBtn").addEventListener("click", () => showToast("Seller shop creation is the next seller-side milestone."));
document.querySelector("#menuToggle").addEventListener("click", () => document.querySelector("#categories").scrollIntoView({ behavior: "smooth" }));

renderCategories();
