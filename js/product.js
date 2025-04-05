document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#product-container");
    const page = document.body.dataset.page; // like 'sports-balls', 'padel', or 'rubber-line'
  
    fetch(`./products/data/${page}.json`)
      .then(res => res.json())
      .then(data => {
        data.categories.forEach(category => {
          const categorySection = document.createElement("section");
          categorySection.classList.add("category-section");
  
          const heading = document.createElement("h2");
          heading.textContent = category.name;
          heading.classList.add("category-heading");
          categorySection.appendChild(heading);
  
          const productsGrid = document.createElement("div");
          productsGrid.classList.add("products-grid");
  
          category.products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
  
            card.innerHTML = `
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="product-model">Model: ${product.model}</span>
              </div>
            `;
  
            productsGrid.appendChild(card);
          });
  
          categorySection.appendChild(productsGrid);
          container.appendChild(categorySection);
        });
  
        gsap.from(".product-card", {
          opacity: 0,
          y: 50,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        });
      })
      .catch(err => {
        container.innerHTML = "<p class='error'>Failed to load products. Please try again later.</p>";
        console.error("Error loading products:", err);
      });
  });
  