const movies = [
  {
    title: "The Shawshank Redemption",
    releaseDate: 1994,
    rating: 9.2,
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    title: "The Godfather",
    releaseDate: 1972,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    title: "The Dark Knight",
    releaseDate: 2008,
    rating: 8.5,
    actors: ["Christian Bale", "Heath Ledger", "Gary Oldman"]
  },
  {
    title: "Pulp Fiction",
    releaseDate: 1994,
    rating: 7.8,
    actors: ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    releaseDate: 2003,
    rating: 8.9,
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
  },
  {
    title: "12 Angry Men",
    releaseDate: 1957,
    rating: 6.2,
    actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"]
  }
];

// ------------------------------------------------------------------------------ //
// Opdracht 1a: Log het eerste object in de 'movies' array

// Verwacht antwoord:
// {
//     title: "The Shawshank Redemption",
//     releaseDate: 1994,
//     rating: 9.2,
//     actors: [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ]
// }

console.log('Opdracht 1');

console.log(movies[0]);


// Opdracht 1b: Log de titel van het eerste object in de 'movies' array

// Verwacht antwoord:
// The Shawshank Redemption
console.log(movies[0].title);


// ------------------------------------------------------------------------------ //
// Opdracht 2a: Log de hoeveel films er in de 'movies' array staan (de lengte van de array). Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken. Je mag dus niet zelf tellen!

// Verwacht antwoord:
// 6
console.log('\nOpdracht 2')
console.log(movies.length)

// Opdracht 2b: Log het indexnummer van de laatste film in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!

// Verwacht antwoord:
// 5

console.log(movies.length - 1);

// Opdracht 2c: Log het laatste object in de 'movies' array. Let op: wanneer de array langer of korter wordt, moet dit nog steeds werken!
// Tip: maak gebruik van de code die je in de vorige opdracht hebt gemaakt.

// Verwacht antwoord:
// {
//     title: '12 Angry Men',
//     releaseDate: 1957,
//     rating: 6.2,
//     actors: [ 'Henry Fonda', 'Lee J. Cobb', 'Martin Balsam' ]
// }

console.log(movies[movies.length - 1]);

// ------------------------------------------------------------------------------ //
// Opdracht 3a: Log de lijst van acteurs uit van de film "Pulp Fiction" uit de 'movies' array.

// Verwachte antwoord:
// ["John Travolta", "Samuel L. Jackson", "Uma Thurman"]
console.log('\nOpdracht 3');

for (let i = 0; i < movies.length; i++) {
  if(movies[i].title === "Pulp Fiction") {
    for (let j = 0; j < movies[i].actors.length; j++) {
      console.log(movies[i].actors[j]);
    }
  }
}

// Opdracht 3b: Log de tweede acteur van de film "The Shawshank Redemption". Tip: je spreekt dus eerst de array, daarna het object en vervolgens weer een array aan.

// Verwacht antwoord:
// Morgan Freeman

for (let i = 0; i < movies.length; i++) {
  if (movies[i].title === "The Shawshank Redemption") {
    console.log(movies[i].actors[1]);
  }
}

// Opdracht 3c: Log de laatste acteur van de laatste film in 'movies' array. Let op: wanneer de array langer of korter wordt, of wanneer er meer of minder acteurs in dit rijtje staan, moet dit nog steeds werken!
// Tip: gebruik hiervoor o.a. jouw code uit 2b voor.

// Verwacht antwoord:
// Martin Balsam

for (let i = 0; i < movies.length; i++) {
  if (i === movies.length -1) {
    console.log(movies[i].actors[movies[i].actors.length -1]);
  }
}

// ------------------------------------------------------------------------------ //
// Opdracht 4a: Maak een if-else-statement die het woord 'Uitstekende film!!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Goede film!' logt, wanneer deze lager is.
// Zorg dat je de onderstaande variabele gebruikt en pas eventueel het entry-nummer aan,
// om te kijken of je algoritme ook werkt wanneer je een andere film selecteert!

console.log('\nOpdracht 4');
const selectedMovie = movies[3];

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

if (selectedMovie.rating > 8) {
  console.log("Uitstekende film");
} else {
  console.log('Goede film!');
}

// Opdracht 4b: Maak een if-else-if-else-statement die het woord 'Topper!' logt,
// wanneer een film een hoger cijfer krijgt dan een 8 en het woord 'Kijktip!' logt, wanneer deze een 8 of lager is,
// maar wel hoger dan een 6 en een 'Matige film' logt bij een lager cijfer dan 6.
// Gebruik weer de variabele uit de vorige opdracht.
// Tip: gebruik de && selector als het getal binnen twee condities moet vallen

// Verwacht antwoord bij 'const selectedMovie = movies[0]':
// Uitstekende film!!

// Verwacht antwoord bij 'const selectedMovie = movies[3]':
// Goede film!

// Verwacht antwoord bij 'const selectedMovie = movies[5]':
// Matige film

if ( selectedMovie.rating > 8) {
  console.log("Topper!");
} else if (selectedMovie.rating > 6 && selectedMovie.rating <= 8) {
  console.log('Kijktip!');
} else {
  console.log('Matige film')
}

