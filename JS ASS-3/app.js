// Array of movie data objects
const movies = [
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: 9.3,
      releaseYear: 1994
    },
    {
      title: "The Godfather",
      genre: "Crime",
      rating: 9.2,
      releaseYear: 1972
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      releaseYear: 2008
    },
    {
      title: "12 Angry Men",
      genre: "Drama",
      rating: 8.9,
      releaseYear: 1957
    }
  ];

  // Function to filter movies based on user preferences
  function filterMovies(genre, rating, releaseYear) {
    return movies.filter(movie => {
      return (
        movie.genre === genre &&
        movie.rating >= rating &&
        movie.releaseYear >= releaseYear
      );
    });
  }

  // DOM manipulation to capture user input and validate it
  const form = document.querySelector("#preferences-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const genre = document.querySelector("#genre-select").value;
    const rating = parseFloat(document.querySelector("#rating-input").value);
    const releaseYear = parseInt(
      document.querySelector("#year-input").value
    );
    if (isNaN(rating) || isNaN(releaseYear)) {
      alert("Please enter valid values for rating and release year.");
      return;
    }
    const filteredMovies = filterMovies(genre, rating, releaseYear);
    displayMovies(filteredMovies);
  });

  // Function to display recommended movies
  function displayMovies(movies) {
    const section = document.querySelector("#recommended-movies");
    section.innerHTML = "";
    movies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.classList.add(movie.genre.toLowerCase());
      movieDiv.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
        <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
      `;
      section.appendChild(movieDiv);
    });
  }

  // Closure to manage private movie data
  (function() {
    const movies = [
      {
        title: "The Matrix",
        genre: "Action",
        rating: 8.7,
        releaseYear: 1999
      },
      {
        title: "The Silence of the Lambs",
        genre: "Thriller",
        rating: 8.6,
        releaseYear: 1991
      }
    ];
  })();