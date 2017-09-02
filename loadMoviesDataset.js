db = db.getSiblingDB("video");
db.movieDetails.drop();
db.movieDetails.insertMany([
    { "title" : "Jaws", "year" : 1975, "imdb" : "tt0073195" },
    { "title" : "Mad Max 2: The Road Warrior", "year" : 1981, "imdb" : "tt0082694" },
    { "title" : "Raiders of the Lost Ark", "year" : 1981, "imdb" : "tt0082971" },
    { "title" : "El amor en los tiempos del colera", "year" : "2007", "imdb" : "tt0484740" }
]);
