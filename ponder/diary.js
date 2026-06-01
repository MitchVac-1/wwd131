const movies = [
  {
    title: "Diary of a Wimpy Kid",
    date: "April 1, 2007",
    description: "Greg Heffley begins his middle school journey, documenting his awkward, hilarious, and relatable experiences.",
    imgSrc: "wimpy_kid.webp",
    imgAlt: "Diary of a Wimpy Kid book cover",
    ages: "8+",
    genre: "Humor/Children's Fiction",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    title: "Diary of a Wimpy Kid: Rodrick Rules",
    date: "February 1, 2008",
    description: "Greg deals with sibling rivalry as Rodrick makes his life miserable, leading to chaos and family drama.",
    imgSrc: "wimpy_kid2.webp",
    imgAlt: "Rodrick Rules book cover",
    ages: "8+",
    genre: "Humor/Children's Fiction",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Diary of a Wimpy Kid: The Last Straw",
    date: "January 13, 2009",
    description: "Greg’s dad threatens military school unless Greg toughens up, pushing him into a series of hilarious attempts at self‑improvement.",
    imgSrc: "diaryofakid.webp",
    imgAlt: "The Last Straw book cover",
    ages: "8+",
    genre: "Humor/Children's Fiction",
    stars: "⭐⭐⭐⭐"
  },
  {
    title: "Diary of a Wimpy Kid: Dog Days",
    date: "October 12, 2009",
    description: "Greg wants a lazy summer indoors, but his mom forces him into outdoor activities, family drama, and embarrassing moments.",
    imgSrc: "dogdays.webp",
    imgAlt: "Dog Days book cover",
    ages: "8+",
    genre: "Humor/Children's Fiction",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const movieList = document.querySelector('#movie-list');

movies.forEach(movie => {
  const article = document.createElement('article');
  article.classList.add('movie');

  article.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
    <p><strong>Release Date:</strong> ${movie.date}</p>
    <p><strong>Recommended Age:</strong> ${movie.ages}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Rating:</strong> ${movie.stars}</p>
    <p>${movie.description}</p>
  `;

  movieList.appendChild(article);
});
