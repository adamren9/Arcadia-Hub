// ================== HERO CAROUSEL ==================
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
  });
}

// Cart state (you can later persist this in localStorage or sync with backend)
let cartItemCount = parseInt(localStorage.getItem('cartCount')) || 0;

// Function to update ALL cart count displays
function updateCartDisplay() {
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cartItemCount;
  });
// Optional: Save to localStorage so it persists on refresh
localStorage.setItem('cartCount', cartItemCount);
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);

// Example: Function to add item to cart
function addToCart() {
  cartItemCount++;
  updateCartDisplay();
}

// Example: Function to remove item from cart
function removeFromCart() {
  if (cartItemCount > 0) {
    cartItemCount--;
    updateCartDisplay();
  }
}

  // Optional: Expose functions globally for easy testing or button onclick
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;

// ================== GAME DATA ==================
const games = {
  "elder-realms": {
    title: "Elder Realms V",
    image: "images/Elden.jpg",
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i5-8400 / Ryzen 5 1600</li>
        <li><b>Memory:</b> 8 GB RAM</li>
        <li><b>Graphics:</b> GTX 1060 / RX 580</li>
        <li><b>Storage:</b> 60 GB available space</li>
      </ul>
    `,
    price: 29.99
  },
  "cyberraiders": {
    title: "CyberRaiders Online",
    image: "images/Cyber.jpg",
    trailer: "https://www.youtube.com/embed/qIcTM8WXFjk",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i7-9700 / Ryzen 7 2700X</li>
        <li><b>Memory:</b> 16 GB RAM</li>
        <li><b>Graphics:</b> RTX 2060 / RX 5700</li>
        <li><b>Storage:</b> 80 GB available space</li>
      </ul>
    `,
    price: 39.99
  },
  "kingdom-quest": {
    title: "Kingdom Quest",
    image: "images/kingdom.jpg",
    trailer: "https://www.youtube.com/embed/tpnuBdG9txM",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i5-10400 / Ryzen 5 3600</li>
        <li><b>Memory:</b> 12 GB RAM</li>
        <li><b>Graphics:</b> GTX 1660 / RX 5600 XT</li>
        <li><b>Storage:</b> 70 GB available space</li>
      </ul>
    `,
    price: 49.99
  },
  "space-elite": {
    title: "Space Elite",
    image: "images/Space.jpg",
    trailer: "https://www.youtube.com/embed/IuIxQs21wZc",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i5-9600K / Ryzen 5 2600</li>
        <li><b>Memory:</b> 8 GB RAM</li>
        <li><b>Graphics:</b> GTX 1070 / RX Vega 56</li>
        <li><b>Storage:</b> 50 GB available space</li>
      </ul>
    `,
    price: 19.99
    
  },
   "shadow-blade": {
    title: "Shadow Blade: Reload",
     image: "images/Shadow.jpg",
    trailer: "https://www.youtube.com/embed/hwhPePK7axU", // sample trailer
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 7/8/10</li>
        <li><b>Processor:</b> Intel Core 2 Duo</li>
        <li><b>Memory:</b> 4 GB RAM</li>
        <li><b>Graphics:</b> GTX 750 / Radeon HD 7770</li>
        <li><b>Storage:</b> 8 GB available space</li>
      </ul>
    `,
    price: 24.99
  },
  "galactic-racers": {
    title: "Galactic Racers",
     image: "images/Galactic.jpg",
    trailer: "https://www.youtube.com/embed/_5YISoyL5Nk",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i5-9400 / Ryzen 5 2600</li>
        <li><b>Memory:</b> 8 GB RAM</li>
        <li><b>Graphics:</b> GTX 1060 / RX 590</li>
        <li><b>Storage:</b> 20 GB available space</li>
      </ul>
    `,
    price: 14.99
  },
   "dark-legends": {
    title: "Dark Legends",
      image: "images/Dark.jpg",
    trailer: "https://www.youtube.com/embed/fHMjAjR_9jg",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10/11</li>
        <li><b>Processor:</b> Intel i7-8700K / Ryzen 5 3600X</li>
        <li><b>Memory:</b> 16 GB RAM</li>
        <li><b>Graphics:</b> RTX 2060 / RX 6600</li>
        <li><b>Storage:</b> 70 GB available space</li>
      </ul>
    `,
    price: 34.99
  },
  "mech-warfare": {
    title: "Mech Wars",
      image: "images/Mech.jpg",
    trailer: "https://www.youtube.com/embed/oKn_Nmoxqts",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10/11</li>
        <li><b>Processor:</b> Intel i5-9600K / Ryzen 5 3600</li>
        <li><b>Memory:</b> 12 GB RAM</li>
        <li><b>Graphics:</b> GTX 1660 Ti / RX 5600 XT</li>
        <li><b>Storage:</b> 55 GB available space</li>
      </ul>
    `,
    price: 44.99
  },
 "ancient-ruins": {
    title: "Ancient Ruins",
     image: "images/Ancient.jpg",
    trailer: "https://www.youtube.com/embed/tWxX5d70Axk",
    requirements: `
      <ul>
        <li><b>OS:</b> Windows 10</li>
        <li><b>Processor:</b> Intel i5-8400 / Ryzen 5 2600</li>
        <li><b>Memory:</b> 8 GB RAM</li>
        <li><b>Graphics:</b> GTX 1050 Ti / RX 570</li>
        <li><b>Storage:</b> 25 GB available space</li>
      </ul>
    `,
    price: 29.99
  }
  // 👉 you can keep adding more games here the same way
};

// ================== GAME DETAIL PAGE ==================
const gameContainer = document.getElementById('game-container');

if (gameContainer) {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get('id');
  const game = games[gameId];

  if (game) {
    gameContainer.innerHTML = `
      <h1>${game.title}</h1>
      <div class="game-detail-layout">
        <div class="cover-image">
          <img src="${game.image}" alt="${game.title}" style="max-width:100%; border-radius:10px; margin-bottom:20px;">
        </div>
        <div class="trailer">
          <iframe width="560" height="315" src="${game.trailer}" 
            title="YouTube trailer" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <h2>System Requirements</h2>
      ${game.requirements}
      <h2>Price: $${game.price}</h2>
      <button class="add-to-cart" data-id="${gameId}">Add to Cart</button>
    `;

    // Add to cart button listener
    document.querySelector('.add-to-cart').addEventListener('click', () => {
      addToCart(gameId);
    });
  } else {
    gameContainer.innerHTML = "<p>Game not found.</p>";
  }
}

// ================== CART SYSTEM ==================
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(gameId) {
  let cart = getCart();
  cart.push(gameId);
  saveCart(cart);
  alert("✅ Added to cart!");
}

function updateCartCount() {
  const cart = getCart();
  const cartCount = document.querySelector('.cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

// ================== CART PAGE ==================
const cartContainer = document.getElementById('cart-container');

if (cartContainer) {
  let cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartContainer.innerHTML = `
      <h1>Your Cart</h1>
      <ul>
        ${cart.map((id, index) => {
          const g = games[id];
          return `
            <li>
              <b>${g.title}</b> - $${g.price}
              <button onclick="removeFromCart(${index})">Remove</button>
            </li>
          `;
        }).join('')}
      </ul>
      <h2>Total: $${cart.reduce((sum, id) => sum + games[id].price, 0).toFixed(2)}</h2>
    `;
  }
}

function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  location.reload(); // refresh cart page
}

// Initialize cart count on every page
updateCartCount();
