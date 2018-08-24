 updateHTMLContent('Titanic') 
 console.log(movies)
  const titanicButton =document.getElementById('Titanic')
  const terminatorButton =document.getElementById('Terminator 2')
  titanicButton.addEventListener('click',(event) =>{
    updateHTMLContent('Titanic') 
  })
  terminatorButton.addEventListener('click',(event) =>{
    updateHTMLContent('Terminator 2') 
  })
 
document.addEventListener("DOMContentLoaded", (e) => {
  console.log(movies)
  const titanicButton =document.getElementById('Titanic')
  const terminatorButton =document.getElementById('Terminator 2')
  titanicButton.addEventListener('click',(event) =>{
    updateHTMLContent('Titanic') 
  })
  terminatorButton.addEventListener('click',(event) =>{
    updateHTMLContent('Terminator 2') 
  })
});
function updateHTMLContent(movieName)
{
  let title = document.getElementById ('title')
  let director = document.getElementById ('director')
  let genre = document.getElementById ('genre')
  let filmRating = document.getElementById ('filmRating')
  let poster=document.getElementById('poster')
  let description =document.getElementById('description')
  let audienceScore=document.getElementById('audienceScore')
  let currentMovie = movies[movieName]
  let cast =document.getElementById('cast')
  let reviews=document.getElementById('reviews')
  
  
  title.innerHTML = currentMovie.title
  director.innerHTML = currentMovie.director
  genre.innerHTML = currentMovie.genre
  filmRating.innerHTML = currentMovie.filmRating
  poster.setAttribute('src', currentMovie.poster)
  description.innerHTML =currentMovie.description
  audienceScore.innerHTML= currentMovie.audienceScore
  let castInnerHTML= ""
  let reviewInnerHTML = ""
  
  for(let i=0; i<currentMovie.cast.length; i++){
    let role=currentMovie.cast[i].role
    let actor=currentMovie.cast[i].actor
    castInnerHTML+=("<li>" + role + ":"+ actor+"</li>")
  }
  castInnerHTML+=""
  cast.innerHTML=castInnerHTML
  
  for (let review of currentMovie.reviews){
    let userName= review.userName
    let content= review.content
    reviewInnerHTML +=("<p>" + userName + ":"+ content +"</p>")
  }
  reviewInnerHTML+=""
  reviews.innerHTML =reviewInnerHTML
}
