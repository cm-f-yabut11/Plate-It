const recipes = [
  {
    id: "adobo",
    title: "Chicken Adobo",
    img: "images/Chicken_Adobo.png",
    time: "45 mins",
    rating: "★★★★★",
    ingredients: [
      "1 kg chicken",
      "1/2 cup soy sauce",
      "1/4 cup vinegar",
      "4 cloves garlic",
      "1 tsp peppercorns",
      "2 bay leaves"
    ],
    steps: [
      "Marinate chicken in soy sauce, vinegar, and garlic for 30 mins.",
      "Simmer until tender with bay leaves and peppercorns.",
      "Reduce sauce and serve hot with rice."
    ]
  },
  {
    id: "sinigang",
    title: "Sinigang na Baboy",
    img: "images/Sinigang.png",
    time: "50 mins",
    rating: "★★★★☆",
    ingredients: [
      "500g pork belly",
      "Tamarind mix",
      "Tomatoes",
      "Kangkong",
      "Radish",
      "Eggplant"
    ],
    steps: [
      "Boil pork until tender.",
      "Add tamarind mix and vegetables.",
      "Simmer and serve hot."
    ]
  },
  {
    id: "kare",
    title: "Kare-Kare",
    img: "images/karekare.png",
    time: "1 hr 20 mins",
    rating: "★★★★★",
    ingredients: [
      "Oxtail",
      "Peanut butter",
      "Banana heart",
      "Eggplant",
      "String beans",
      "Shrimp paste"
    ],
    steps: [
      "Boil oxtail until soft.",
      "Add peanut butter mixture.",
      "Serve with bagoong."
    ]
  },
  {
    id: "sisig",
    title: "Pampanga Sisig",
    img: "images/sisig.png",
    time: "40 mins",
    rating: "★★★★★",
    ingredients: ["Pork mask", "Onion", "Chili", "Mayonnaise", "Egg"],
    steps: [
      "Grill and chop pork.",
      "Sauté with onion and chili.",
      "Serve sizzling with egg."
    ]
  },
  {
    id: "lumpia",
    title: "Lumpiang Shanghai",
    img: "images/shanghai.png",
    time: "35 mins",
    rating: "★★★★☆",
    ingredients: ["Ground pork", "Carrots", "Onion", "Wrapper", "Garlic"],
    steps: ["Mix filling, wrap, and deep fry until golden."]
  },
  {
    id: "beef-caldereta",
    title: "Beef Caldereta",
    img: "images/beef_caldereta.png",
    time: "1 hr 10 mins",
    rating: "★★★★★",
    ingredients: [
      "1 kg beef chuck",
      "1 cup tomato sauce",
      "1/2 cup liver spread",
      "Potatoes",
      "Carrots",
      "Bell peppers"
    ],
    steps: [
      "Sear beef until browned.",
      "Add tomato sauce and simmer until tender.",
      "Stir in liver spread and vegetables; cook until thickened."
    ]
  },
  {
    id: "bicol-express",
    title: "Bicol Express",
    img: "images/bicol_express.png",
    time: "50 mins",
    rating: "★★★★☆",
    ingredients: [
      "Pork belly",
      "Coconut milk",
      "Chili peppers",
      "Shrimp paste",
      "Garlic",
      "Onion"
    ],
    steps: [
      "Sauté onion and garlic.",
      "Add pork and cook until light brown.",
      "Pour coconut milk, add chili and shrimp paste, and simmer."
    ]
  },
  {
    id: "tinola",
    title: "Tinolang Manok",
    img: "images/tinola.png",
    time: "40 mins",
    rating: "★★★★★",
    ingredients: [
      "Chicken pieces",
      "Green papaya",
      "Ginger",
      "Moringa leaves",
      "Fish sauce",
      "Water"
    ],
    steps: [
      "Sauté ginger and garlic.",
      "Add chicken and fish sauce.",
      "Pour water, add papaya and moringa leaves, simmer until tender."
    ]
  },
  {
    id: "sushi-rolls",
    title: "Sushi Rolls",
    img: "images/sushi_rolls.png",
    time: "50 mins",
    rating: "★★★★★",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Cucumber",
      "Crab stick",
      "Avocado",
      "Soy sauce"
    ],
    steps: [
      "Lay nori sheet on bamboo mat.",
      "Spread rice evenly, add fillings.",
      "Roll tightly and slice; serve with soy sauce."
    ]
  },
  {
    id: "ramen",
    title: "Japanese Ramen",
    img: "images/ramen.png",
    time: "1 hr 15 mins",
    rating: "★★★★★",
    ingredients: [
      "Ramen noodles",
      "Pork broth",
      "Soy sauce",
      "Egg",
      "Chashu pork",
      "Scallions"
    ],
    steps: [
      "Simmer pork bones for broth.",
      "Season with soy sauce and miso.",
      "Cook noodles and serve topped with egg and chashu."
    ]
  },
  {
    id: "pad-thai",
    title: "Pad Thai",
    img: "images/pad_thai.png",
    time: "35 mins",
    rating: "★★★★☆",
    ingredients: [
      "Rice noodles",
      "Shrimp",
      "Bean sprouts",
      "Eggs",
      "Peanuts",
      "Tamarind sauce"
    ],
    steps: [
      "Soak rice noodles until soft.",
      "Stir-fry shrimp, eggs, and sauce.",
      "Add noodles and bean sprouts, toss with peanuts."
    ]
  },
  {
    id: "pho",
    title: "Vietnamese Pho",
    img: "images/pho.png",
    time: "1 hr 30 mins",
    rating: "★★★★★",
    ingredients: [
      "Rice noodles",
      "Beef bones",
      "Star anise",
      "Cinnamon stick",
      "Onions",
      "Beef slices"
    ],
    steps: [
      "Simmer bones with spices for broth.",
      "Cook noodles separately.",
      "Serve noodles in broth topped with beef and herbs."
    ]
  },
  {
    id: "bibimbap",
    title: "Bibimbap",
    img: "images/bibimbap.png",
    time: "45 mins",
    rating: "★★★★☆",
    ingredients: [
      "Rice",
      "Ground beef",
      "Carrots",
      "Spinach",
      "Egg",
      "Gochujang sauce"
    ],
    steps: [
      "Sauté vegetables and beef separately.",
      "Arrange over rice with fried egg.",
      "Top with gochujang sauce and mix before eating."
    ]
  },
  {
    id: "lasagna",
    title: "Classic Lasagna",
    img: "images/lasagna.png",
    time: "1 hr 30 mins",
    rating: "★★★★★",
    ingredients: [
      "Lasagna noodles",
      "Ground beef",
      "Tomato sauce",
      "Ricotta cheese",
      "Mozzarella",
      "Parmesan"
    ],
    steps: [
      "Cook noodles; brown beef with sauce.",
      "Layer noodles, sauce, and cheese in a pan.",
      "Bake for 45 mins until bubbly and golden."
    ]
  },
  {
    id: "chicken-parmesan",
    title: "Chicken Parmesan",
    img: "images/chicken_parmesan.png",
    time: "50 mins",
    rating: "★★★★☆",
    ingredients: [
      "Chicken breast",
      "Breadcrumbs",
      "Marinara sauce",
      "Mozzarella",
      "Parmesan"
    ],
    steps: [
      "Bread chicken and fry until golden.",
      "Top with marinara and cheese.",
      "Bake until cheese melts; serve with pasta."
    ]
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    img: "images/tiramisu.png",
    time: "2 hrs (chill time included)",
    rating: "★★★★★",
    ingredients: [
      "Ladyfingers",
      "Mascarpone",
      "Coffee",
      "Cocoa powder",
      "Egg yolks",
      "Sugar"
    ],
    steps: [
      "Whip egg yolks and sugar; fold in mascarpone.",
      "Dip ladyfingers in coffee, layer with cream.",
      "Dust cocoa on top; chill before serving."
    ]
  },
  {
    id: "cheesecake",
    title: "New York Cheesecake",
    img: "images/cheesecake.png",
    time: "1 hr 30 mins",
    rating: "★★★★★",
    ingredients: [
      "Cream cheese",
      "Sugar",
      "Eggs",
      "Graham crust",
      "Vanilla extract",
      "Sour cream"
    ],
    steps: [
      "Prepare crust and bake lightly.",
      "Blend filling and pour over crust.",
      "Bake in water bath; cool and chill overnight."
    ]
  }
];

