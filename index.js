updateHTMLContent('Titanic')

function updateHTMLContent(movieName) {
  let currentMovie = movies[movieName]
  let title = document.getElementById('title')
  let director = document.getElementById('director')
  let genre = document.getElementById('genre')
  let filmRating = document.getElementById('filmRating')
  let poster = document.getElementById('poster')
  let description = document.getElementById('description')
  let audienceScore = document.getElementById('audienceScore')
  let cast = document.getElementById('cast')  
  let reviews = document.getElementById("reviews")
  
  title.innerHTML = currentMovie.title
  director.innerHTML = currentMovie.director
  genre.innerHTML = currentMovie.genre
  filmRating.innerHTML = currentMovie.filmRating
  poster.setAttribute('src', currentMovie.poster)
  description.innerHTML = currentMovie.description
  audienceScore.innerHTML = currentMovie.audienceScore
  let castInnerHTML = ""
  let reviewInnerHTML = ""
  
  for (let castMember of currentMovie.cast) {
    let role = castMember.role
    let actor = castMember.actor
    castInnerHTML += ("<p>" + role + ": " + actor + "</p>")  
  }
  castInnerHTML +=""
  cast.innerHTML = castInnerHTML
  
  for (let review of currentMovie.reviews) {
    let username = review.username
    let content = review.content
    reviewInnerHTML += ("<p>" + username + ": " + content + "</p>")
  }
  reviewInnerHTML += ""
  reviews.innerHTML = reviewInnerHTML

  const titanicButton = document.getElementById('Titanic')
  const terminatorButton = document.getElementById('Terminator 2')
  titanicButton.addEventListener('click', (event) => {
    //do something titanic
    updateHTMLContent('Titanic')
  })
  terminatorButton.addEventListener('click', (event) => {
    //do something terminator
    updateHTMLContent('Terminator 2')
  })
}
document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
  
})
