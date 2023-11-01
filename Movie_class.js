class Movie{
  constructor(title,studio,rating="PG"){
    this.title = title;
    this.studio = studio;
    this.rating =  rating;
  }
  getPG(listofmovie){
    return listofmovie.filter((a) => a.rating === "PG");
  }
}
const m1 = new Movie("movie 1","Studio 1","P");
const m2 = new Movie("movie 2","Studio 2","PG");
const m3 = new Movie("movie 3", "Studio 3","PG");
console.log(m3.getPG([m1,m2,m3]));

//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const m4 =  new Movie("Casino Royale", "Eon Productions","PG13");