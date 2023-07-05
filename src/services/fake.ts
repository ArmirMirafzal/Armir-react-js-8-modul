const movies = [
  {
    _id: "64a15418339f4396f30ff99b",
    title: "Airplane",
    genre: {
      name: "Comedy",
      _id: "64a15418339f4396f30ff999",
    },
    numberInStock: 5,
    dailyRentalRate: 2,
    username: "boburbekXX",
  },
  {
    _id: "64a15418339f4396f30ff99d",
    title: "The Hangover",
    genre: {
      name: "Comedy",
      _id: "64a15418339f4396f30ff999",
    },
    numberInStock: 10,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff99f",
    title: "Wedding Crashers",
    genre: {
      name: "Comedy",
      _id: "64a15418339f4396f30ff999",
    },
    numberInStock: 15,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9a4",
    title: "Die Hard",
    genre: {
      name: "Action",
      _id: "64a15418339f4396f30ff9a2",
    },
    numberInStock: 5,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9a6",
    title: "Terminator",
    genre: {
      name: "Action",
      _id: "64a15418339f4396f30ff9a2",
    },
    numberInStock: 10,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9a8",
    title: "The Avengers",
    genre: {
      name: "Action",
      _id: "64a15418339f4396f30ff9a2",
    },
    numberInStock: 15,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9ad",
    title: "The Notebook",
    genre: {
      name: "Romance",
      _id: "64a15418339f4396f30ff9ab",
    },
    numberInStock: 5,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9af",
    title: "When Harry Met Sally",
    genre: {
      name: "Romance",
      _id: "64a15418339f4396f30ff9ab",
    },
    numberInStock: 10,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9b1",
    title: "Pretty Woman",
    genre: {
      name: "Romance",
      _id: "64a15418339f4396f30ff9ab",
    },
    numberInStock: 15,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9b6",
    title: "The Sixth Sense",
    genre: {
      name: "Thriller",
      _id: "64a15418339f4396f30ff9b4",
    },
    numberInStock: 5,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9b8",
    title: "Gone Girl",
    genre: {
      name: "Thriller",
      _id: "64a15418339f4396f30ff9b4",
    },
    numberInStock: 10,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
  {
    _id: "64a15418339f4396f30ff9ba",
    title: "The Others",
    genre: {
      name: "Thriller",
      _id: "64a15418339f4396f30ff9b4",
    },
    numberInStock: 15,
    dailyRentalRate: 2,
    username: "arslonbekXX",
  },
];

const genres = [
  {
    _id: "64a15418339f4396f30ff9a2",
    name: "Action",
  },
  {
    _id: "64a15418339f4396f30ff999",
    name: "Comedy",
  },
  {
    _id: "64a15418339f4396f30ff9ab",
    name: "Romance",
  },
  {
    _id: "64a15418339f4396f30ff9b4",
    name: "Thriller",
  },
];

export const getMovies = () => {
  return [...movies];
};
export const getGenres = async () => {
  await new Promise((res) => setTimeout(() => res(""), 800));

  return [...genres];
};