const extraRecipes = [
  "Blueberry Pancakes", "Chocolate Lava Cake", "Menudo", "Chicken Afritada", "Pochero",
  "Spaghetti Bolognese", "Beef Stroganoff", "Butter Chicken", "Samosa", "Greek Salad",
  "Seafood Risotto", "Chicken Curry", "Beef Rendang", "Laksa", "Paella",
  "Beef Burger", "Grilled Cheese", "Tuna Sandwich", "Mac and Cheese", "Club Sandwich",
  "Garlic Fried Rice", "Crispy Chicken", "Teriyaki Salmon", "Mango Float", "Halo-Halo",
  "Leche Flan", "Ube Halaya", "Turon", "Buko Pandan", "Mochi Ice Cream", "Waffles",
  "Avocado Toast", "Pasta Carbonara", "Clam Chowder", "Ratatouille"
];

extraRecipes.forEach((name) => {
  const id = name.toLowerCase().replace(/\s+/g, "_");
  recipes.push({
    id,
    title: name,
    img: `images/${id}.png`,
    time: `${25 + Math.floor(Math.random() * 45)} mins`,
    rating: ["★★★★☆", "★★★★★", "★★★☆☆"][Math.floor(Math.random() * 3)],
    ingredients: [
      "Fresh, locally sourced ingredients depending on the dish."
    ],
    steps: [
      "Follow classic preparation for this recipe.",
      "Cook or bake as required.",
      "Serve beautifully and enjoy!"
    ]
  });
});

