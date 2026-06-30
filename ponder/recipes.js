const recipes = [
  {
    name: "Apple Crisp",
    stub: "apple_crisp",
    imgSrc: "images/apple-crisp.jpg",
    imgAlt: "Apple Crisp dessert",
    tags: ["dessert", "fall", "baked"],
    rating: 4,
    description:
      "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
  },
  {
    name: "Black Beans and Rice",
    stub: "black_beans_and_rice",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/black-beans-and-rice.jpg",
    imgAlt: "Black Beans and Rice dish",
    tags: ["dinner", "vegetarian", "cuban"],
    rating: 4,
    description:
      "A hearty, flavorful dish of seasoned black beans served over rice, simple and satisfying."
  },
  {
    name: "Chicken Curry",
    stub: "chicken_curry",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/chicken-curry.webp",
    imgAlt: "Chicken Curry dish",
    tags: ["dinner", "curry", "spicy", "indian"],
    rating: 5,
    description:
      "A rich, fragrant chicken curry simmered in warm spices and served best with rice or naan."
  },
  {
    name: "Chocolate Chip Cookies",
    stub: "chocolate_chip_cookies",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/chocolate-chip-cookies.jpg",
    imgAlt: "Chocolate Chip Cookies",
    tags: ["dessert", "baked", "cookies"],
    rating: 5,
    description:
      "Classic soft and chewy chocolate chip cookies, perfect for an everyday treat."
  },
  {
    name: "Excalopes de Poulet a la Creme",
    stub: "escalopes_de_poulet_a_la_creme",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/escalopes-de-poulet-a-la-creme.webp",
    imgAlt: "Escalopes de Poulet a la Creme dish",
    tags: ["dinner", "french", "chicken"],
    rating: 4,
    description:
      "Tender chicken escalopes in a creamy French-style sauce, elegant and easy to prepare."
  },
  {
    name: "German Gooseberry Cake",
    stub: "german_gooseberry_cake",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/german-gooseberry-cake.jpg",
    imgAlt: "German Gooseberry Cake",
    tags: ["dessert", "baked", "german", "cake"],
    rating: 4,
    description:
      "A traditional German cake topped with tart gooseberries and a soft, buttery crumb."
  },
  {
    name: "Roasted Potatoes",
    stub: "roasted_potatoes",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/roasted-potatoes.webp",
    imgAlt: "Roasted Potatoes",
    tags: ["side", "vegetarian", "baked"],
    rating: 4,
    description:
      "Crispy on the outside, fluffy on the inside — golden roasted potatoes seasoned to perfection."
  },
  {
    name: "Sweet Potato Waffles",
    stub: "sweet_potato_waffles",
    imgSrc: "https://wddbyui.github.io/wdd131/images/recipe2/sweet-potato-waffle-md.jpg",
    imgAlt: "Sweet Potato Waffles",
    tags: ["breakfast", "waffles", "sweet potato"],
    rating: 5,
    description:
      "Fluffy waffles made with sweet potato for a naturally sweet, cozy breakfast option."
  }
];

let recipeContainer = document.querySelector('#recipe-container');
let input = document.querySelector('#search');
let button = document.querySelector('#search-button');

button.addEventListener('click', search);

input.addEventListener('keypress', handleEnter);
function handleEnter(event) {
  if (event.key === 'Enter') {
    search();
  }
}

function search() {

  let searchQuery = input.value;

  let filteredRecipes = recipes.filter(function (recipe) {
    return (
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  function compareRecipes(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  let sortedRecipes = filteredRecipes.sort(compareRecipes);

  // clear out any previous content
  recipeContainer.innerHTML = '';
  // output onto screen
  sortedRecipes.forEach(function (recipe) {
    renderRecipe(recipe);
  });
}

function tagTemplate(tags) {
  return tags.map(tag => `<p class="tag">${tag}</p>`).join(' ');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<div class="recipe">
  <img src="${recipe.imgSrc}" alt="${recipe.imgAlt}">
  <div class="recipe-info">
    ${tagTemplate(recipe.tags)}
    <h2>${recipe.name}</h2>
    ${ratingTemplate(recipe.rating)}
    <p class="description">${recipe.description}</p>
  </div>
</div>`;
}

function renderRecipe(recipe) {
  let html = recipeTemplate(recipe);
  recipeContainer.innerHTML += html;
}

function init() {
  let randomNum = Math.floor(Math.random() * recipes.length);
  renderRecipe(recipes[randomNum]);
}

init();