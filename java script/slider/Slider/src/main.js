let pics = document.querySelectorAll('.slides img')
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', shuffling);
document.addEventListener('DOMContentLoaded', initializeSlide);


function initializeSlide(){
  pics[slideIndex].classList.add('displaySlide');
}

function nextSlide(){
  slideIndex ++;
  showSlide(slideIndex);
}

function prevSlide(){
  slideIndex --;
  showSlide(slideIndex);
}

function showSlide(index){
  if(index < 0){
    slideIndex = pics.length - 1;
  }
  else if(index === pics.length){
    slideIndex = 0;
  }
  pics.forEach(pic => {pic.classList.remove('displaySlide')});
  pics[slideIndex].classList.add('displaySlide');
}

function shuffling(){
  pics = [...pics];
  for(i = pics.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [pics[i] , pics[j]] = [pics[j] , pics[i]];
  }
  console.log(pics);
}