let currentPage = 1;
const recipesPerPage = 24;
const totalPages = Math.ceil(recipes.length / recipesPerPage);

function loadRecipePage() {
  renderPageButtons();
  showRecipes();
}

function showRecipes() {
  const container = document.getElementById("recipe-grid");
  container.innerHTML = "";
  const start = (currentPage - 1) * recipesPerPage;
  const end = start + recipesPerPage;
  const pageRecipes = recipes.slice(start, end);

  pageRecipes.forEach((r) => {
    const img = new Image();
    img.src = r.img;
    img.onerror = () =>
      (img.src = `https://source.unsplash.com/600x400/?${encodeURIComponent(
        r.title
      )},food`);

    const card = document.createElement("div");
    card.className = "recipe-card";
    card.onclick = () => viewRecipe(r.id);

    card.innerHTML = `
      <img src="${img.src}" alt="${r.title}">
      <h3>${r.title}</h3>
      <p>${r.time} | ${r.rating}</p>
    `;
    container.appendChild(card);
  });

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

function renderPageButtons() {
  const pageButtons = document.getElementById("page-buttons");
  pageButtons.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active-page");
    btn.onclick = () => {
      currentPage = i;
      showRecipes();
      renderPageButtons();
    };
    pageButtons.appendChild(btn);
  }
}

function changePage(offset) {
  currentPage = Math.min(totalPages, Math.max(1, currentPage + offset));
  showRecipes();
  renderPageButtons();
}

function viewRecipe(id) {
  localStorage.setItem("selectedRecipe", id);
  window.location.href = "recipe.html";
}

function loadRecipe() {
  const id = localStorage.getItem("selectedRecipe");
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    document.body.innerHTML = "<h2>Recipe not found.</h2>";
    return;
  }

  document.getElementById("recipe-title").innerText = recipe.title;
  document.getElementById("recipe-img").src = recipe.img;
  document.getElementById(
    "recipe-meta"
  ).innerText = `${recipe.time} | ${recipe.rating}`;
  document.getElementById("recipe-ingredients").innerHTML =
    recipe.ingredients.map((i) => `<li>${i}</li>`).join("");
  document.getElementById("recipe-steps").innerHTML = recipe.steps
    .map((s) => `<li>${s}</li>`)
    .join("");
}

function surpriseMe() {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  localStorage.setItem("selectedRecipe", random.id);
  window.location.href = "recipe.html";
}

window.addEventListener("DOMContentLoaded", () => {
  const quick = document.getElementById("quick-recipes");
  if (!quick) return;

  const sample = recipes.slice(0, 6);
  sample.forEach((r) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.onclick = () => viewRecipe(r.id);
    card.innerHTML = `
      <img src="${r.img}" alt="${r.title}">
      <h3>${r.title}</h3>
    `;
    quick.appendChild(card);
  });
});

function handleAddRecipe(event) {
  event.preventDefault();

  const newRecipe = {
    id: Date.now().toString(),
    title: document.getElementById("new-title").value,
    img:
      document.getElementById("new-img").value ||
      "https://source.unsplash.com/600x400/?recipe,food",
    time: document.getElementById("new-time").value,
    rating: document.getElementById("new-rating").value,
    ingredients: document.getElementById("new-ingredients").value.split(","),
    steps: document.getElementById("new-steps").value.split(",")
  };

  let saved = JSON.parse(localStorage.getItem("userRecipes") || "[]");
  saved.push(newRecipe);
  localStorage.setItem("userRecipes", JSON.stringify(saved));

  alert("✅ Recipe added! It will appear next time you reload.");
  event.target.reset();
}
